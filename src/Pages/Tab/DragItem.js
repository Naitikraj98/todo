import React, { useState } from "react";
import { GoPencil } from "react-icons/go";
import { RiPaintFill } from "react-icons/ri";
import { MdOutlineVerticalAlignCenter } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GiPin } from "react-icons/gi";
import { PiCopySimpleLight } from "react-icons/pi";

const DragItem = ({ children, onDelete, onEdit, onPaint }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        display: "inline-block",
        padding: "10px",
        border: hovered ? "2px dashed white" : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}

      {hovered && (
        <div
          style={{
            position: "absolute",
            top: "-40px",
            left: "0",
            display: "flex",
            backgroundColor: "white",
            padding: "5px",
            borderRadius: "5px",
            zIndex: 10,
            boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
          }}
        >
          <GoPencil
            className="cursor-pointer hover:text-yellow-500"
            title="Edit"
            style={{ width: "20px", height: "20px", marginRight: "10px" }}
            onClick={onEdit}
          />
          <RiPaintFill
            className="cursor-pointer hover:text-yellow-500"
            title="Paint"
            style={{ width: "20px", height: "20px", marginRight: "10px" }}
            onClick={onPaint}
          />
          <MdOutlineVerticalAlignCenter
            className="cursor-pointer hover:text-yellow-500"
            title="Align"
            style={{ width: "20px", height: "20px", marginRight: "10px" }}
          />
          <GiPin
            className="cursor-pointer hover:text-yellow-500"
            title="Pin"
            style={{ width: "20px", height: "20px", marginRight: "10px" }}
          />
          <PiCopySimpleLight
            className="cursor-pointer hover:text-yellow-500"
            title="Copy"
            style={{ width: "20px", height: "20px", marginRight: "10px" }}
          />
          <RiDeleteBin6Line
            className="cursor-pointer text-red-500 hover:text-red-700"
            title="Delete"
            style={{ width: "20px", height: "20px", marginRight: "10px" }}
            onClick={onDelete}
          />
        </div>
      )}
    </div>
  );
};

export default DragItem;
