import { StyleSheet } from 'react-native'

import { Row } from '../row/row.index'

export function ButtonContent({
  children
}: Readonly<{
  children: React.ReactNode
}>): React.JSX.Element {
  return (
    <Row gap={5} justify='center' style={styles.content}>
      {children}
    </Row>
  )
}

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'center'
  }
})
