'use client'

import React from "react";
import { useEffect, useState } from 'react';
import  '@styles/app.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
const SeriesSection = () => {
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
    <div 
       data-aos="fade-up-left" 
      className="opacity-0 flex items-center justify-center py-[100px] md:py-[175px]">
        <div className="origin-center whitespace-nowrap border-y border-black py-3 !delay-300 md:py-5 custom-fade-rotate-left">
          <div className="Marque-rotate text inline-block h-[24px] w-[1700px] md:h-[58px] md:w-[4185px]">
            <img src="/images/deco-marque.png" alt="Marquee Text" />
          </div>
        </div>
      </div>
    <div
      className="flex flex-col rounded-none"
      role="region"
      aria-label="SeriesSection"
    >
      <div className="flex flex-col items-center px-10 py-24 w-full bg-white rounded-[100px_100px_0px_0px] max-md:px-5 max-md:pb-24 max-md:max-w-full">
        <h2 className="text-5xl font-black tracking-wide leading-snug text-center text-black max-md:text-4xl">
          次世代シリーズ
        </h2>
        <div className="self-stretch mt-24 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {/* Card 1 */}
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-center px-8 pb-12 mt-1 w-full text-black uppercase bg-teal-50 border-emerald-500 border-solid border-[7px] rounded-[30px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <div className="flex relative flex-col px-16 py-5 max-w-full text-4xl tracking-wider text-center text-black whitespace-nowrap border-white border-solid border-[3px] min-h-[96px] w-[484px] max-md:px-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/111d64f8c0bb4e4420a2fd50b1b71c6aafe17877393b0f7d0aabd913d670f97d?placeholderIfAbsent=true&apiKey=90c2f1be7872421fa6d2d5000486fef3"
                    alt=""
                    className="object-cover absolute inset-0 size-full"
                  />
                    <span
                        className="relative z-10"
                        style={{
                        color: '#000',
                        textAlign: 'center',
                        textShadow: '4px 4px 0px #FFF',
                        WebkitTextStrokeWidth: '3px',
                        WebkitTextStrokeColor: '#000',
                        fontFamily: '"Dela Gothic One", sans-serif',
                        whiteSpace: 'normal', // Cho phép xuống dòng
                        wordWrap: 'break-word', // Ngắt từ nếu quá dài
                        fontSize: '38px',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        lineHeight: '150%',
                        letterSpacing: '1.14px',
                        textTransform: 'uppercase',
                        }}
                        >
                        次世代マップ
                    </span>

                </div>
                <div className="flex flex-col self-stretch mt-8 max-md:max-w-full">
                  <div className="flex flex-col self-center max-w-full text-2xl font-extrabold tracking-wider text-center max-md:whitespace-normal whitespace-nowrap rounded-none w-[592px]">
                    <div className="self-center max-md:max-w-full">
                      ゲームみたいな現実世界を楽しみ尽くせ！
                    </div>
                    <div className="shrink-0 mt-1.5 h-0.5 border-2 border-emerald-500 border-dashed max-md:max-w-full"></div>
                  </div>
                  <div className="mt-8 text-lg font-medium tracking-wide leading-7 max-md:max-w-full">
                    全く新しいゲームのようなおトク体験！ 次世代マップで決められた期間内に定められた場所にいかないともらえないNFTや、実物の商品と交換できるNFTをゲットしよう！ NFTの受け取り方はDIVER WalletをインストールしてQRコードを読み取るだけ！
                  </div>
                </div>
                <button
                  className="px-16 py-6 mt-16 max-w-full text-xl font-black tracking-wide text-center text-white whitespace-nowrap bg-emerald-500 rounded-[70px] w-[380px] max-md:px-5 max-md:mt-10"
                  tabIndex={0}
                >
                  次世代マップを見る
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-center px-8 pb-12 w-full text-black uppercase bg-pink-50 border-red-600 border-solid border-[7px] rounded-[30px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <div className="flex relative flex-col px-16 py-5 max-w-full text-4xl tracking-wider text-center whitespace-nowrap border-white border-solid border-[3px] min-h-[96px] w-[484px] max-md:px-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb6abc4700494695357118ee144a558ec5854564cb7cf3dbc94ae1e97a775b47?placeholderIfAbsent=true&apiKey=90c2f1be7872421fa6d2d5000486fef3"
                    alt=""
                    className="object-cover absolute inset-0 size-full"
                  />
                  <span
                  className="relative z-10"
                  style={{
                  color: '#000',
                  textAlign: 'center',
                  textShadow: '4px 4px 0px #FFF',
                  WebkitTextStrokeWidth: '3px',
                  WebkitTextStrokeColor: '#000',
                  fontFamily: '"Dela Gothic One", sans-serif',
                  fontSize: '38px',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  lineHeight: '150%',
                  letterSpacing: '1.14px',
                  textTransform: 'uppercase',
                  }}
                  >次世代タグ</span>
                </div>
                <div className="flex flex-col self-stretch mt-9 max-md:max-w-full">
                  <div className="flex flex-col self-center max-w-full text-2xl font-extrabold tracking-wider text-center whitespace-nowrap rounded-none w-[592px]">
                    <div className="self-center">ピッ！でもらえるNFT！</div>
                    <div className="shrink-0 mt-1.5 h-0.5 border-2 border-red-600 border-dashed max-md:max-w-full"></div>
                  </div>
                  <div className="mt-8 text-lg font-medium tracking-wide leading-7 max-md:max-w-full">
                    次世代タグとは「NFC(近距離無線通信)チップ」が入ったシールです。 例えば電子決済のように、スマートフォンを支払い機に近づけることで決済ができる技術がNFCです。次世代タグにピッ！とするだけで、簡単にNFTを受け取ることができます。 渡すNFTも、アプリを使って簡単に設定することが可能です。
                  </div>
                </div>
                <button
                  className="px-16 py-6 mt-11 max-w-full text-xl font-black tracking-wide text-center text-white whitespace-nowrap bg-red-600 rounded-[70px] w-[380px] max-md:px-5 max-md:mt-10"
                  tabIndex={0}
                >
                  次世代タグを見る
                </button>
              </div>
            </div>
          </div>
         {/* Card 3 */}
          <div className="flex flex-col items-center justify-center px-8 pb-12 mt-24 mb-0 max-w-full text-black uppercase bg-amber-50 border-orange-500 border-solid border-[7px] rounded-[30px] w-[660px] mx-auto max-md:px-5 max-md:mt-10 max-md:mb-2.5">
          <div className="flex relative flex-col px-16 py-5 max-w-full text-4xl tracking-wider text-center whitespace-nowrap border-white border-solid border-[3px] min-h-[96px] w-[484px] max-md:px-5">
          <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c73aed129251f92d4d592c1fa18ee2065cb16e92b5e3f38fd7a07863be1afcff?placeholderIfAbsent=true&apiKey=90c2f1be7872421fa6d2d5000486fef3"
              alt=""
              className="object-cover absolute inset-0 size-full"
          />
          <span
          className="relative z-10"
          style={{
          color: '#000',
          textAlign: 'center',
          textShadow: '4px 4px 0px #FFF',
          WebkitTextStrokeWidth: '3px',
          WebkitTextStrokeColor: '#000',
          fontFamily: '"Dela Gothic One", sans-serif',
          fontSize: '38px',
          fontStyle: 'normal',
          fontWeight: 400,
          lineHeight: '150%',
          letterSpacing: '1.14px',
          textTransform: 'uppercase',
          }}
          >次世代鑑定団</span>
          </div>
          <div className="flex flex-col self-stretch mt-8 max-md:max-w-full">
          <div className="flex flex-col self-center w-full text-2xl font-extrabold tracking-wider text-center whitespace-nowrap rounded-none">
          <div className="self-center max-md:whitespace-normal max-md:max-w-full">これ以上の安心ある！？発行元を完全証明！</div>
          <div className="shrink-0 mt-1.5 h-0.5 border-2 border-orange-500 border-dashed max-md:max-w-full"></div>
          </div>
          <div className="mt-8 text-lg font-medium tracking-wide leading-7 max-md:max-w-full">
               次世代鑑定団とは、NFT の「ニセモノ」に関するトラブルを解決すべく作られた鑑定団です！
               <br />
               <br />
                次世代鑑定団が、安心・安全をご提供し、あなたのNFTライフを全力で応援します！
          </div>
         </div>
          <button
          className="px-16 py-6 mt-16 max-w-full text-xl font-black tracking-wide text-center text-white whitespace-nowrap bg-orange-500 rounded-[70px] w-[380px] max-md:px-5 max-md:mt-10"
          tabIndex={0}
          >
          次世代鑑定団を見る
          </button>
         </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default SeriesSection;
