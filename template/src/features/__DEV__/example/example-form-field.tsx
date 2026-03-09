import {
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
import { z } from 'zod'
import { createContainer } from '../create-container'

const formSchema = z.object({
  password: z
    .string()
    // biome-ignore lint/style/noMagicNumbers: example dont need check
    .min(8, { message: 'Password must be at least 8 characters' })
    .regex(/[A-Z]/, {
      message: 'Password must contain at least one uppercase letter'
    }),
  username: z
    .string()
    // biome-ignore lint/style/noMagicNumbers: example dont need check
    .min(3, { message: 'Username must be at least 3 characters' })
    // biome-ignore lint/style/noMagicNumbers: example dont need check
    .max(20, { message: 'Username must be at most 20 characters' })
})

type FormValues = z.infer<typeof formSchema>

const FormFieldComponent = (): React.JSX.Element => {
  const form = useForm<FormValues>({
    defaultValues: {
      password: '',
      username: ''
    },
    resolver: zodResolver(formSchema)
  })

  const onSubmit = (data: FormValues) => {
    console.info('data: ', data)
  }

  return (
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
  )
}

const Root = createContainer(FormFieldComponent, 'FormField')

export function ExampleFormField(): React.JSX.Element {
  return <Root />
}
