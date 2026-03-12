import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX, clientY } = e;

      if (cursorRef.current) {
        cursorRef.current.style.left = clientX + "px";
        cursorRef.current.style.top = clientY + "px";
      }

      if (ringRef.current) {
        ringRef.current.style.left = clientX + "px";
        ringRef.current.style.top = clientY + "px";
      }
    };

    const addHover = () => {
      cursorRef.current.classList.add("hover");
    };

    const removeHover = () => {
      cursorRef.current.classList.remove("hover");
    };

    window.addEventListener("mousemove", moveCursor);

    const links = document.querySelectorAll("a, button");

    links.forEach((link) => {
      link.addEventListener("mouseenter", addHover);
      link.addEventListener("mouseleave", removeHover);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor"></div>
      <div ref={ringRef} className="cursor-ring"></div>
    </>
  );
}