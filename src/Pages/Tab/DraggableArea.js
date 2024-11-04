import React, { useState } from "react";
import { useDrop } from "react-dnd";
import Draggable from "./Draggable";
import DragItem from "./DragItem";

const DroppableArea = ({ items, onDrop, onDragStart, onDragEnd, onEdit, onDelete, onPaint }) => {
  const [hoveredItemId, setHoveredItemId] = useState(null);

  const [, drop] = useDrop({
    accept: "TEXT_ELEMENT",
    drop: (item, monitor) => {
      const delta = monitor.getDifferenceFromInitialOffset();
      const left = Math.round(item.left + delta.x);
      const top = Math.round(item.top + delta.y);
      onDrop(item.id, left, top);
    },
    hover: () => {
      onDragStart();
    },
  });

  return (
    <div
      ref={drop}
      className="relative w-full h-full mt-15"
      style={{ touchAction: "none" }} 
    >
      <img
        src="your-image-url.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: -1 }} 
      />
      {items.map((item) => (
        <div key={item.id} className="py-3">
          <Draggable
            id={item.id}
            left={item.left}
            top={item.top}
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
          >
            <DragItem
              onEdit={() => onEdit(item.id)}
              onDelete={() => onDelete(item.id)}
              onPaint={() => onPaint(item.id)}
            >
              {item.text}
            </DragItem>
          </Draggable>
        </div>
      ))}
    </div>
  );
};

export default DroppableArea;
