import Block from '@components/ui/primitives/block/block.index'
import Header from '@components/ui/primitives/header/header.index'
import Tag from '@components/ui/primitives/tag/tag.index'
import { createContainer } from '../create-container'

const TagComponent = (): React.JSX.Element => {
  return (
    <Block>
      <Header isBack title='Tag component' />
      <Block gap={16} padding={16}>
        {/* Basic Tag */}
        <Tag>
          <Tag.Label>Basic Tag</Tag.Label>
        </Tag>

        {/* Different variants */}
        <Tag variant='solid'>
          <Tag.Label>Solid Tag</Tag.Label>
        </Tag>
        <Tag variant='outline'>
          <Tag.Label>Outline Tag</Tag.Label>
        </Tag>

        {/* Different sizes */}
        <Tag size='md'>
          <Tag.Label>Medium Tag</Tag.Label>
        </Tag>
        <Tag size='lg'>
          <Tag.Label>Large Tag</Tag.Label>
        </Tag>

        {/* Tag with close button */}
        <Tag>
          <Tag.Label>Closeable Tag</Tag.Label>
          <Tag.EndElement>
            <Tag.CloseTrigger onClose={() => console.info('Tag closed')} />
          </Tag.EndElement>
        </Tag>
      </Block>
    </Block>
  )
}

const Root = createContainer(TagComponent, 'Tag')

export default function ExampleTag(): React.JSX.Element {
  return <Root />
}
