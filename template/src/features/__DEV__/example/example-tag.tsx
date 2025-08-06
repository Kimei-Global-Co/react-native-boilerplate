import { Block, Header, Tag } from '@components'
import { createContainer } from '../create-container'

const TagComponent = (): React.JSX.Element => {
  return (
    <Block>
      <Header isBack title='Tag component' />
      <Block gap={16} padding={16}>
        {/* Basic Tag */}
        <Tag.Root>
          <Tag.Label>Basic Tag</Tag.Label>
        </Tag.Root>

        {/* Different variants */}
        <Tag.Root variant='solid'>
          <Tag.Label>Solid Tag</Tag.Label>
        </Tag.Root>
        <Tag.Root variant='outline'>
          <Tag.Label>Outline Tag</Tag.Label>
        </Tag.Root>

        {/* Different sizes */}
        <Tag.Root size='md'>
          <Tag.Label>Medium Tag</Tag.Label>
        </Tag.Root>
        <Tag.Root size='lg'>
          <Tag.Label>Large Tag</Tag.Label>
        </Tag.Root>

        {/* Tag with close button */}
        <Tag.Root>
          <Tag.Label>Closeable Tag</Tag.Label>
          <Tag.EndElement>
            <Tag.CloseTrigger onClose={() => console.info('Tag closed')} />
          </Tag.EndElement>
        </Tag.Root>
      </Block>
    </Block>
  )
}

const Root = createContainer(TagComponent, 'Tag')

export default function ExampleTag(): React.JSX.Element {
  return <Root />
}
