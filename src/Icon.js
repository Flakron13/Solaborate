import { useState } from "react";

const Icon1 = () => (
  <svg
    width="25"
    height="34"
    viewBox="0 0 37 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M21.25 29.75L34 17L21.25 4.25" stroke="#343434" stroke-width="4" />
    <path d="M34 17L0 17" stroke="#343434" stroke-width="4" />
  </svg>
);

const Icon2 = () => (
  <svg
    width="25"
    height="34"
    viewBox="0 0 37 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M21.25 29.75L34 17L21.25 4.25" stroke="white" stroke-width="4" />
    <path d="M34 17L0 17" stroke="white" stroke-width="4" />
  </svg>
);

const Icon = () => {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(true);
  };

  const handleLeave = () => {
    setHovered(false);
  };

  return (
    <div onMouseEnter={handleHover} onMouseLeave={handleLeave}>
      {hovered ? <Icon2 /> : <Icon1 />}
    </div>
  );
};

export default Icon;
