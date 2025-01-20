'use client';

import React, { useEffect } from 'react';
import Image from 'next/image'; // Sử dụng cho hình ảnh tối ưu
import AOS from 'aos';
import 'aos/dist/aos.css';
import '@styles/app.css'; // Đảm bảo đường dẫn chính xác

// Dữ liệu card
const cardData = [
  {
    title: "NFTが\nもっと便利に！",
    description:
      "コインがないからNFTを送れないという心配はありません！\nガス代の安い時間を待って送信する必要もありません。",
    image: "/images/Rectangle 649.png", // Cập nhật đường dẫn hình ảnh
  },
  {
    title: "NFTが\nもっと楽しく！",
    description:
      "コレクションしたNFTをいつでも交換可能！\n欲しいデジタルアートやゲーム内アイテムをもらったり、あげたりして楽しもう！",
    image: "/images/Rectangle 650.png", // Cập nhật đường dẫn hình ảnh
  },
];

// Định nghĩa tạm thời component Card và CardContent
const Card = ({ children, className }) => (
  <div className={`bg-white shadow-lg ${className}`}>{children}</div>
);

const CardContent = ({ children, className }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);

// Component chính
const UsefulSection = () => {
  // Khởi tạo AOS
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="container mx-auto max-w-[1360px] py-8 mt-60"> {/* Thêm margin-top ở đây */}
      {/* Phần đầu */}
      <div className="relative mb-8">
        <div className="flex justify-end">
          <div className="w-[525px] relative top-[30px] right-[60px] ">
            <Image
              src="/images/greenteacher.png" // Đường dẫn hình ảnh
              alt="Character"
              width={325}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Danh sách các card */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {cardData.map((card, index) => (
          <Card key={index} className="rounded-[60px] overflow-hidden">
            <CardContent className="p-0">
              <div className="h-80 relative">
                <Image
                  src={card.image}
                  alt={`Card illustration ${index + 1}`}
                  layout="responsive"
                  width={580}
                  height={320}
                  className="object-cover mx-auto"
                />
              </div>
              <div className="px-16 py-12 text-center">
                <h2 className="font-black text-black text-4xl mb-8 whitespace-pre-line leading-[58.8px]">
                  {card.title}
                </h2>
                <p className="font-medium text-black text-lg tracking-[0.54px] leading-[27px] whitespace-pre-line">
                  {card.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default UsefulSection;
