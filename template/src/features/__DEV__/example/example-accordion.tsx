import Block from '@components/ui/layouts/block/block.index'
import Accordion from '@components/ui/patterns/accordion/accordion.index'
import Header from '@components/ui/patterns/header/header.index'
import Typography from '@components/ui/primitives/typography/typo.index'
import { createContainer } from '../create-container'

const defaultContent =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
const AccordionComponent = (): React.JSX.Element => {
  return (
    <Block flex>
      <Header>
        <Header.Left>
          <Header.BackButton />
        </Header.Left>
        <Header.Content>
          <Header.Title>Accordion component</Header.Title>
        </Header.Content>
      </Header>
      <Block gap={8} padding={16}>
        <Accordion variant='default'>
          <Accordion.Item itemKey='1' title='Accordion 1'>
            <Typography>{defaultContent}</Typography>
          </Accordion.Item>
          <Accordion.Item itemKey='2' title='Accordion 2'>
            <Typography>{defaultContent}</Typography>
          </Accordion.Item>
          <Accordion.Item itemKey='3' title='Accordion 3'>
            <Typography>{defaultContent}</Typography>
          </Accordion.Item>
        </Accordion>
        <Accordion variant='bordered'>
          <Accordion.Item itemKey='1' title='Accordion 1'>
            <Typography>{defaultContent}</Typography>
          </Accordion.Item>
          <Accordion.Item itemKey='2' title='Accordion 2'>
            <Typography>{defaultContent}</Typography>
          </Accordion.Item>
          <Accordion.Item itemKey='3' title='Accordion 3'>
            <Typography>{defaultContent}</Typography>
          </Accordion.Item>
        </Accordion>
        <Accordion variant='split'>
          <Accordion.Item itemKey='1' title='Accordion 1'>
            <Typography>{defaultContent}</Typography>
          </Accordion.Item>
          <Accordion.Item itemKey='2' title='Accordion 2'>
            <Typography>{defaultContent}</Typography>
          </Accordion.Item>
          <Accordion.Item itemKey='3' title='Accordion 3'>
            <Typography>{defaultContent}</Typography>
          </Accordion.Item>
        </Accordion>
      </Block>
    </Block>
  )
}

const Root = createContainer(AccordionComponent, 'Accordion')

export default function ExampleAccordion(): React.JSX.Element {
  return <Root />
}
