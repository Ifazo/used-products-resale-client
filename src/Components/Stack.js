import React from "react";

const Stack = () => {
  return (
    <div>
      <div className="flex m-2 gap-2">
        <div className="w-32 h-20 rounded bg-primary text-primary-content place-content-center">
          1
        </div>
        <div className="w-32 h-20 rounded bg-accent text-accent-content place-content-center">
          2
        </div>
        <div className="w-32 h-20 rounded bg-secondary text-secondary-content place-content-center">
          3
        </div>
      </div>
    </div>
  );
};

export default Stack;
