'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
//import { Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import data from '@api/data/slider.json';
import AOS from 'aos';
import 'aos/dist/aos.css';


const IntroductionSection = () => {
  const [swiperInitialized, setSwiperInitialized] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      AOS.init({
        duration: 500,
        once: true,
      });
    }
  }, []);
  useEffect(() => {
    setSwiperInitialized(true);
  }, []);

  if (!swiperInitialized) {
    return null; // Render null cho đến khi Swiper được khởi tạo
  }

  return (
    <section id="introduction" className="relative pt-12 md:pt-[96px]">
      <div className="relative">
        <span className="absolute inset-x-0 top-0 h-[calc(100%-180px)] px-5 md:h-[calc(100%-280px)]">
          <span className="block h-full w-full rounded-[60px] bg-white"></span>
        </span>
        <div className="px-5">
          <div className="relative mx-auto w-full max-w-[1400px]">
            <div className="relative pl-[4.583vw] pr-5 pt-5 xl:pl-[66px]">
              <div className="flex gap-7 max-md:flex-col md:gap-[40px]">
               <div>
               <Image
                    data-aos="fade-up-right" 
                    src="/images/NFT1.png"
                    alt="NFTってなんだ？"
                    width={469}
                    height={447}
                    className="opacity-0 max-xl:w-[33.75vw] max-md:w-[50vw]"
                  />
               </div>
                <div className="flex-1 md:pt-[7.778vw] xl:pt-28">
                  <div className="leading-[2]">
                    <p 
                     data-aos="fade-up" 
                     data-aos-delay="200" 
                    className="font-mplus max-w-[526px] text-black text-[15px] md:text-[18px]">
                      NFTとは「世界にひとつだけの証明番号」を画像やビデオ、3D、音楽、音声などに付与する技術を活用して発行されるものです。証明番号は第三者から書き換えられたりするリスクがなく、デジタルの世界に&quot;ひとつだけ&quot;であることを証明するために使われています。
                    </p>
                    <div className="flex pt-3 max-xl:gap-2 max-md:flex-col">
                      <p 
                      data-aos="fade-up" 
                      data-aos-delay="300" 
                      className="font-mplus flex-1 text-black text-[13px] md:text-[16px]">
                        ※Non-Fungible Token（ノンファンジブルトークン）の略称で、日本語では「非代替性トークン」と訳されることが多いです。
                      </p>
                      <div>
                        <Image
                         data-aos="fade-up-left" 
                         data-aos-delay="250" 
                          src="/images/teacher.png"
                          alt=""
                          width={250}
                          height={239}
                          
                          className="opacity-0 max-xl:w-[19.514vw] max-md:ml-auto max-md:w-[40vw] min-[860px]:-mt-[4.444vw] xl:-ml-5 xl:-mt-16"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative mt-12 pl-8 md:mt-24 md:pl-[70px] lg:mt-[46px]">
          <span  
          data-aos="fade-up" 
          className="opacity-0 absolute left-[40px] top-[-40px] z-10 md:left-[140px]">
            <Image
              className="max-md:w-[280px]"
              src="/images/text-intro.png"
              alt=""
              width={280}
              height={280}
            />
          </span>
          <div  className="ani-fade-up">
            <div className="swiper mySwiper">
            <Swiper
                data-aos="zoom-in" 
                className="opacity-0"
                spaceBetween={20}
                slidesPerView={1}
           //   modules={[Autoplay]}
                loop={true}
                autoplay={{
                  delay: 3000, 
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  640: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
              
              >
                {/* Duyệt qua dữ liệu JSON để tạo SwiperSlide */}
                {data.map((item, index) => (
                  <SwiperSlide
                    key={index}
                    className="relative !size-[300px] overflow-hidden rounded-[20px] md:!size-[420px]" >
                    <Image
                        className="h-full w-full object-cover object-center"
                        src={item.image}
                        alt={item.title}
                        width={420}
                        height={420}
                      />
                    <div className="absolute inset-x-0 bottom-0 p-2.5">
                      <div className="h-[113px] rounded-[20px] bg-white/80 px-5 py-2.5">
                        <h5 className="text-[16px] text-black font-bold font-mplus md:text-[20px]">
                          {item.title}
                        </h5>
                        <p className="text-[12px] text-black font-mplus md:text-[16px]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
