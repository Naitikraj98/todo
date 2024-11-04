import React from "react";
import { useDrag } from "react-dnd";
import "../../Assets/Style/Draggable.css";

const Draggable = ({ id, left, top, children }) => {
  const [, drag] = useDrag({
    type: "TEXT_ELEMENT",
    item: { id, left, top },
  });

  return (
    <div
      ref={drag}
      style={{
        position: "relative",
        top,
        // left,
        cursor: "move",
      }}
      className="flex justify-center items-center text-center font-bold text-blue-500"
      >
        <div className="text-2xl md:text-3xl lg:text-4xl">{children}</div>
      </div>
    );
  };
export default Draggable;

 
