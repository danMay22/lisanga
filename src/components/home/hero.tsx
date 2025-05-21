
   
      
import React from "react";
import { Button } from "../ui/button";
import TextAnimate from "./animation/animation-docs";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#48cae4] to-[#023e8a]  dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <div className="max-w-2xl mb-6 font-extrabold tracking-tight leading-none  dark:text-white">
            <TextAnimate
              className="sm:text-center text-3xl md:text-5xl lg:text-5xl text-white"
              text="Complex Scolaire SANGA"
              type="fadeInUp"
            />
          </div>
          <h2 className="sm:text-3xl text-4xl font-extralight tracking-tight leading-none text-white dark:text-white">
           En route vers ton succes
          </h2>
          <p className="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione itaque adipisci voluptate ipsam error recusandae quae dolore? Adipisci, accusamus quasi. Eveniet exercitationem dolorem debitis assumenda atque asperiores neque eaque deleniti.
          </p>
          <Button
            variant="ghost"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium  rounded-lg  hover:cursor-pointer"
          >
            Read more
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillrule-="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Button>
          <Button
            variant="default"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white  rounded-lg hover:cursor-pointer dark:text-black"
          >
            Register/Enroll Now
          </Button>
        </div>
        <div className="mt-6 lg:mt-0 lg:col-span-5 lg:flex">
          {/*<ImagePic/>*/}
          <Image src={"/pexels-pixabay-256490.jpg"} alt="hero" width={500} height={500} className="object-cover object-center w-full h-full rounded-lg shadow-lg dark:shadow-gray-700" />
        </div>
      </div>
    </section>
  );
}
