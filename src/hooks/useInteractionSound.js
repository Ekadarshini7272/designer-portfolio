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
  oscillator.type = "triangle";
  oscillator.frequency.setValueAtTime(360, now);
  oscillator.frequency.exponentialRampToValueAtTime(720, now + 0.055);

  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.042, now + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.14);

  oscillator.connect(gain);
  gain.connect(context.destination);
  oscillator.start(now);
  oscillator.stop(now + 0.15);
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

    const handleClick = (event) => {
      const target = event.target.closest(interactiveSelector);

      if (isValidTarget(target)) {
        playTone();
      }
    };

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [router.pathname]);
};

export default useInteractionSound;
