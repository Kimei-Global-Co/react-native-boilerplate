import { Text } from 'react-native'

import { createContainer } from '../create-container'

const AccordionComponent = (): React.JSX.Element => {
  return <Text>Accordion Component</Text>
}

const Root = createContainer(AccordionComponent, 'Accordion')

export default function ExampleAccordion(): React.JSX.Element {
  return <Root />
}
