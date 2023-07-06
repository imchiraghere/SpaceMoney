import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { createRef, useEffect, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";

export default function BannerComponent() {
  var images = [
    {
      id: 1,
      image: "/finance image.png",
    },
    {
      id: 2,
      image: "/banner5.png",
    },
    {
      id: 3,
      image: "/legacyimg2.png",
    },
    // {
    //     id: 4,
    //     image: 'banner6img.webp',
    //     dis: 'Surprize your Mother',
    //     data:'Drive Prominent Change through knowledge and network'
    // },
    // {
    //     id: 4,
    //     image: 'legacyimg.png',
    //     dis: 'Surprize your Mother'
    // }
  ];

  var slider = createRef();

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    autoplay: true,
  };

  function handleLeftClick() {
    slider.current.slickNext();
  }
  function handleRightClick() {
    slider.current.slickPrev();
  }

  function playImages() {
    return images.map((item) => {
      return (
        <div
          key={item.id}
          style={{
            display: "flex",
            width: "100%",
            alignContent: "center",
            justifyContent: "center",
            paddingLeft: "2%",
            background: "red",
            outline: "none",
          }}
        >
          <Image
            src="/legacyimg2.png"
            width={1327}
            height={450}
            // style={{
            //   width: "100%",
            //   height: 450,
            //   paddingTop: 20,
            //   marginBottom: 20,
            // }}
          />
          <div
            style={{
              position: "absolute",
              display: "flex",
              flexDirection: "row",
              width: 900,
              height: "12%",
              backgroundColor: "transparent",
              // alignSelf:'center',
              marginRight: 40,
              top: "20%",
              marginLeft: "1%",
            }}
          >
            <div
              style={{
                position: "absolute",
                // bottom: '45%',
                marginLeft: "10%",
                color: "#41644A",
                fontFamily: "cursive",
                fontSize: 40,
              }}
            >
              {item.dis}
            </div>
            <div
              style={{
                position: "absolute",
                top: "70%",
                // color: 'darkgray',
                // fontWeight:'bolder',
                color: "red",
                width: "100%",
                fontFamily: "revert",
                fontSize: 28,
              }}
            >
              {item.data}
            </div>
          </div>
          <div></div>
        </div>
      );
    });
  }

  return (
    <div>
      {/* <KeyboardArrowLeftOutlinedIcon
        onClick={handleLeftClick}
        style={{
          fontSize: 40,
          position: "absolute",
          left: "2%",
          top: "75%",
          zIndex: 1,
          color: "darkslategrey",
        }}
      /> */}

      <Slider ref={slider} {...settings}>
        {playImages()}
      </Slider>
      {/* 
      <KeyboardArrowRightOutlinedIcon
        onClick={handleRightClick}
        style={{
          fontSize: 40,
          position: "absolute",
          right: "2%",
          top: "75%",
          zIndex: 1,
          color: "darkslategrey",
        }}
      /> */}
    </div>
  );
}
