'use client'
import { supabase } from '@/lib/supabase';
import { AuthError } from '@supabase/supabase-js';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

type CredentialsProps = {
    email: string;
    password: string
}

const AdminPage = () => {
    const router = useRouter();

    const [errorLogin, setErrorLogin] = useState<AuthError | null>();
    const [credentials, setCredentials] = useState<CredentialsProps>({ email: '', password: '' });

    const handleLogin = async (credentials: CredentialsProps) => {

        const { data, error } = await supabase.auth.signInWithPassword({
            email: credentials.email,
            password: credentials.password,
        })

        console.log('Data', data)

        if (data) {
            router.push('/')
        } else {
            setErrorLogin(error);
        }
    }


    return (
        <>
            {errorLogin && <div className="toast toast-top toast-center">
                <div className="alert alert-error">
                    <span>{errorLogin.message}</span>
                </div>
            </div>}
            <div className='flex flex-col h-screen items-center justify-center '>

                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                    <legend className="fieldset-legend text-3xl">Login</legend>

                    <label className="label mt-2">Email</label>
                    <input onChange={(e) => setCredentials({...credentials, email:e.target.value})} value={credentials.email} name='email' type="text" className="input" placeholder="email" />

                    <label className="label mt-2">Password</label>
                    <input onChange={(e) => setCredentials({...credentials, password:e.target.value})} value={credentials.password} name='password' type="password" className="input" placeholder="password" />

                    <button onClick={() => handleLogin(credentials)} className='btn btn-primary mt-2'>Login</button>
                    <a href='/' className='btn btn-secondary btn-outline mt-2'>Home</a>
                </fieldset>
            </div>
        </>
    );
};

export default AdminPage;