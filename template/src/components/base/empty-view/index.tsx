import { localImage } from '@assets/images'
import Block from '../block'
import Image from '../image'
import Typography from '../typography'

export interface IEmptyViewProps {
  title?: string
  description?: string
}

export default function EmptyView(props: IEmptyViewProps): React.JSX.Element {
  const { title, description } = props
  return (
    <Block align='center' justify='center'>
      <Image resizeMode='contain' size={250} source={localImage().icEmpty} />
      <Typography fontType='extraBold' size={24}>
        {title}
      </Typography>
      <Typography center margin={{ horizontal: 40 }}>
        {description}
      </Typography>
    </Block>
  )
}
