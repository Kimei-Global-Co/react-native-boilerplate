import * as React from 'react'
import type { ViewProps } from 'react-native'

import { Block } from '@components/ui/primitives/block/block.index'
import { Typography } from '@components/ui/primitives/typography/typo.index'
import {
  Controller,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
  FormProvider,
  type FormProviderProps,
  useFormContext,
  useFormState
} from 'react-hook-form'

const Form = <
  TFieldValues extends FieldValues = FieldValues,
  TContext = unknown,
  TTransformedValues extends FieldValues | undefined = undefined
>(
  props: FormProviderProps<TFieldValues, TContext, TTransformedValues>
) => {
  return <FormProvider {...props} />
}

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
  name: TName
}

const FormFieldContext = React.createContext<FormFieldContextValue | null>(null)

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  )
}

const useFormField = () => {
  const fieldContext = React.use(FormFieldContext)
  const itemContext = React.use(FormItemContext)
  const { getFieldState, control } = useFormContext()

  if (!fieldContext) {
    throw new Error('useFormField should be used within <FormField>')
  }

  if (!itemContext) {
    throw new Error('useFormField should be used within <FormItem>')
  }

  const { id } = itemContext

  /**
   * We use `useFormState` here to ensure that this hook (and the component
   * using it) is correctly subscribed to changes in the field's state.
   */
  const { errors } = useFormState({
    control,
    name: fieldContext.name
  })

  // We can still use the proxy from useFormContext if needed,
  // but useFormState is more reliable for separate field components.
  const { formState } = useFormContext()
  const fieldState = getFieldState(fieldContext.name, formState)

  return {
    formDescriptionId: `${id}-form-item-description`,
    formItemId: `${id}-form-item`,
    formMessageId: `${id}-form-item-message`,
    id,
    name: fieldContext.name,
    ...fieldState,
    // Ensure we use the latest error from the state subscription
    error: fieldState.error || errors[fieldContext.name]
  }
}

type FormItemContextValue = {
  id: string
}

const FormItemContext = React.createContext<FormItemContextValue | null>(null)

const FormItem = ({
  gap = 'space.050',
  children,
  ...props
}: React.ComponentPropsWithRef<typeof Block>) => {
  const id = React.useId()

  return (
    <FormItemContext.Provider value={{ id }}>
      <Block gap={gap} {...props}>
        {children}
      </Block>
    </FormItemContext.Provider>
  )
}
FormItem.displayName = 'FormItem'

type FormLabelProps = React.ComponentProps<typeof Typography> & {
  isRequired?: boolean
}

const FormLabel = ({
  children,
  fontToken = 'font.body.medium',
  isRequired,
  ...props
}: FormLabelProps) => {
  const { error } = useFormField()

  return (
    <Typography
      color={error ? 'red_600' : 'gray_600'}
      fontToken={fontToken}
      {...props}
    >
      {children}
      {isRequired && <Typography color='red_600'>*</Typography>}
    </Typography>
  )
}
FormLabel.displayName = 'FormLabel'

const FormControl = ({
  children
}: {
  children: React.ReactElement<ViewProps>
}) => {
  const { formItemId } = useFormField()

  if (!React.isValidElement(children)) {
    return <>{children}</>
  }

  return React.cloneElement(children, {
    nativeID: formItemId
  })
}
FormControl.displayName = 'FormControl'

const FormDescription = ({
  children,
  color = 'gray_400',
  fontToken = 'font.body.small',
  ...props
}: Omit<FormLabelProps, 'isRequired'>) => {
  const { formDescriptionId } = useFormField()

  if (!children) {
    return null
  }

  return (
    <Typography
      color={color}
      fontToken={fontToken}
      nativeID={formDescriptionId}
      {...props}
    >
      {children}
    </Typography>
  )
}
FormDescription.displayName = 'FormDescription'

const FormMessage = ({
  children,
  fontToken = 'font.body.small.medium',
  color = 'red_600',
  ...props
}: Omit<FormLabelProps, 'isRequired'>) => {
  const { error, formMessageId } = useFormField()
  const body = error ? String(error.message ?? 'Invalid field') : children

  if (!body) {
    return null
  }

  return (
    <Typography color={color} nativeID={formMessageId} {...props}>
      {body}
    </Typography>
  )
}
FormMessage.displayName = 'FormMessage'

export {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  useFormField
}
