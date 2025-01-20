'use client';

import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const TracoSection = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      AOS.init({
        duration: 500,
        once: true,
      });
    }
  }, []);

  return (
    <section id="app" className="relative w-full h-screen">
      <div className="relative w-full h-full">
        <Image
          data-aos="fade-up-right"
          src="/images/tracouhunter.png"
          alt="app"
          layout="fill" // Đảm bảo hình ảnh full-screen
          objectFit="cover" // Đảm bảo hình ảnh bao phủ toàn màn hình
          priority // Tăng ưu tiên load hình ảnh
        />
      </div>
    </section>
  );
};

export default TracoSection;
