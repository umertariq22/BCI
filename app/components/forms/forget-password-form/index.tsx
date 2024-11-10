'use client';
import React, { useState } from 'react';
import Input from '../../ui/input';
import Button from '../../ui/button';
import { useRouter } from 'next/navigation';
import { AppRoutes } from '@/app/routes';

const ForgetPasswordForm = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const router = useRouter()

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (!email) {
      setError('Please enter your email.');
      return;
    }

    setError(null);
    setSuccessMessage('Password reset link has been sent to your email.');
    router.push(AppRoutes.CHANGE_PASSWORD)
    console.log('Reset link sent to:', email);
  };

  return (
    <form className="flex flex-col self-stretch my-auto w-full max-md:mt-10 text-sm max-w-lg mx-auto">
      <div>
        <h2 className="self-start text-2xl lg:text-3xl font-bold text-black">Forget Password</h2>
        <p className="self-start mt-2 leading-6 text-zinc-500">
            Enter your email to change your password via email.
        </p>
      </div>

      <div className="mt-9 flex flex-col gap-1">
        <label htmlFor="email" className="self-start font-semibold leading-6 text-black">
          Email
        </label>
        <Input
          onChange={(e: any) => setEmail(e.target.value)}
          placeholder="Enter your email"
          type="email"
          required
        />
      </div>

      {error && <div className="text-red-600 text-sm mt-2">{error}</div>}
      {successMessage && <div className="text-green-600 text-sm mt-2">{successMessage}</div>}

      <div className="mt-10 lg:mt-16">
        <Button className='w-full' type="button" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </form>
  );
};

export default ForgetPasswordForm;
