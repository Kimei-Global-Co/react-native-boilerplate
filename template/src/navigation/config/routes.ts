import DevMenu from '@features/__DEV__/dev-menu'
import ExampleList from '@features/__DEV__/example/eaxmple-list'
import ExampleAccordion from '@features/__DEV__/example/example-accordion'
import ExampleAvatar from '@features/__DEV__/example/example-avatar'
import ExampleButton from '@features/__DEV__/example/example-button'
import ExampleCamera from '@features/__DEV__/example/example-camera'
import ExampleCard from '@features/__DEV__/example/example-card'
import ExampleEmptyView from '@features/__DEV__/example/example-empty-view'
import ExampleHeader from '@features/__DEV__/example/example-header'
import ExampleIcon from '@features/__DEV__/example/example-icon'
import ExampleImage from '@features/__DEV__/example/example-image'
import ExampleLingui from '@features/__DEV__/example/example-lingui'
import ExampleRow from '@features/__DEV__/example/example-row'
import ExampleSheet from '@features/__DEV__/example/example-sheet'
import ExampleSpacer from '@features/__DEV__/example/example-spacer'
import ExampleSpinner from '@features/__DEV__/example/example-spinner'
import ExampleSwitch from '@features/__DEV__/example/example-switch'
import ExampleTag from '@features/__DEV__/example/example-tag'
import ExampleTextInput from '@features/__DEV__/example/example-text-input'
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
  Accordion: ExampleAccordion,
  Avatar: ExampleAvatar,
  Button: ExampleButton,
  Camera: ExampleCamera,
  Card: ExampleCard,
  DevMenu: DevMenu,
  EmptyView: ExampleEmptyView,
  Header: ExampleHeader,
  Icon: ExampleIcon,
  Image: ExampleImage,
  Lingui: ExampleLingui,
  List: ExampleList,
  Row: ExampleRow,
  Sheet: ExampleSheet,
  Spacer: ExampleSpacer,
  Spinner: ExampleSpinner,
  Switch: ExampleSwitch,
  Tag: ExampleTag,
  TextInput: ExampleTextInput,
  Typography: ExampleTypography
}
