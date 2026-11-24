import { useEffect, useRef } from "react";

export default function ScrollWave() {
  const wave = useRef(null);

  useEffect(() => {
    const element = wave.current;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let animation;
    let touchStartY;

    const isFixedPage = () => {
      const page = document.scrollingElement;
      return page.scrollHeight - page.clientHeight <= 1;
    };

    const showWave = () => {
      if (window.scrollY > 1 || animation?.playState === "running") return;

      animation = element.animate(
        reducedMotion.matches ? [
          { opacity: 0, transform: "none" },
          { opacity: 1, transform: "none", offset: 0.42 },
          { opacity: 0, transform: "none" },
        ] : [
          { transform: "translateY(100%)", opacity: 0 },
          { transform: "translateY(0)", opacity: 1, offset: 0.42 },
          { transform: "translateY(100%)", opacity: 0 },
        ],
        { duration: 1350, easing: "ease-in-out" },
      );
    };

    const handleWheel = (event) => {
      if (event.ctrlKey || event.deltaY === 0) return;
      if (event.deltaY < 0 || isFixedPage()) showWave();
    };

    const handleTouchStart = (event) => {
      touchStartY = event.touches.length === 1 && window.scrollY <= 1
        ? event.touches[0].clientY
        : undefined;
    };

    const handleTouchMove = (event) => {
      if (touchStartY === undefined || event.touches.length !== 1) return;
      const distance = event.touches[0].clientY - touchStartY;
      if (distance < 24 && !(distance <= -24 && isFixedPage())) return;
      touchStartY = undefined;
      showWave();
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      animation?.cancel();
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return <div ref={wave} className="scrollWave" aria-hidden="true" />;
}
