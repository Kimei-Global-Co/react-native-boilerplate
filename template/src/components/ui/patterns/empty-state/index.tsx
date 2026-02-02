import Block from '@components/ui/layouts/block/block.index'
import Typography from '@components/ui/primitives/typography/typo.index'
import Icon from '../../primitives/icon/icon.index'
import type { IconComponentProps } from '../../primitives/icon/icon.type'

interface IEmptyStateProps {
  title?: string
  description?: string
  icon: IconComponentProps
  action?: React.ReactNode
}

export function EmptyState(
  props: Readonly<IEmptyStateProps>
): React.JSX.Element {
  const { title, description, icon, action } = props
  return (
    <Block align='center' gap='_6' justify='center'>
      <Icon {...icon} />
      <Typography fontType='extraBold' size={24}>
        {title}
      </Typography>
      <Typography center margin={{ horizontal: 40 }}>
        {description}
      </Typography>
      {action}
    </Block>
  )
}
