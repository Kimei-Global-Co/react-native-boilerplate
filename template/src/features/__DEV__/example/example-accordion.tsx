import { Accordion, Block, Header, Text } from '@components'

import { createContainer } from '../create-container'

const AccordionComponent = (): React.JSX.Element => {
  return (
    <Block flex={1}>
      <Header isBack title={'Accordion component'} />
      <Block gap={8} padding={16}>
        <Accordion.Root>
          <Accordion.Header>
            <Text>hellooooo</Text>
          </Accordion.Header>
          <Accordion.Content>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
          </Accordion.Content>
        </Accordion.Root>
        <Accordion.Root variant='bordered'>
          <Accordion.Header>
            <Text>hellooooo</Text>
          </Accordion.Header>
          <Accordion.Content>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
          </Accordion.Content>
        </Accordion.Root>
        <Accordion.Root variant='shadow'>
          <Accordion.Header>
            <Text>hellooooo</Text>
          </Accordion.Header>
          <Accordion.Content>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
          </Accordion.Content>
        </Accordion.Root>
      </Block>
    </Block>
  )
}

const Root = createContainer(AccordionComponent, 'Accordion')

export default function ExampleAccordion(): React.JSX.Element {
  return <Root />
}
