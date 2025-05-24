import React from 'react';
import { LoginForm } from './LoginForm';
import Image from 'next/image';

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center h-minus-135 ">
    <LoginForm />
    <div className="mx-4 lg:block rounded-lg">
        <Image src={"/pexels-rdne-7683709.jpg"} alt="hero" width={500} height={500} className="object-cover object-center w-full h-full rounded-lg shadow-lg dark:shadow-gray-700" />
      </div>
  </div>
  
  );
};

export default LoginPage;
