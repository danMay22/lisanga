import React from "react";
import { TypingAnimationDemo } from "./animation/typing-animation";

export default function Cta() {
  return (
    <section className="py-20  lg:py-12 lg:flex lg:justify-center">
      <div className="overflow-hidden bg-white dark:bg-gray-900 lg:mx-8 lg:flex lg:max-w-6xl lg:w-full lg:shadow-lg lg:rounded-xl">
        <div className="lg:w-1/2">
          <div
            className="h-64 bg-cover lg:h-full"
            style={{
              backgroundImage:
                "url('/pexels-gulsahaydgn-19613149.jpg')",
            }}
          ></div>
        </div>
        <div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
            <TypingAnimationDemo/>
          </h2>
          <span className="text-xl">NOS ADDRESSES:</span>
          <p className="mt-4 text-xl text-gray-500 dark:text-gray-300">
            Branche de Limite - 6em Rue Kruger av, Tel: +243 16 421 1596 <br/><br/>
            Branch Gombe - 45 Anderson Street, Rond Point Kock Reference: Kin Market, Tel: +243 18 487 5610, Cell: +243 61 770 4470/084 694 3084 <br/><br/>
          </p>
          <div className="inline-flex w-full mt-6 sm:w-auto">
            <a
              href="#"
              className="inline-flex items-center justify-center w-full px-6 py-2 text-sm text-white duration-300 bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
            >
              Start Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}




