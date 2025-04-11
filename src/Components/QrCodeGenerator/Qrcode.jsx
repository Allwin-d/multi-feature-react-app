import React, { useState } from "react";
import QRCode from "react-qr-code";

const Qrcode = () => {
  const [input, setInput] = useState("");
  const [qrval, setQrval] = useState("");

  function generateQrValue() {
    setQrval(input);
    setInput("")
  }

  return (
    <div className="mt-4">
      <h1 className="text-center font-bold text-3xl">Qr Code Generator</h1>
      <div className="flex items-center justify-center mt-5 space-x-6 ">
        <input
          type="text"
          value={input }
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your Value"
          className="border-black text-center font-semibold border-4 p-4 text-2xl"
        ></input>
        <button
          onClick={generateQrValue}
          className="rounded-lg font-semibold bg-blue-500 p-3 text-white transition-colors duration-500 ease-in-out hover:bg-red-500"
        >
          Generate Qr Code
        </button>
      </div >
      <div className="flex items-center justify-center mt-8">
      <QRCode value={qrval} size={400} className="bg-white  mt-4"></QRCode></div>
    </div>
  );
};

export default Qrcode;
