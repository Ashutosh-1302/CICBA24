"use client"
import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import Image from "next/image";
import styles from "../../styles/Carousely.module.css";

export default function Carousely() {
  const slides = [
    {
      id: "1",
      name: "CICBA-2024",
      para: "Publish Your Research with Premium Publisher.",
      date: "January 23-25, 2024",
      url: "/Assets/slide1.jpg",
    },
    {
      id: "2",
      name: "CICBA-2024",
      para: "Listen from Pioneer Speakers.",
      date: "January 23-25, 2024",
      url: "Assets/slide1.jpg",
    },
    {
      id: "3",
      name: "CICBA-2024",
      para: "Meet Fabulous Personalities.",
      date: "January 23-25, 2024",
      url: "/Assets/slide1.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSmallView, setIsSmallView] = useState(false);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const handleResize = () => {
    setIsSmallView(window.innerWidth <= 768);
  };

  // useEffect(() => {
  //   handleResize();
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  return (
    <>
      <div className="text-black overflow-hidden text-xl">
        {/* image slider */}
        <div className="m-auto py-12 relative group">
          <div
            className="h-98 bg-center bg-cover duration-100 w-full"
            style={{
              backgroundImage: `url('./Assets/background.jpg')`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className="flex flex-row p-12 space-x-60">
              <div className="pl-6">
                <h2 className="text-5xl text-white font-semibold m-14 pl-4">{slides[currentIndex].name}</h2>
                <p className="text-xl text-white m-12 pl-4">{slides[currentIndex].para}</p>
                <h3 className="text-2xl text-white bg-gray-800 w-1/2 m-12 pl-5">{slides[currentIndex].date}</h3>
              </div>
              <div className="w-1/2 relative pt-6 pl-3">
                {isSmallView ? (
                  <div className="absolute bottom-2 right-2 w-20 h-20 bg-blue-700 rounded-full flex items-center justify-center pr-5">
                    <img
                      src={slides[currentIndex].url}
                      alt="Thumbnail"
                      className="w-10 h-10 object-cover rounded-full"
                    />
                  </div>
                ) : (
                  <img src={slides[currentIndex].url} alt="Slide Image" className="h-2/3 w-fit" />
                )}
              </div>
            </div>
          </div>
          {/* Left Arrow */}
          <div className="group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={20} />
          </div>
          {/* Right Arrow */}
          <div className="group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide} size={20} />
          </div>
          <div className="flex top-4 justify-center py-2">
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className="text-2xl cursor-pointer"
              >
                <RxDotFilled />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
