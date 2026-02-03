import type { IconType } from '@assets/icons'
import { Block } from '@components/ui/layouts/block/block.index'
import { Typography } from '@components/ui/primitives/typography/typo.index'
import { Icon } from '../../primitives/icon/icon.index'
import type { IconProps } from '../../primitives/icon/icon.type'

interface IEmptyStateProps<T extends IconType = IconType> {
  title?: string
  description?: string
  icon: IconProps<T>
  action?: React.ReactNode
}

export function EmptyState<T extends IconType>(
  props: Readonly<IEmptyStateProps<T>>
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
