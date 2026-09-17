import { useState } from "react";
import type { GalleryImage } from "../../types/listing";
import { useBodyScrollLock } from "../../hooks/useBodyScrollLock";
import { useFocusTrap } from "../../hooks/useFocusTrap";
import { useModalKeyboardNav } from "../../hooks/useModalKeyboardNav";
import { IconButton } from "../ui/IconButton";
import { IconChevronLeft, IconChevronRight, IconClose, IconGrid } from "../ui/icons";
import styles from "./Lightbox.module.css";

interface LightboxProps {
  images: GalleryImage[];
  startIndex: number;
  onClose: () => void;
}

export function Lightbox({ images, startIndex, onClose }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(startIndex);
  const containerRef = useFocusTrap<HTMLDivElement>(true);

  const atStart = currentIndex === 0;
  const atEnd = currentIndex === images.length - 1;

  const goPrev = () => setCurrentIndex((i) => Math.max(0, i - 1));
  const goNext = () => setCurrentIndex((i) => Math.min(images.length - 1, i + 1));

  useBodyScrollLock(true);
  useModalKeyboardNav({
    active: true,
    onClose,
    onPrev: goPrev,
    onNext: goNext,
  });

  const current = images[currentIndex];

  return (
    <div
      ref={containerRef}
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-label={`Photo ${currentIndex + 1} of ${images.length}: ${current.room}`}
      onClick={onClose}
    >
      <button type="button" className={styles.galleryButton} aria-label="Back to photo tour" onClick={(event) => { event.stopPropagation(); onClose(); }}>
        <IconGrid />
      </button>

      <div className={styles.headerTitle}>{current.room}</div>
      <div className={styles.headerMeta}>
        <span>{currentIndex + 1} of {images.length}</span>
      <IconButton
        className={styles.close}
        variant="overlay"
        aria-label="Close photo viewer"
        onClick={(event) => {
          event.stopPropagation();
          onClose();
        }}
      >
        <IconClose />
      </IconButton>
      </div>

      <IconButton
        className={styles.prev}
        variant="overlay"
        aria-label="Previous photo"
        disabled={atStart}
        onClick={(event) => {
          event.stopPropagation();
          goPrev();
        }}
      >
        <IconChevronLeft />
      </IconButton>

      <figure
        className={styles.figure}
        onClick={(event) => event.stopPropagation()}
      >
        <img key={current.id} src={current.src} alt={current.alt} className={styles.image} />
      </figure>

      <IconButton
        className={styles.next}
        variant="overlay"
        aria-label="Next photo"
        disabled={atEnd}
        onClick={(event) => {
          event.stopPropagation();
          goNext();
        }}
      >
        <IconChevronRight />
      </IconButton>
    </div>
  );
}
