import React, { useRef } from "react";
import ReactCardCarousel from "react-card-carousel";

const Carousel = () => {
  const carouselRef = useRef(null);

  const handleMouseDown = (e) => {
    const startX = e.clientX;
    const handleMouseMove = (e) => {
      const deltaX = e.clientX - startX;
      if (deltaX > 50) {
        carouselRef.current.prev();
        document.removeEventListener("mousemove", handleMouseMove);
      } else if (deltaX < -50) {
        carouselRef.current.next();
        document.removeEventListener("mousemove", handleMouseMove);
      }
    };
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", handleMouseMove);
    });
  };

  const CONTAINER_STYLE = {
    position: "relative",
    height: "100vh",
    width: "100vw",
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "middle",
  };
  const CARD_STYLE = {
    paddingTop: "20px",

    borderRadius: "10px",
    boxSizing: "border-box",
  };
  const imgsize = {
    height: "50vh",
    width: "80vw",
  };
  return (
    <div style={CONTAINER_STYLE}>
      <ReactCardCarousel ref={carouselRef}>
        <div style={CARD_STYLE}>
          <img src="images/img1.jpg " alt="img1" style={imgsize} />
        </div>
        <div style={CARD_STYLE}>
          <img src="images/img2.jpg " alt="img2" style={imgsize} />
        </div>
        <div style={CARD_STYLE}>
          <img src="images/img3.jpg " alt="img3" style={imgsize} />
        </div>
      </ReactCardCarousel>
      <div
        style={{
          position: "absolute",
          top: "0",
          bottom: "0",
          left: "0",
          right: "0",
          zIndex: "1",
          cursor: "grab",
        }}
        onMouseDown={handleMouseDown}
      ></div>
    </div>
  );
};

export default Carousel;
