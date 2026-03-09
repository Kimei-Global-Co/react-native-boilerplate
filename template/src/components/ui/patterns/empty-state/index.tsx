import type { TIcon } from '@assets/icons'
import { Block } from '@components/ui/primitives/block/block.index'
import { Icon } from '@components/ui/primitives/icon/icon.index'
import type { IconProps } from '@components/ui/primitives/icon/icon.type'
import { Typography } from '@components/ui/primitives/typography/typo.index'

interface IEmptyStateProps<T extends TIcon = TIcon> {
  title?: string
  description?: string
  icon: IconProps<T>
  action?: React.ReactNode
}

export function EmptyState<T extends TIcon>(
  props: Readonly<IEmptyStateProps<T>>
): React.JSX.Element {
  const { title, description, icon, action } = props
  return (
    <Block align='center' gap='space.075' justify='center'>
      <Icon {...icon} />
      <Typography fontToken='font.heading.large'>{title}</Typography>
      <Typography center={true} margin={{ horizontal: 40 }}>
        {description}
      </Typography>
      {action}
    </Block>
  )
}
