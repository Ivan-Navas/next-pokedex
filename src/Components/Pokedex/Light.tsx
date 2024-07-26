import React from "react";

type Props = {
  color: string;
  on?: boolean;
};

function Light(props: Props) {
  return (
    <div
      className="w-20 h-20 ml-7 border-black border rounded-100%"
      style={{ background: props.color }}
    ></div>
  );
}

export default Light;
