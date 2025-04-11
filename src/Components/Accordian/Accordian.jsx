import React, { useState } from "react";
import data from "./data";

const Accordian = () => {
  const [Selected, setSelected] = useState(null); // For single selection
  const [MultiSelection, SetMultipleSelection] = useState(false); // Toggle multiple selection mode
  const [storingVal, SetstoringVal] = useState([]); // For multiple selection

  // Handle single selection
  function handleSingleSelection(itemselected) {
    console.log(itemselected);
    setSelected(itemselected === Selected ? null : itemselected);
  }

  // Handle multiple selection
  function handleMutipleSelection(itemselected) {
    let duplicateArray = [...storingVal];
    const index = duplicateArray.indexOf(itemselected);
    if (index === -1) {
      duplicateArray.push(itemselected); // Add if not already selected
    } else {
      duplicateArray.splice(index, 1); // Remove if already selected
    }
    SetstoringVal(duplicateArray);
  }

  return (
    <div>
      <div className="flex flex-col justify-center items-center h-full border-black">
        <h1 className="text-4xl py-4">Accordian App</h1>
        <button
          className="cursor-pointer text-white font-bold bg-yellow-700 p-5 rounded-sm my-8"
          onClick={() => {
            SetMultipleSelection(!MultiSelection); // Toggle multi-selection mode
          }}
        >
          Enable Multiple Selection
        </button>
        {data && data.length > 0 ? (
          <div className="accordian bg-yellow-700 p-7 gap-y-3 divide-y-8 text-white space-y-3">
            {data.map((item) => (
              <div key={item.id} className="">
                <h3 className="font-bold">{item.question}</h3>
                <span
                  className="pl-48 cursor-pointer"
                  onClick={() => {
                    if (MultiSelection) {
                      handleMutipleSelection(item.id);
                    } else {
                      handleSingleSelection(item.id);
                    }
                  }}
                >
                  +
                </span>
                {/* Show answer based on selection mode */}
                {MultiSelection
                  ? storingVal.includes(item.id) && (
                      <h3 className="mt-2">{item.answer}</h3>
                    )
                  : Selected === item.id && (
                      <h3 className="mt-2">{item.answer}</h3>
                    )}
              </div>
            ))}
          </div>
        ) : (
          <div>There is no data....</div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
