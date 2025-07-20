import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";

gsap.registerPlugin(useGSAP);

function Page5() {
  const [selectedDrink, setSelectedDrink] = useState(1);

  const drinks = [
    "Classic Mojito",
    "Raspberry Mojito",
    "Violet Breeze",
    "Curacoa Mojito",
  ];

  const drinksDecribtion = [
    {
      description1: "A Fresh Classic Reimagined",
      description2:
        "Our Classic Mojito brings together freshly muddled mint, zesty lime, and a splash of soda to create a timeless, refreshing cocktail that never goes out of style. Perfect for any occasion, it's simplicity crafted with precision.",
    },
    {
      description1: "A Berry Twist to Tradition",
      description2:
        "The Raspberry Mojito blends sweet raspberries with crisp mint leaves and fresh lime juice, giving you a bright and fruity cocktail that balances sweetness and freshness in every sip. Ideal for those who like a subtle berry burst.",
    },
    {
      description1: "Floral Notes, Bold Taste",
      description2:
        "The Violet Breeze is a unique floral cocktail, combining violet syrup with citrus undertones and cool mint. Every glass offers a light, aromatic experience designed for those seeking something refreshingly different and delicately balanced.",
    },
    {
      description1: "Tropical Escape in Every Sip",
      description2:
        "Curacoa Mojito mixes the tropical essence of blue Curacoa with lime and fresh mint to transport your senses to a beachside paradise. Vibrant in color and bold in flavor, it's the perfect companion for your next summer gathering.",
    },
  ];

  const drinkImgRef = useRef();
const descTitleRef = useRef();
const drinkTitleRef = useRef();

useGSAP(() => {
  gsap.fromTo(
    drinkImgRef.current,
    { x: -300, opacity: 0 },
    { x: 0, opacity: 1, duration: 1, ease: "power2.out" }
  );
}, [selectedDrink]);

useGSAP(() => {
  gsap.fromTo(
    drinkTitleRef.current,
    { x: -100, opacity: 0 },
    { x: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.1 }
  );
}, [selectedDrink]);

useGSAP(() => {
  gsap.fromTo(
    descTitleRef.current,
    { x: -200, opacity: 0 },
    { x: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.2 }
  );
}, [selectedDrink]);


  return (
    <div
      className="h-full w-full relative flex flex-col items-center"
      style={{
        background:
          "radial-gradient(circle, rgb(67, 67, 67), rgb(0, 0, 0), rgba(0, 0, 0, 0))",
      }}
    >
      <div className="header flex text-white w-full justify-center gap-14 my-16 z-50">
        {drinks.map((drink, index) => (
          <div
            key={index}
            onClick={() => setSelectedDrink(index + 1)}
            className="item flex flex-col items-center cursor-pointer"
          >
            <h3
              className={`text-3xl transition-colors duration-300 ${
                selectedDrink === index + 1 ? "text-white" : "text-gray-400"
              }`}
            >
              {drink}
            </h3>
            <div
              className={`h-[1.5px] w-56 transition-colors duration-300 ${
                selectedDrink === index + 1 ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
          </div>
        ))}
      </div>

      {/* Image */}
      <div className="drink mb-12" ref={drinkImgRef}>
        <img
          src={`/drink${selectedDrink}.png`}
          className="h-96 object-contain"
          alt={`Drink ${selectedDrink}`}
        />
      </div>

      {/* Leaves */}
      <div className="right-leaf absolute overflow-hidden -right-20">
        <img src="./footer-right-leaf.png" className="transform" alt="" />
      </div>
      <div className="left-leaf absolute overflow-hidden -left-20 bottom-0">
        <img src="./footer-left-leaf.png" className="transform" alt="" />
      </div>

      {/* Drink Name */}
      <div ref={drinkTitleRef} className="drink-name absolute left-0 bottom-[13%] w-[240px]">
        <h2 className="text-white text-lg py-2">Recipe for:</h2>
        <h1 className="text-[#E7D393] text-6xl overflow-y-hidden leading-14">
          {drinks[selectedDrink - 1]}
        </h1>
      </div>

      {/* Drink Description */}
      <div ref={descTitleRef} className="drink-describtion absolute bottom-[15%] text-white right-4 w-[500px]">
        <h1
          
          className="text-4xl overflow-y-hidden pb-4 font-bold"
        >
          {drinksDecribtion[selectedDrink - 1].description1}
        </h1>
        <p
          
          className="text-lg leading-8 overflow-y-hidden text-gray-300"
        >
          {drinksDecribtion[selectedDrink - 1].description2}
        </p>
      </div>
    </div>
  );
}

export default Page5;
