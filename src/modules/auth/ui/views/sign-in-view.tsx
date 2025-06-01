"use client"

import { Card, CardContent } from '@/components/ui/card'
import React from 'react'
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import { Alert,AlertTitle } from '@/components/ui/alert'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Form,FormControl,FormField,FormItem,FormLabel,FormMessage } from '@/components/ui/form'
import { OctagonAlertIcon } from 'lucide-react'
import { useForm } from 'react-hook-form'
import Link from 'next/link'

const formSchema=z.object({
    email:z.string().email({message:'Invalid email address'}),
    password:z.string().min(6,{message:'Password must be at least 6 characters long'})
})

const SignInView = () => {
    const form=useForm<z.infer<typeof formSchema>>({
        resolver:zodResolver(formSchema),
        defaultValues:{
            email:'',
            password:''

        }
    })
  return (
   <div className='flex flex-col gap-6'>
     <Card className='overflow-hidden p-0'>
        <CardContent className='grid p-0 md:grid-cols-2'>
           
                <Form {...form}>
<form className='p-6 md:p-8'>
    <div className='flex flex-col gap-6'>
        <div className="flex flex-col items-center text-center">
            <h1 className='text-2xl font-bold'>
                Welcome Back
            </h1>
            <p className='text-muted-foreground text-balance'>
                Login to your account
            </p>
        </div>
        <div className='grid gap-3'>
            <FormField control={form.control} name='email' render={({field})=>(
                <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                        <Input type='email' placeholder='Enter your email' {...field} />
                    </FormControl>
                    <FormMessage />

                </FormItem>
            )} />

        </div>
        <div className='grid gap-3'>
            <FormField control={form.control} name='password' render={({field})=>(
                <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                        <Input type='password' placeholder='Enter your password' {...field} />
                    </FormControl>
                    <FormMessage />

                </FormItem>
            )} />

        </div>
        {
            true && (
                <Alert className='bg-destructive/10 border-none'>
                <OctagonAlertIcon className='h-4 w-4 !text-destructive' />
                <AlertTitle className='text-sm'>Invalid credentials</AlertTitle>
                </Alert>
            )
        }

        <Button type='submit' className='w-full'>
      Sign In
        </Button>
        <div className='after:border-border relative text-center  text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t '>
        <span className='bg-card text-muted-foreground relative z-10 px-2'>
            Or continue with 
        </span>


        </div>
        <div className='grid grid-cols-2 gap-4'>
            <Button variant={"outline"} type='button' className='w-full'>
            Google
            </Button>
               <Button variant={"outline"} type='button' className='w-full'>
            Github
            </Button>

        </div>
        <div className='text-center text-sm'>
         Don&apos;t have an account?{" "} <Link className='underline underline-offset-4' href={"/sign-up"}>
         Sign Up</Link>
        </div>
        <div>

        </div>
    </div>

</form>

                </Form>
           
            <div className='bg-radial  from-green-700 to-green-900 relative hidden md:flex flex-col gap-y-4 items-center justify-center'>
                <img src="/logo.svg" alt="Image" className='h-[92px] w-[92px]' />
                <p className='text-2xl font-semibold text-white'>Meet.AI</p>
            </div>
        </CardContent>
     </Card>
     <div className='text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline-offset-4'>
    By clicking continue, you aggree to our <a href="#">Terms of Service and <a href="#">Privacy Policy</a> </a>
     </div>
   </div>
  )
}

export default SignInView