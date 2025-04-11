import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./custom.css";

const ImageSli = ({ url, page, limit }) => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }

  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${url}?page=${page}&limit=${limit}`);
        const data = await response.json();
        setImages(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [url, page, limit]);

  return (
    <div className="relative flex flex-col items-center justify-center w-screen h-screen bg-gray-100">
      {loading && <p>Loading Data...</p>}
      {error && <p>{error}</p>}
      <div className="relative flex items-center justify-center w-10/12 h-5/6">
        <BsArrowLeftCircleFill
          onClick={handlePrevious}
          className="absolute w-12 h-12 text-black drop-shadow-lg left-5 top-1/2 transform -translate-y-1/2 cursor-pointer"
        />
        {images.length > 0 && (
          <img
            src={images[currentSlide].download_url}
            alt={images[currentSlide].url}
            key={images[currentSlide].id}
            className="rounded-lg shadow-lg w-80 h-80"
          />
        )}
        <BsArrowRightCircleFill
          onClick={handleNext}
          className="absolute w-12 h-12 text-black drop-shadow-lg right-9 top-1/2 transform -translate-y-1/2 cursor-pointer"
        />
        <div className="flex absolute bottom-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-4 w-4 rounded-full m-1 ${
                currentSlide === index
                  ? "bg-black border-2 border-white"
                  : "bg-gray-600"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSli;
