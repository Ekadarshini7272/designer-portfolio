import { useEffect, useRef } from "react";

export default function ScrollWave() {
  const wave = useRef(null);

  useEffect(() => {
    const element = wave.current;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let animation;
    let lastWheel = -Infinity;
    let touchStartY;

    const showWave = () => {
      if (window.scrollY > 0 || reducedMotion.matches || animation?.playState === "running") return;

      animation = element.animate(
        [
          { transform: "translateY(100%)", opacity: 0 },
          { transform: "translateY(25%)", opacity: 1, offset: 0.42 },
          { transform: "translateY(100%)", opacity: 0 },
        ],
        { duration: 1350, easing: "ease-in-out" },
      );
    };

    const handleWheel = (event) => {
      const now = performance.now();
      if (!event.ctrlKey && event.deltaY < 0 && now - lastWheel > 160) showWave();
      lastWheel = now;
    };

    const handleTouchStart = (event) => {
      touchStartY = event.touches.length === 1 && window.scrollY <= 0
        ? event.touches[0].clientY
        : undefined;
    };

    const handleTouchMove = (event) => {
      if (touchStartY === undefined || event.touches.length !== 1) return;
      if (event.touches[0].clientY - touchStartY < 24) return;
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
