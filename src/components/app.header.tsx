'use client';

import '@styles/app.css';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

// Import GSAP chỉ trên client
const gsap = typeof window !== 'undefined' ? require('gsap').gsap : null;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement | null>(null);
  const menuTopRef = useRef<HTMLDivElement | null>(null);
  const menuMiddleRef = useRef<HTMLDivElement | null>(null);
  const menuBottomRef = useRef<HTMLDivElement | null>(null);
  const closeTriggerLeftRef = useRef<HTMLDivElement | null>(null);
  const closeTriggerRightRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    if (!gsap) return;

    const tlOpen = gsap.timeline({ paused: true });
    const tlClose = gsap.timeline({ paused: true });

    if (
      menuRef.current &&
      menuTopRef.current &&
      menuMiddleRef.current &&
      menuBottomRef.current &&
      logoRef.current
    ) {
      tlOpen
        .add("preOpen")
        .to(logoRef.current, { scale: 0.8, opacity: 0, ease: "power2.out", duration: 0.4 }, "preOpen")
        .to(menuTopRef.current, { y: "13%", ease: "power4.inOut", duration: 0.4 }, "open")
        .to(menuMiddleRef.current, { scaleY: 1, ease: "power4.inOut", duration: 0.4 }, "open")
        .to(menuBottomRef.current, { y: "-100%", ease: "power4.inOut", duration: 0.4 }, "open")
        .fromTo(
          menuRef.current,
          { y: 30, opacity: 0, visibility: "hidden" },
          { y: 0, opacity: 1, visibility: "visible", ease: "power4.out", duration: 0.6 },
          "-=0.2"
        );

      tlClose
        .add("close")
        .to(
          menuRef.current,
          {
            y: 20,
            opacity: 0,
            ease: "power4.out",
            duration: 0.4,
            onComplete: () => {
              if (menuRef.current) menuRef.current.style.visibility = "hidden";
            },
          },
          "close"
        )
        .to(logoRef.current, { scale: 1, opacity: 1, ease: "power4.inOut", duration: 0.2 })
        .to(menuTopRef.current, { y: "-113%", ease: "power4.inOut", duration: 0.2, delay: 0.2 })
        .to(menuMiddleRef.current, { scaleY: 0, ease: "power4.inOut", duration: 0.2, delay: 0.2 })
        .to(menuBottomRef.current, { y: "23%", ease: "power4.inOut", duration: 0.2, delay: 0.2 });
    }

    if (isMenuOpen) {
      tlOpen.play();
    } else {
      tlClose.play();
    }
  }, [isMenuOpen]);

  return (
    <header className="absolute left-0 top-0 z-40 w-full px-5 pt-5 md:px-9 md:pt-[40px]">
      <div className="flex items-center justify-between">
        <Link href="/" ref={logoRef} className="relative z-10 block">
          <Image className="max-md:w-[120px]" src="/images/logo.png" alt="Logo" width={120} height={40} priority />
        </Link>
        <div className="container">
          <span className="menu-trigger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <i className="menu-trigger-bar top"></i>
            <i className="menu-trigger-bar middle"></i>
            <i className="menu-trigger-bar bottom"></i>
          </span>
          <span className="close-trigger">
            <i ref={closeTriggerLeftRef} className="close-trigger-bar left"></i>
            <i ref={closeTriggerRightRef} className="close-trigger-bar right"></i>
          </span>
        </div>
      </div>

      <div className="inner-container">
        <i ref={menuTopRef} className="menu-bg top"></i>
        <i ref={menuMiddleRef} className="menu-bg middle"></i>
        <i ref={menuBottomRef} className="menu-bg bottom"></i>
        <div className="menu-container">
          <ul ref={menuRef} className="menu absolute right-5 top-16 bg-white shadow-lg rounded-lg p-4 opacity-0 text-left items-start" style={{ visibility: "hidden" }}>
            <li className="py-2 text-left">
              <a href="#" className="text-gray-800 hover:text-black">
                Login
              </a>
            </li>
            <li className="py-2 text-left">
              <a href="#" className="text-gray-800 hover:text-black">
                Create account
              </a>
            </li>
            <li className="py-2 text-left">
              <a href="#" className="text-gray-800 hover:text-black">
                Support
              </a>
            </li>
            <li className="py-2 text-left">
              <a href="#" className="text-gray-800 hover:text-black">
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
