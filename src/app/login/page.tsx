import React from 'react';
import { LoginForm } from './LoginForm';
import Image from 'next/image';

const LoginPage = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-full h-full grid lg:grid-cols-2 p-4">
        <div className="max-w-xs m-auto w-full flex flex-col items-center">
        <LoginForm />
        </div>
        <div className="lg:block rounded-lg">
        <Image src={"/pexels-rdne-7683709.jpg"} alt="hero" width={500} height={500} className="object-cover object-center w-full h-full rounded-lg shadow-lg dark:shadow-gray-700" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
