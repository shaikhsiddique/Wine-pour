import React, { useEffect, useRef } from "react";
import Navbar from "./Components/Navbar";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Page5 from "./Components/Page5";
import Page6 from "./Components/Page6";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function App() {
  const scrollRef = useRef(null);
  const videoRef = useRef(null);
  const heroTextRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const arrowRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });

    const targetTimeRef = { current: 0 };
    let animationFrameId;
    let firstScrollTime = null;
    let hasScrolled = false;

    const animate = () => {
      const video = videoRef.current;
      if (video && video.duration && hasScrolled) {
        // Smoothing logic: very fast for 4s after first scroll, then normal
        let smoothing = 0.1;
        if (firstScrollTime) {
          const elapsed = (Date.now() - firstScrollTime) / 1000;
          smoothing = elapsed < 4 ? 0.7 : 0.1;
        }
        const diff = targetTimeRef.current - video.currentTime;
        if (Math.abs(diff) > 0.01) {
          video.currentTime += diff * smoothing;
        } else {
          video.currentTime = targetTimeRef.current;
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    const onScroll = (obj) => {
      const video = videoRef.current;
      if (video && video.duration) {
        if (!hasScrolled) {
          hasScrolled = true;
          firstScrollTime = Date.now();
          video.currentTime = 2; // Jump to 4s on first scroll
          if (video.readyState >= 2) {
            video.play();
          } else {
            video.oncanplay = () => video.play();
          }
        }
        const scrollProgress = obj.scroll.y / obj.limit.y;
        targetTimeRef.current = video.duration * scrollProgress * 8;
      }
    };

    scroll.on("scroll", onScroll);
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      scroll.destroy();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  useGSAP(() => {
    gsap.from(heroTextRef.current.querySelectorAll("span"), {
      y: 100,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.03,  
    });
  }, []);

  useGSAP(() => {
    gsap.from(text1Ref.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      delay: 0.6,
    });
  }, []);
  useGSAP(() => {
    gsap.from(arrowRef.current, {
      y: 100,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      delay: 0.6,
    });
  }, []);

  useGSAP(() => {
    gsap.from(text2Ref.current, {
      y: 100,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      delay: 0.6,
    });
  }, []);

  return (
    <div
      ref={scrollRef}
      className="w-screen bg-black min-h-screen"
      data-scroll-container
    >
      <Navbar />

      <div className="hero w-full h-[180vh] relative" data-scroll-section>
        <div className="noise h-full w-full z-50  absolute">
          <img src="./noise.png" className="h-full w-full" alt="" />
        </div>
        {/* Sticky Video */}
        <div
          className="video-container sticky top-[5%] w-full h-screen flex justify-center items-center z-30 overflow-visible"
          data-scroll
          data-scroll-sticky
          data-scroll-target=".hero"
        >
          <video
            ref={videoRef}
            src="./output.mp4"
            muted
            preload="auto"
            className="w-[70%] h-auto"
          ></video>
        </div>

        {/* Title */}
        <h4
          ref={heroTextRef}
          className="hero-text text-[43vh] text-white absolute top-10 left-1/2 transform -translate-x-1/2 z-30 overflow-hidden flex"
        >
          {"MOJITO".split("").map((letter, index) => (
            <span key={index} className=" inline-block" >
              {letter}
            </span>
          ))}
        </h4>

        {/* Left Leaf (slow) */}
        <div
          className="left-leaf absolute -left-8 top-[28%] "
          data-scroll
          data-scroll-speed="7"
        >
          <img src="./cocktail-left-leaf.png" className="transform" alt="" />
        </div>

        {/* Right Leaf (fast) */}
        <div
          className="right-leaf absolute -right-20 -top-[4%] z-0"
          data-scroll
          data-scroll-speed="-5"
        >
          <img
            src="./cocktail-right-leaf.png"
            className="transform rotate-[200]"
            alt=""
          />
        </div>

        <div
          ref={text1Ref}
          data-scroll
          data-scroll-speed="2"
          className="text1 absolute text-white top-[23%] z-40 left-[5%] overflow-hidden"
        >
          <h4 className="text-lg py-4 ">Cool. Crisp. Classic.</h4>
          <h3 className="hero-text-2 text-[#E7D393] text-5xl overflow-hidden w-[300px] leading-14 tracking-wide">
            Sip the Spirit of Summer
          </h3>
        </div>
        <div
          ref={arrowRef}
          data-scroll
          data-scroll-speed="1"
          className="arrow absolute top-[26%] z-50 left-[3%] "
        >
          <img src="./arrow.png" alt="" />
        </div>

        <div
          ref={text2Ref}
          data-scroll
          data-scroll-speed="2"
          className="text2 text-white absolute right-0 top-[25%] w-[300px] z-40 text-xl leading-7 overflow-hidden"
        >
          <p className="">Every cocktail on our menu is a blend of</p>
          <p>premium ingredients, creative flair, and</p>
          <p>timeless recipes — designed to delight your</p>
          <p>senses.</p>
          <a href="" className="hover:text-[#E7D393] pt-3">
            View cocktails
          </a>
        </div>

        <div
          data-scroll
          className="menu w-full flex justify-between absolute top-[60%] left-0 text-white z-40 p-2"
        >
          <div className="menuleft flex flex-col">
            <h3 className="text-2xl py-4">Most Popular Cocktails:</h3>

            <div className="flex flex-col gap-5">
              <div className="item flex gap-[128px]">
                <div className="item-name">
                  <h1 className="text-[28px] text-[#E7D393]">
                    Chapel Hill Shiraz
                  </h1>
                  <h4 className="text-[16px] -mt-2">AU | Battle</h4>
                </div>
                <h3 className="text-xl pt-1">- $10</h3>
              </div>
              <div className="item flex gap-[172px]">
                <div className="item-name">
                  <h1 className="text-[28px] text-[#E7D393]">Caten Malbee</h1>
                  <h4 className="text-[16px] -mt-2">AU | Battle</h4>
                </div>
                <h3 className="text-xl pt-1">- $49</h3>
              </div>
              <div className="item flex gap-[161px]">
                <div className="item-name">
                  <h1 className="text-[28px] text-[#E7D393]">Rhino Pale Ale</h1>
                  <h4 className="text-[16px] -mt-2">CA | 750 ml</h4>
                </div>
                <h3 className="text-xl pt-1">- $20</h3>
              </div>
              <div className="item flex gap-40">
                <div className="item-name">
                  <h1 className="text-[28px] text-[#E7D393]">Irish Guinness</h1>
                  <h4 className="text-[16px] -mt-2">IE | 600 ml</h4>
                </div>
                <h3 className="text-xl pt-1">- $39</h3>
              </div>
            </div>
          </div>
          <div className="menuright flex flex-col">
            <h3 className="text-2xl py-4">Most Popular Mocktails:</h3>

            <div className="flex flex-col gap-5">
              <div className="item flex gap-[131px]">
                <div className="item-name">
                  <h1 className="text-[28px] text-[#E7D393]">
                    Passionfruit Mint
                  </h1>
                  <h4 className="text-[16px] -mt-2">AU | Battle</h4>
                </div>
                <h3 className="text-xl pt-1">- $10</h3>
              </div>
              <div className="item flex gap-[160px]">
                <div className="item-name">
                  <h1 className="text-[28px] text-[#E7D393]">Tropical Bloom</h1>
                  <h4 className="text-[16px] -mt-2">AU | Battle</h4>
                </div>
                <h3 className="text-xl pt-1">- $49</h3>
              </div>
              <div className="item flex gap-[190px]">
                <div className="item-name">
                  <h1 className="text-[28px] text-[#E7D393]">Citrus Glow</h1>
                  <h4 className="text-[16px] -mt-2">CA | 750 ml</h4>
                </div>
                <h3 className="text-xl pt-1">- $20</h3>
              </div>
              <div className="item flex gap-[170px]">
                <div className="item-name">
                  <h1 className="text-[28px] text-[#E7D393]">Lavender Fizz</h1>
                  <h4 className="text-[16px] -mt-2">IE | 600 ml</h4>
                </div>
                <h3 className="text-xl pt-1">- $39</h3>
              </div>
            </div>
          </div>
        </div>

        <div
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="-1"
          className="bottom-left-leaf absolute bottom-[10%] -left-11"
        >
          <img
            src="./footer-left-leaf.png"
            className="w-[300px] overflow-hidden"
            alt=""
          />
        </div>

        <div
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="1"
          className="bottom-right-leaf absolute bottom-[10%] -right-6"
        >
          <img
            src="./footer-right-leaf.png"
            className="w-[300px] overflow-hidden"
            alt=""
          />
        </div>
      </div>
      <div
        className="page2 h-[50vh] w-full bg-black flex items-center"
        data-scroll-section
      >
        <div className="section1 flex items-center justify-between w-full h-full">
          <div className="left ">
            <button className="bg-white rounded-full px-7 py-2 text-lg my-4 font-semibold hover:bg-[#E7D393] cursor-pointer">
              Best Cocktail
            </button>
            <h1 className="text-6xl text-white w-[500px] overflow-hidden">
              Where every detail matters-from muddle to garnish
            </h1>
          </div>
          <div className="right text-white w-[520px] gap-6 flex flex-col justify-between ">
            <h3 className="text-xl">
              Every Cocktail we serve is a reflection of our obsession with
              detail - from the first muddle to the final garnish. That care is
              what turns a simple drink into something truly memorable.
            </h3>
            <div>
              <h4 className="text-6xl text-[#E7D393] font-bold overflow-hidden">
                4.5
              </h4>
              <p className="text-white text-sm">More than +138000 customers</p>
            </div>
          </div>
        </div>
      </div>
      <div
        data-scroll-section
        className="page3 h-[110vh] w-full bg-black overflow-hidden pb-12"
      >
        <div className="sec1 flex gap-4 h-[49%] my-4">
          <img src="./abt1.png" className=" overflow-hidden w-[400px]" alt="" />
          <img
            src="./abt2.png"
            className=" overflow-hidden rounded-2xl"
            alt=""
          />
          <img
            src="./abt5.png"
            className=" overflow-hidden  rounded-2xl "
            alt=""
          />
        </div>
        <div className="sec2 flex gap-4 h-[50%] mb-4">
          <img
            src="./abt3.png"
            className=" overflow-hidden  rounded-2xl "
            alt=""
          />
          <img
            src="./abt4.png"
            className=" overflow-hidden  rounded-2xl "
            alt=""
          />
        </div>
      </div>
      <div
        data-scroll-section
        className="page4 h-[140vh] w-full bg-black flex items-center justify-center relative"
      >
        <div className="art">
          <img src="./art.png" alt="" />
          <div className="checks absolute text-white text-lg top-[65%] left-12 flex flex-col gap-2">
            <div className="flex items-center gap-5 ">
              <img src="./check.png" alt="" />
              <h3>Handpicked ingredients</h3>
            </div>
            <div className="flex items-center gap-4 ">
              <img src="./check.png" alt="" />
              <h3>Signature techniques</h3>
            </div>
            <div className="flex items-center gap-4 ">
              <img src="./check.png" alt="" />
              <h3>Bartending artistry in action</h3>
            </div>
            <div className="flex items-center gap-4 ">
              <img src="./check.png" alt="" />
              <h3>Freshly muddled flavors</h3>
            </div>
          </div>
        </div>
      </div>
      <div data-scroll-section className="page5 h-screen w-full">
        <Page5 />
      </div>
      <div
        data-scroll-section
        className="page6 h-screen w-full overflow-hidden "
      >
        <Page6 />
      </div>
    </div>
  );
}

export default App;
