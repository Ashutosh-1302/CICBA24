import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import styles from "../../styles/Carousely.module.css";

export default function Carousely() {
  const slides = [
    {
      id: "1",
      name: "CICBA-2023",
      para: "Publish Your Research with Premium Publisher.",
      date: "January 27-28,2023",
      url: "/Assets/slide1.jpg",
    },
    {
      id: "2",
      name: "CICBA-2023",
      para: "Listen from Pioneer Speakers.",
      date: "January 27-28,2023",
      url: "Assets/slide2.jpg",
    },
    {
      id: "3",
      name: "CICBA-2023",
      para: "Meet Fabulous Personalities.",
      date: "January 27-28,2023",
      url: "/Assets/slide1.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

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
  return (
    <>
      <div className="text-black overflow-hidden text-xl">
        {/* image slider */}
        <div className="m-auto py-16 px-4 relative group">
          <div
            style={{
              backgroundColor: "DeepSkyBlue",
            }}
            className="h-96 bg-center bg-cover duration-100"
          >
            <div className="flex flex-1 p-12">
              <div>
                <h2 className="text-3xl text-white font-bold  m-14 ">{`${slides[currentIndex].name}`}</h2>
                <p className="text-xl text-white m-12">{`${slides[currentIndex].para}`}</p>
                <h3 className="text-2xl text-white bg-gray-800  w-1/2 p-2 m-12">{`${slides[currentIndex].date}`}</h3>
              </div>
              <div
                style={{
                  backgroundImage: `url(${slides[currentIndex].url})`,
                  width: "400px",
                  height: "300px",
                }}
                className="w-full  ml-56"
              ></div>
            </div>
          </div>
          {/* Left Arrow */}
          <div className="  group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={20} />
          </div>
          {/* Right Arrow */}
          <div className=" group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide} size={20} />
          </div>
          <div className="flex top-4 justify-center py-2">
            {slides.map((slides, slideIndex) => (
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
