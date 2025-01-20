'use client'
import Image from 'next/image';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <header className="absolute left-0 top-0 z-40 w-full overflow-x-clip px-5 pt-5 md:px-9 md:pt-[40px]">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-10 block">
          <Image
            className="max-md:w-[120px]"
            src="/images/logo.png"
            alt="次世代NFT"
            width={120}
            height={40}
            priority
          />
        </Link>
        

        {/* Menu Trigger */}
        <div>
        <span className="absolute text-black right-[75px] top-[28px] font-mplus text-[20px] md:top-[20px] md:text-[30px]">
            Menu
          </span>
          <span className="menu-trigger">
            <i className="menu-trigger-bar top"></i>
            <i className="menu-trigger-bar middle"></i>
            <i className="menu-trigger-bar bottom"></i>
          </span>
          <span className="close-trigger">
            <i className="close-trigger-bar left"></i>
            <i className="close-trigger-bar right"></i>
          </span>
        </div>
      </div>
    </header>
    
  );
};


const Menu = () => {
  return (
    <>
      <div className="pointer-events-none fixed left-0 top-0 z-30 h-svh w-screen overflow-hidden opacity-0">
        <i className="menu-bg middle"></i>
      </div>
      <div className="absolute left-0 top-0 z-30 h-svh w-full overflow-y-scroll py-20 opacity-0 md:py-40">
        <div className="itmes-center flex w-full justify-center px-10 max-md:flex-col md:gap-8 md:px-[20%]">
          <ul>
            <li>
              <Link href="/" className="block py-2.5 text-[18px] font-bold md:text-[24px]">
                Home
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </>
  );
}
export default function  Header() {
  return (
    <>
      <Sidebar />
      <Menu />
    </>
  );
}