'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';
import useSupabaseClient from '@/lib/client';

export const LoginForm = () => {
    const router = useRouter();
    const [error, setError] = useState('');
    const [isPending, startTransition] = useTransition();
    const supabase = useSupabaseClient();

    const loginWithGoogle = () => {
        supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: `${location.origin}/auth/callback`,
            },
        });
    };

    const input_style =
        'form-control block w-full px-4 py-5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none';

    return (
        <form>
            {error && (
                <p className='text-center bg-red-300 py-4 mb-6 rounded'>{error}</p>
            )}

            <a
                className='px-7 py-2 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3'
                style={{ backgroundColor: '#3b5998' }}
                onClick={loginWithGoogle}
                role='button'
            >
                <Image
                    className='pr-2'
                    src='/google.svg'
                    alt=''
                    style={{ height: '2rem' }}
                    width={35}
                    height={35}
                />
                Continue with Google
            </a>
        </form>
    );
};