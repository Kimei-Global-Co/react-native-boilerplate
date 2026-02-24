import { ScrollView } from 'react-native'

import { Block } from '@components/ui/layouts/block/block.index'
import { Row } from '@components/ui/layouts/row/row.index'
import { Header } from '@components/ui/patterns/header/header.index'
import { Divider } from '@components/ui/primitives/divider/divider.index'
import { Typography } from '@components/ui/primitives/typography/typo.index'
import { createContainer } from '../create-container'

const DividerComponent = (): React.JSX.Element => {
  return (
    <Block collapsable={false} flex inset='bottom'>
      <Header>
        <Header.Section position='left'>
          <Header.BackButton />
        </Header.Section>
        <Header.Section position='content'>
          <Header.Title>Divider component</Header.Title>
        </Header.Section>
      </Header>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Block gap={24} padding={16}>
          {/* Basic Horizontal Divider */}
          <Block gap={8}>
            <Typography fontToken='font.heading.xsmall'>
              Basic Horizontal Divider
            </Typography>
            <Block backgroundColor='white' padding={16} radius={8}>
              <Typography>Content above</Typography>
              <Divider spacing={12} />
              <Typography>Content below</Typography>
            </Block>
          </Block>

          {/* Divider with Label */}
          <Block gap={8}>
            <Typography fontToken='font.heading.xsmall'>
              Divider with Label
            </Typography>
            <Block backgroundColor='white' padding={16} radius={8}>
              <Typography>Content above</Typography>
              <Divider label='OR' spacing={12} />
              <Typography>Content below</Typography>
            </Block>
          </Block>

          {/* Different Thicknesses */}
          <Block gap={8}>
            <Typography fontToken='font.heading.xsmall'>
              Different Thicknesses
            </Typography>
            <Block backgroundColor='white' gap={16} padding={16} radius={8}>
              <Block gap={4}>
                <Typography color='gray_500'>thickness: 1 (default)</Typography>
                <Divider />
              </Block>
              <Block gap={4}>
                <Typography color='gray_500'>thickness: 2</Typography>
                <Divider thickness={2} />
              </Block>
              <Block gap={4}>
                <Typography color='gray_500'>thickness: 4</Typography>
                <Divider thickness={4} />
              </Block>
            </Block>
          </Block>

          {/* Different Colors */}
          <Block gap={8}>
            <Typography fontToken='font.heading.xsmall'>
              Different Colors
            </Typography>
            <Block backgroundColor='white' gap={16} padding={16} radius={8}>
              <Block gap={4}>
                <Typography color='gray_500'>gray_200 (default)</Typography>
                <Divider thickness={2} />
              </Block>
              <Block gap={4}>
                <Typography color='gray_500'>blue_500</Typography>
                <Divider color='blue_500' thickness={2} />
              </Block>
              <Block gap={4}>
                <Typography color='gray_500'>red_500</Typography>
                <Divider color='red_500' thickness={2} />
              </Block>
              <Block gap={4}>
                <Typography color='gray_500'>green_500</Typography>
                <Divider color='green_500' thickness={2} />
              </Block>
            </Block>
          </Block>

          {/* Labels with Custom Colors */}
          <Block gap={8}>
            <Typography fontToken='font.heading.xsmall'>
              Labels with Custom Colors
            </Typography>
            <Block backgroundColor='white' gap={16} padding={16} radius={8}>
              <Divider label='DEFAULT' />
              <Divider color='blue_400' label='BLUE' labelColor='blue_500' />
              <Divider color='red_400' label='RED' labelColor='red_500' />
            </Block>
          </Block>

          {/* Vertical Divider */}
          <Block gap={8}>
            <Typography fontToken='font.heading.xsmall'>
              Vertical Divider
            </Typography>
            <Block backgroundColor='white' padding={16} radius={8}>
              <Row align='center' gap={0} style={{ height: 40 }}>
                <Block align='center' flex justify='center'>
                  <Typography>Left</Typography>
                </Block>
                <Divider orientation='vertical' />
                <Block align='center' flex justify='center'>
                  <Typography>Center</Typography>
                </Block>
                <Divider orientation='vertical' />
                <Block align='center' flex justify='center'>
                  <Typography>Right</Typography>
                </Block>
              </Row>
            </Block>
          </Block>

          {/* Vertical Divider with Different Styles */}
          <Block gap={8}>
            <Typography fontToken='font.heading.xsmall'>
              Vertical Divider Variants
            </Typography>
            <Block backgroundColor='white' padding={16} radius={8}>
              <Row align='center' gap={0} style={{ height: 60 }}>
                <Block align='center' flex justify='center'>
                  <Typography>Thin</Typography>
                </Block>
                <Divider orientation='vertical' thickness={1} />
                <Block align='center' flex justify='center'>
                  <Typography>Medium</Typography>
                </Block>
                <Divider
                  color='blue_500'
                  orientation='vertical'
                  thickness={2}
                />
                <Block align='center' flex justify='center'>
                  <Typography>Thick</Typography>
                </Block>
                <Divider color='red_500' orientation='vertical' thickness={4} />
                <Block align='center' flex justify='center'>
                  <Typography>Extra</Typography>
                </Block>
              </Row>
            </Block>
          </Block>

          {/* Use Case: Login Form */}
          <Block gap={8}>
            <Typography fontToken='font.heading.xsmall'>
              Use Case: Login Form
            </Typography>
            <Block backgroundColor='white' gap={16} padding={16} radius={8}>
              <Block
                backgroundColor='gray_100'
                padding={12}
                radius={8}
                style={{ height: 44 }}
              >
                <Typography color='gray_400'>Email</Typography>
              </Block>
              <Block
                backgroundColor='gray_100'
                padding={12}
                radius={8}
                style={{ height: 44 }}
              >
                <Typography color='gray_400'>Password</Typography>
              </Block>
              <Block
                align='center'
                backgroundColor='blue_500'
                justify='center'
                padding={12}
                radius={8}
              >
                <Typography color='white' fontToken='font.heading.xsmall'>
                  Sign In
                </Typography>
              </Block>
              <Divider label='OR' spacing={4} />
              <Block
                align='center'
                backgroundColor='gray_100'
                justify='center'
                padding={12}
                radius={8}
              >
                <Typography fontToken='font.heading.xsmall'>
                  Continue with Google
                </Typography>
              </Block>
            </Block>
          </Block>
        </Block>
      </ScrollView>
    </Block>
  )
}

const Root = createContainer(DividerComponent, 'Divider')

export default function ExampleDivider(): React.JSX.Element {
  return <Root />
}
