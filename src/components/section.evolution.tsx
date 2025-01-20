'use client'
import Image from 'next/image';
import  '@styles/app.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const EvolutionSection = () => {
      useEffect(() => {
        if (typeof window !== 'undefined') {
          AOS.init({
            duration: 500,
            once: true,
          });
        }
      }, []);
  return (
    <section>
      {/* Marque */}

      <div 
       data-aos="fade-up-right" 
      className="opacity-0 flex items-center justify-center py-[100px] md:py-[175px]">
        <div className="origin-center whitespace-nowrap border-y border-black py-3 !delay-300 md:py-5 custom-fade-rotate-right">
          <div className="Marque-rotate text inline-block h-[24px] w-[1700px] md:h-[58px] md:w-[4185px]">
            <img src="/images/deco-marque.png" alt="Marquee Text" />
          </div>
        </div>
      </div>

      {/* Evolution Background Section */}
      <div
        id="evolution"
        className="relative -mt-[60px] flex items-center justify-center bg-[url('/images/bg-evolution.png')] bg-no-repeat max-xl:bg-[length:100%_auto] md:-mt-[130px] md:h-[63.75vw] md:bg-center xl:h-[918px]"
      >
        <div className="relative mx-auto flex h-full w-full max-w-[1340px] items-center justify-center max-md:pb-[200px]">
          <div className="absolute left-1/2 top-1/2 size-[832px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C5EEFF]/[0.2] blur-[150px] filter"></div>

          {/* Main Content */}
          <div
            data-aos="zoom-out" 
            className="opacity-0 flex h-[364px] w-[320px] flex-col items-center bg-[url('/images/bg-evo.png')] bg-[length:100%_100%] px-8 pt-[10vw] [filter:drop-shadow(0px_0px_70px_rgba(0,_3,_68,_0.40))] md:h-[44.583vw] md:w-[39.236vw] xl:h-[642px] xl:w-[565px] xl:pt-36"
          >
            <h3 
             data-aos="zoom-out" 
             data-aos-delay="150" 
            className="opacity-0 evolution-text font-mplus mb-4 text-center text-[30px] font-black md:text-[3.333vw] xl:text-[48px]">
              NFT<span className="text-[22px] md:text-[2.639vw]  font-mplus xl:text-[38px]">は</span> <br />もっと<span className="text-[22px] md:text-[2.639vw]  font-mplus">進化する！</span>
            </h3>
            <p className="w-full max-w-[453px] text-[14px] text-black md:text-[1.389vw] font-mplus xl:text-[20px]">
              NFTはアートのイメージが強いですが、これからもっと進化します！ <br />
              <br />近い将来、お店で購入するトレーディングカードのように、中身は所有者だけが確認できるようになります。
            </p>
          </div>

          {/* Bottom Image and Text */}
          <div
           data-aos="zoom-out" 
           data-aos-delay="250" 
          className="opacity-0 absolute bottom-0 right-5 !delay-500 md:bottom-[4.861vw] md:right-0 xl:bottom-[70px]"
          >
            <div className="relative -mb-[1.111vw] flex justify-center xl:-mb-4">
              <p className=" font-mplus w-full max-w-[170px] text-[11px] text-white md:max-w-[19.097vw] md:text-[1.25vw] xl:max-w-[275px] xl:text-[18px]">
                希少性とセキュリティ、開封時の
                <br />
                ワクワク感が強化されるんだね！
              </p>
            </div>
            <figure className="max-xl:w-[27.569vw] max-md:w-[200px]">
              <Image
                src="/images/img-evo.png"
                alt=""
                width={475}
                height={430}
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EvolutionSection;
