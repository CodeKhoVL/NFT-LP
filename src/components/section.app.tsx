'use client';

import Image from 'next/image';
import '@styles/app.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const AppSection = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      AOS.init({
        duration: 500,
        once: true,
      });
    }
  }, []);

  return (
    <section id="app" className="relative pt-1 md:pt-[96px] mt-12">
      <div className="relative">
        <div className="px-5">
          <div className="relative mx-auto w-full max-w-full sm:max-w-[1200px] lg:max-w-[1400px]">
            <div className="relative pl-[4.583vw] pr-5 pt-5 xl:pl-[66px]">
              <div className="flex flex-col items-center gap-12 md:flex-row md:gap-[40px]">
                <div className="w-full h-auto relative mb-1 md:mb-24">
                  <Image
                    data-aos="fade-up-right"
                    src="/images/app.png"
                    alt="app"
                    layout="responsive"
                    width={469}
                    height={447}
                    className="object-cover rounded-lg sm:rounded-xl md:rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppSection;
