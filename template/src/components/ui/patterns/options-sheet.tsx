import { TrueSheet } from '@lodev09/react-native-true-sheet'

export default function OptionsSheet() {
  return (
    <TrueSheet
      backgroundBlur='light'
      backgroundColor='#F4F6FA'
      blurOptions={{
        intensity: 80,
        interaction: false
      }}
      detents={[0.2, 0.5, 1]}
      grabber
      name={'options'}
    >
      <></>
    </TrueSheet>
  )
}
