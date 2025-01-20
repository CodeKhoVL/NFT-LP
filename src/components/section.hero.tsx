'use client';
import Image from 'next/image';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeroSection = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      AOS.init({
        duration: 500,
        once: true,
      });
    }
  }, []);

  return (
    <section className="relative bg-[url('/images/bg-hero.png')] bg-no-repeat lg:bg-cover">
      <div className="relative mx-auto flex w-full max-w-[1440px] px-1 pb-10 pt-20 max-lg:flex-col-reverse md:px-11 md:py-10">
        {/* Rabbit Image */}
        <div
          data-aos="zoom-in" 
          className="opacity-0"
        >
          <Image
            className="max-lg:w-[86vw] max-lg:max-w-[500px]"
            src="/images/what-rabit.png"
            alt="Rabbit Image"
            width={800}
            height={800}
            priority
          />
        </div>

        {/* Main Image */}
        <div
          data-aos="zoom-in" 
          data-aos-delay="250" 
          className="opacity-0 max-lg:mb-[-100px] max-lg:flex max-lg:justify-end lg:-ml-[13.194vw] lg:pt-[3.333vw]"
        >
          <Image
            className=" max-lg:w-[90vw] max-lg:max-w-[550px]"
            src="/images/bubble.png"
            alt="Main Image"
            width={800}
            height={800}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
