import { useLayoutEffect, useState } from "react";

export default function UseLayoutEffectExample() {
  const [color, setColor] = useState("bg-red-500");

  useLayoutEffect(() => {
    setColor("bg-blue-500");
  }, []);

  return (
    <div
      className={`w-32 h-32 ${color} transition-colors duration-500  m-auto`}
    />
  );
}
