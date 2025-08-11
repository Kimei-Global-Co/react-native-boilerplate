import Accordion from '@components/base/accordion'
import Block from '@components/base/block'
import Header from '@components/base/header'
import Typography from '@components/base/typography'
import { createContainer } from '../create-container'

const defaultContent =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
const AccordionComponent = (): React.JSX.Element => {
  return (
    <Block flex>
      <Header isBack title='Accordion component' />
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
