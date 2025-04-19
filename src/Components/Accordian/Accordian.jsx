import React, { useState } from "react";
import data from "./data";

const Accordian = () => {
  const [selected, setSelected] = useState(null); // For single selection
  const [multiSelection, setMultiSelection] = useState(false); // Toggle multi-selection mode
  const [storingVal, setStoringVal] = useState([]); // For multiple selection

  // Handle single selection
  function handleSingleSelection(itemId) {
    setSelected(itemId === selected ? null : itemId);
  }

  // Handle multiple selection
  function handleMultipleSelection(itemId) {
    let updated = [...storingVal];
    const index = updated.indexOf(itemId);
    if (index === -1) {
      updated.push(itemId);
    } else {
      updated.splice(index, 1);
    }
    setStoringVal(updated);
  }

  return (
    <div className="flex flex-col justify-center items-center h-full border-black">
      <h1 className="text-4xl py-4">Accordian App</h1>

      <button
        className="cursor-pointer text-white font-bold bg-yellow-700 p-5 rounded-sm my-8"
        onClick={() => setMultiSelection(!multiSelection)}
      >
        {multiSelection ? "Enable Single Selection" : "Enable Multiple Selection"}
      </button>

      {data && data.length > 0 ? (
        <div className="accordian bg-yellow-700 p-7 gap-y-3 divide-y-8 text-white space-y-3">
          {data.map((item) => (
            <div key={item.id}>
              <h3 className="font-bold">{item.question}</h3>
              <span
                className="pl-48 cursor-pointer"
                onClick={() =>
                  multiSelection
                    ? handleMultipleSelection(item.id)
                    : handleSingleSelection(item.id)
                }
              >
                +
              </span>

              {multiSelection
                ? storingVal.includes(item.id) && (
                    <h3 className="mt-2">{item.answer}</h3>
                  )
                : selected === item.id && (
                    <h3 className="mt-2">{item.answer}</h3>
                  )}
            </div>
          ))}
        </div>
      ) : (
        <div>There is no data...</div>
      )}
    </div>
  );
};

export default Accordian;
