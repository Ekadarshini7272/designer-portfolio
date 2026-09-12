import { useEffect } from "react";
import { useRouter } from "next/router";

const interactiveSelector = [
  "a[href]",
  "button",
  "[role='button']",
  "input",
  "select",
  "textarea",
  "summary",
].join(",");

let audioContext;
let lastHoverAt = 0;
let lastHoverTarget = null;

const getAudioContext = () => {
  if (typeof window === "undefined") return null;

  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return null;

  if (!audioContext || audioContext.state === "closed") {
    audioContext = new AudioContext();
  }

  if (audioContext.state === "suspended") {
    audioContext.resume().catch(() => {});
  }

  return audioContext;
};

const playTone = (type) => {
  const context = getAudioContext();
  if (!context) return;

  const oscillator = context.createOscillator();
  const gain = context.createGain();
  const now = context.currentTime;
  const isClick = type === "click";

  oscillator.type = isClick ? "triangle" : "sine";
  oscillator.frequency.setValueAtTime(isClick ? 360 : 560, now);
  oscillator.frequency.exponentialRampToValueAtTime(isClick ? 720 : 680, now + 0.055);

  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(isClick ? 0.042 : 0.018, now + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + (isClick ? 0.14 : 0.075));

  oscillator.connect(gain);
  gain.connect(context.destination);
  oscillator.start(now);
  oscillator.stop(now + (isClick ? 0.15 : 0.08));
};

const isValidTarget = (element) =>
  element &&
  !element.disabled &&
  element.getAttribute("aria-disabled") !== "true" &&
  !element.classList.contains("disabled");

const useInteractionSound = () => {
  const router = useRouter();

  useEffect(() => {
    if (router.pathname.startsWith("/recommendations")) return undefined;

    const handlePointerOver = (event) => {
      const target = event.target.closest(interactiveSelector);
      const now = window.performance.now();

      if (!isValidTarget(target) || target === lastHoverTarget || now - lastHoverAt < 65) {
        return;
      }

      lastHoverTarget = target;
      lastHoverAt = now;
      playTone("hover");
    };

    const handlePointerOut = (event) => {
      const target = event.target.closest(interactiveSelector);

      if (target && !target.contains(event.relatedTarget)) {
        lastHoverTarget = null;
      }
    };

    const handleClick = (event) => {
      const target = event.target.closest(interactiveSelector);

      if (isValidTarget(target)) {
        playTone("click");
      }
    };

    document.addEventListener("pointerover", handlePointerOver, true);
    document.addEventListener("pointerout", handlePointerOut, true);
    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("pointerover", handlePointerOver, true);
      document.removeEventListener("pointerout", handlePointerOut, true);
      document.removeEventListener("click", handleClick, true);
    };
  }, [router.pathname]);
};

export default useInteractionSound;
