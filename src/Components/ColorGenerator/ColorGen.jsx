import React, { useState } from "react";

const ColorGen = () => {
  const [colorType, setColorType] = useState("HEX");
  const [color, setColor] = useState("#000000");

  function utilityClass(length) {
    let value = Math.floor(Math.random() * (length + 1));
    return value;
  }

  function handleHexColor() {
    const index = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hex = "#";
    for (let i = 0; i < 6; i++) {
      hex = hex + index[utilityClass(15)]; // Generate a random index for the HEX array
    }
    console.log(hex);
    setColor(hex);
  }

  function handleRgbColor() {
    let red = utilityClass(255);
    let blue = utilityClass(255);
    let green = utilityClass(255);

    let rgbColor = `rgb(${red},${blue},${green})`;
    setColor(rgbColor);
    console.log(rgbColor);
  }

  return (
    <div
      className="flex flex-col title mt-6 w-screen h-screen items-center font-bold text-4xl"
      style={{ backgroundColor: color }}
    >
      <div className="flex flex-row space-x-96 mt-7">
        <button
          className="bg-white p-4 cursor-pointer hover:bg-red-500 rounded-md"
          onClick={() => setColorType("HEX")}
        >
          HEX
        </button>
        <button
          className="bg-white p-4 cursor-pointer hover:bg-red-500 rounded-md"
          onClick={() => setColorType("RGB")}
        >
          RGB
        </button>
        <button
          className="bg-white p-4 cursor-pointer hover:bg-red-500 rounded-md"
          onClick={() =>
            colorType === "HEX" ? handleHexColor() : handleRgbColor()
          }
        >
          Generator
        </button>
      </div>
      <div className="flex flex-col items-center justify-center mt-40 pr-20 space-y-6">
        <h2>{colorType}</h2>
        <h1>{color}</h1>
      </div>
    </div>
  );
};

export default ColorGen;
