import { useEffect } from "react";

interface ModalKeyboardNavOptions {
  active: boolean;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}

/**
 * Wires Escape-to-close and, when provided, ArrowLeft/ArrowRight navigation
 * for a full-screen overlay (Photo Tour or Lightbox).
 */
export function useModalKeyboardNav({
  active,
  onClose,
  onPrev,
  onNext,
}: ModalKeyboardNavOptions) {
  useEffect(() => {
    if (!active) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          onPrev?.();
          break;
        case "ArrowRight":
          onNext?.();
          break;
        default:
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [active, onClose, onPrev, onNext]);
}
