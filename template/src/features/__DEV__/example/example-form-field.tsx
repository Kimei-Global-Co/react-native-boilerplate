import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@components/ui/patterns/form-field/form-field.index'
import { Block } from '@components/ui/primitives/block/block.index'
import { Button } from '@components/ui/primitives/button/button.index'
import { Input } from '@components/ui/primitives/input/input.index'
import { Typography } from '@components/ui/primitives/typography/typo.index'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { maxLength, minLength, object, regex, string } from 'zod/mini'
import { createContainer } from '../create-container'

const formSchema = object({
  password: string().check(
    // biome-ignore lint/style/noMagicNumbers: example dont need check
    minLength(8, { error: 'Password must be at least 8 characters' }),
    regex(/[A-Z]/, {
      error: 'Password must contain at least one uppercase letter'
    })
  ),
  username: string().check(
    // biome-ignore lint/style/noMagicNumbers: example dont need check
    minLength(3, { error: 'Username must be at least 3 characters' }),
    // biome-ignore lint/style/noMagicNumbers: example dont need check
    maxLength(20, { error: 'Username must be at most 20 characters' })
  )
})

type FormValues = {
  [K in keyof typeof formSchema.shape]: string
}

const FormFieldComponent = (): React.JSX.Element => {
  const form = useForm<FormValues>({
    defaultValues: {
      password: '',
      username: ''
    },
    mode: 'onChange',
    resolver: zodResolver(formSchema)
  })

  const onSubmit = (data: FormValues) => {
    console.info('data1: ', data)
  }

  return (
    <Form {...form}>
      <Block gap={20} padding={16}>
        <Typography>FormField Collection with Zod</Typography>

        <Block gap={20}>
          <FormField
            {...form.register('username')}
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel isRequired={true}>Username</FormLabel>
                <FormControl>
                  <Input
                    clearable={true}
                    error={!!fieldState.error}
                    leftIcon='user'
                    onChangeText={field.onChange}
                    placeholder='Enter your username'
                    value={field.value}
                  />
                </FormControl>
                <FormDescription>
                  This is your public display name (3-20 characters).
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            {...form.register('password')}
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel isRequired={true}>Password</FormLabel>
                <FormControl>
                  <Input
                    clearable={true}
                    error={!!fieldState.error}
                    onChangeText={field.onChange}
                    placeholder='********'
                    secureTextEntry={true}
                    value={field.value}
                  />
                </FormControl>
                <FormDescription>
                  Requirement: 8+ chars & 1 uppercase letter.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button onPress={form.handleSubmit(onSubmit)} title='Submit Form' />
        </Block>
      </Block>
    </Form>
  )
}

const Root = createContainer(FormFieldComponent, 'FormField')

export function ExampleFormField(): React.JSX.Element {
  return <Root />
}
