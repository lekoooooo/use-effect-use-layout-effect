import { useEffect, useState } from "react";

export default function UseEffectExample() {
  const [color, setColor] = useState("bg-red-500");

  useEffect(() => {
    setColor("bg-green-500");
  }, []);

  return (
    <div
      className={`w-32 h-32 ${color} transition-colors duration-500 m-auto`}
    />
  );
}
