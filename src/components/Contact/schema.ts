import { z } from 'zod'

export const FormDataSchema = z.object({

    email: z
        .string()
        .email('Please enter a valid email.')
        .nonempty('Email is required.'),
  firstname: z.string().nonempty('Name is required.'),
  lastname: z.string().nonempty('Name is required.'),
  phonenumber: z.string().nonempty('Phone number is required.'),
  message: z
    .string()
    .nonempty('Message is required.')
    .min(6, { message: 'Message must be at least 6 characters.' })
})