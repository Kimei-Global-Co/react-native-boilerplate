import type React from 'react'
import type { ViewStyle } from 'react-native'

import Block from '@components/ui/layouts/block/block.index'
import Button from '@components/ui/primitives/button/button.index'
import Typography from '@components/ui/primitives/typography/typo.index'

interface IErrorStateProps {
  title: string
  message: string
  retryText?: string
  onRetry?: () => void
  style?: ViewStyle
}

export function ErrorState(
  props: Readonly<IErrorStateProps>
): React.JSX.Element {
  const {
    title = 'Something went wrong',
    message,
    retryText = 'Try Again',
    onRetry,
    style
  } = props

  return (
    <Block align='center' justify='center' style={style}>
      <Typography fontType='extraBold' size={24}>
        {title}
      </Typography>
      <Typography center color='gray_400' margin={{ bottom: 24, top: 8 }}>
        {message}
      </Typography>
      {onRetry && (
        <Button
          onPress={onRetry}
          title={retryText}
          variant={{ color: 'primary' }}
        />
      )}
    </Block>
  )
}
