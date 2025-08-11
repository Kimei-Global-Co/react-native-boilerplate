import { useEffect, useRef } from 'react'
import { StyleSheet } from 'react-native'

import BottomSheet from '@discord/bottom-sheet/src'
import { useSheetStore } from 'store/sheet'
import {
  createCustomBackdrop,
  DEFAULT_SNAPPOINTS,
  HANDLE_HEIGHT
} from './custom-backdrop'

export default function SheetsContainer(): React.JSX.Element {
  const bottomSheetRef = useRef<BottomSheet>(null)
  const activeSheets = useSheetStore((state) => state.activeSheets)
  const closeSheet = useSheetStore((state) => state.closeSheet)

  const activeModalSheet = activeSheets[activeSheets.length - 1]
  const isSheetActive = activeSheets.length > 0

  const onClose: () => void = closeSheet

  const onBottomSheetChange = (snapPoint: number): void => {
    if (snapPoint === -1) closeSheet()
  }

  useEffect(() => {
    //checking is active modal
    if (isSheetActive) {
      bottomSheetRef.current?.snapToIndex(0)
      return
    }
    bottomSheetRef.current?.close()
  }, [isSheetActive])

  //#region render
  let snapPoints: (string | number)[] = DEFAULT_SNAPPOINTS
  let element: React.JSX.Element | null = null

  switch (activeModalSheet?.name) {
    case 'options':
      snapPoints = ['20%']
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
        isSheetActive ? createCustomBackdrop(onClose) : undefined
      }
      backgroundStyle={styles.defaultBackgroundStyle}
      enableDynamicSizing={false}
      enablePanDownToClose
      handleHeight={HANDLE_HEIGHT}
      handleIndicatorStyle={styles.handleIndicator}
      handleStyle={[styles.defaultHandleStyle]}
      index={isSheetActive ? 0 : -1}
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
