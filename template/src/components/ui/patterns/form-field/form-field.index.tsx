import * as React from 'react'
import type { ViewProps } from 'react-native'

import { Block } from '@components/ui/primitives/block/block.index'
import { Typography } from '@components/ui/primitives/typography/typo.index'
import type { CommonTextProps } from '@components/ui/primitives/typography/typo.type'
import {
  Controller,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
  FormProvider,
  useFormContext
} from 'react-hook-form'

const Form = FormProvider

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
  const { getFieldState, formState } = useFormContext()

  if (!fieldContext) {
    throw new Error('useFormField should be used within <FormField>')
  }

  if (!itemContext) {
    throw new Error('useFormField should be used within <FormItem>')
  }

  const fieldState = getFieldState(fieldContext.name, formState)
  const { id } = itemContext

  return {
    formDescriptionId: `${id}-form-item-description`,
    formItemId: `${id}-form-item`,
    formMessageId: `${id}-form-item-message`,
    id,
    name: fieldContext.name,
    ...fieldState
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

type FormLabelProps = CommonTextProps & {
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
    id: formItemId
  })
}
FormControl.displayName = 'FormControl'

const FormDescription = ({
  children,
  color = 'gray_400',
  fontToken = 'font.body.small',
  ...props
}: CommonTextProps) => {
  const { formDescriptionId } = useFormField()

  if (!children) {
    return null
  }

  return (
    <Typography
      color={color}
      fontToken={fontToken}
      id={formDescriptionId}
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
}: CommonTextProps) => {
  const { error, formMessageId } = useFormField()
  const body = error ? String(error?.message ?? '') : children

  if (!body) {
    return null
  }

  return (
    <Typography color={color} id={formMessageId} {...props}>
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
