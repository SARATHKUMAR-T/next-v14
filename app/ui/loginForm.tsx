import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { loginHandler } from '@/lib/actions'
import React from 'react'

function LoginForm() {
    return (
        <form action={loginHandler}>
            <div className='space-y-4 w-[450px] bg-slate-300 p-6 rounded-lg'>
                <h1>login</h1>
                <Input id='email' name='email' type='email' placeholder='Enter email' />
                <Input id='password' name='password' type='password' placeholder='Enter Password' />
                <Button type='submit'>Login</Button>
            </div>
        </form>
    )
}

export default LoginForm