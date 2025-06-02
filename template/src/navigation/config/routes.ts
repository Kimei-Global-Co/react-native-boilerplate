import DevMenu from '@features/__DEV__/dev-menu'
import ExampleList from '@features/__DEV__/example/eaxmple-list'
import ExampleAccordion from '@features/__DEV__/example/example-accordion'
import ExampleAvatar from '@features/__DEV__/example/example-avatar'
import ExampleButton from '@features/__DEV__/example/example-button'
import ExampleCard from '@features/__DEV__/example/example-card'
import ExampleEmptyView from '@features/__DEV__/example/example-empty-view'
import ExampleHeader from '@features/__DEV__/example/example-header'
import ExampleImage from '@features/__DEV__/example/example-image'
import ExampleLingui from '@features/__DEV__/example/example-lingui'
import ExampleRow from '@features/__DEV__/example/example-row'
import ExampleSpacer from '@features/__DEV__/example/example-spacer'
import ExampleSpinner from '@features/__DEV__/example/example-spinner'
import ExampleTag from '@features/__DEV__/example/example-tag'
import ExampleTypography from '@features/__DEV__/example/example-typography'
import Signin from '@features/auth/sign-in'
import Signup from '@features/auth/sign-up'

import { createEnum } from './type'

/**
/**
 * Routes for screens
 */
export const ROUTES = createEnum({
  Login: 'Login'
})

/**
/**
 * Common screens
 */

export const commonScreens = {}

/**
 * Screens when user logged in
 */
export const userScreens = {}

/**
 * Screens user when user not logged in
 *
 */
export const notLoggedInScreens = {
  Signin: Signin,
  Signup: Signup
}

/**
 * Modal
 */
export const notLoggedInModalSlides = {}
export const userModalSlides = {}
export const commonModalSlides = {}

/**
 * Bottom Tabs
 */
export const bottomTabScreens = []

/**
 * Dev screens
 */
export const devScreens = {
  DevMenu: DevMenu,
  Lingui: ExampleLingui,
  Accordion: ExampleAccordion,
  Avatar: ExampleAvatar,
  Button: ExampleButton,
  Card: ExampleCard,
  EmptyView: ExampleEmptyView,
  Header: ExampleHeader,
  Image: ExampleImage,
  List: ExampleList,
  Row: ExampleRow,
  Spacer: ExampleSpacer,
  Spinner: ExampleSpinner,
  Tag: ExampleTag,
  Typography: ExampleTypography
}
