import { useEffect, useRef } from 'react'
import { StyleSheet } from 'react-native'

import BottomSheet from '@discord/bottom-sheet/src'
import {
  createCustomBackdrop,
  DEFAULT_SNAPPOINTS,
  HANDLE_HEIGHT
} from './custom-backdrop'

export const ModalsSheetContainer =
  function ModalsSheetContainer(): React.JSX.Element {
    const activeModalSheet = { name: 'choose-options' }
    const bottomSheetRef = useRef<BottomSheet>(null)

    const onClose = (): void => {
      bottomSheetRef.current?.close()
      // modalSheetState.closeModalSheet()
    }

    const onBottomSheetChange = (snapPoint: number): void => {
      if (snapPoint === -1) return
    }

    useEffect(() => {
      //checking is active modal
      if (activeModalSheet?.name) {
        bottomSheetRef.current?.snapToIndex(0)
        return
      }
      bottomSheetRef.current?.close()
    }, [])

    //#region render
    let snapPoints: (string | number)[] = DEFAULT_SNAPPOINTS
    let element: React.JSX.Element | null = null

    switch (activeModalSheet?.name) {
      case 'choose-options':
        snapPoints = ['20%']
        element = <></>
        break
      case 'view-kr/actions':
        snapPoints = ['100%']
        element = <></>
        break
      default:
        break
    }
    //#endregion

    return (
      <BottomSheet
        android_keyboardInputMode='adjustResize'
        backdropComponent={
          activeModalSheet.name.length > 0
            ? createCustomBackdrop(onClose)
            : undefined
        }
        backgroundStyle={styles.defaultBackgroundStyle}
        enablePanDownToClose
        handleHeight={HANDLE_HEIGHT}
        handleIndicatorStyle={styles.handleIndicator}
        handleStyle={[styles.defaultHandleStyle]}
        index={activeModalSheet.name.length > 0 ? 0 : -1}
        keyboardBlurBehavior='restore'
        onChange={onBottomSheetChange}
        ref={bottomSheetRef}
        snapPoints={snapPoints}
      >
        {element}
      </BottomSheet>
    )
  }

const styles = StyleSheet.create({
  defaultBackgroundStyle: {
    backgroundColor: '#F4F6FA'
  },
  defaultHandleStyle: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: 0,
    maxHeight: 0
  },
  handleIndicator: {
    backgroundColor: 'rgba(60, 60, 67, 0.3)'
  }
})
