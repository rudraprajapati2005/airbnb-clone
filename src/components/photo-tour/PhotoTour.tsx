import { useEffect, useMemo, useRef, useState } from "react";
import type { GalleryImage } from "../../types/listing";
import { useBodyScrollLock } from "../../hooks/useBodyScrollLock";
import { useFocusTrap } from "../../hooks/useFocusTrap";
import { useModalKeyboardNav } from "../../hooks/useModalKeyboardNav";
import { IconButton } from "../ui/IconButton";
import { IconChevronLeft } from "../ui/icons";
import styles from "./PhotoTour.module.css";

interface PhotoTourProps {
  images: GalleryImage[];
  startIndex: number;
  onClose: () => void;
  onOpenLightbox: (index: number) => void;
  /** False while the Lightbox is open on top of this view. */
  isTopmost?: boolean;
}

interface TourRoom {
  name: string;
  detail: string;
  images: Array<GalleryImage & { index: number }>;
}

interface TourRow {
  images: Array<GalleryImage & { index: number }>;
  isSingle: boolean;
}

function groupImages(images: GalleryImage[]): TourRoom[] {
  const rooms = new Map<string, TourRoom>();

  images.forEach((image, index) => {
    const room = rooms.get(image.room);
    const record = { ...image, index };

    if (room) {
      room.images.push(record);
      return;
    }

    rooms.set(image.room, { name: image.room, detail: image.detail, images: [record] });
  });

  return [...rooms.values()];
}

function getTourRows(images: TourRoom["images"]): TourRow[] {
  if (images.length === 2) {
    return [{ images, isSingle: false }];
  }

  const rows: TourRow[] = [];
  for (let index = 0; index < images.length; index += index === 0 ? 1 : 2) {
    const rowImages = index === 0 ? images.slice(0, 1) : images.slice(index, index + 2);
    rows.push({ images: rowImages, isSingle: rowImages.length === 1 });
  }

  return rows;
}

export function PhotoTour({
  images,
  startIndex,
  onClose,
  onOpenLightbox,
  isTopmost = true,
}: PhotoTourProps) {
  const rooms = useMemo(() => groupImages(images), [images]);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const [activeRoom, setActiveRoom] = useState(images[startIndex]?.room ?? rooms[0]?.name);
  const containerRef = useFocusTrap<HTMLDivElement>(isTopmost);

  useBodyScrollLock(true);
  useModalKeyboardNav({
    active: isTopmost,
    onClose,
    onPrev: () => onOpenLightbox(Math.max(0, startIndex - 1)),
    onNext: () => onOpenLightbox(Math.min(images.length - 1, startIndex + 1)),
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setActiveRoom(visible.target.getAttribute("data-room") ?? rooms[0]?.name);
        }
      },
      { root: containerRef.current, rootMargin: "-12% 0px -62% 0px", threshold: [0.1, 0.4, 0.8] },
    );

    Object.values(sectionRefs.current).forEach((section) => section && observer.observe(section));
    if (startIndex > 0) {
      sectionRefs.current[images[startIndex]?.room]?.scrollIntoView({ block: "start" });
    } else {
      containerRef.current?.scrollTo({ top: 0, behavior: "auto" });
    }
    return () => observer.disconnect();
  }, [containerRef, images, rooms, startIndex]);

  const scrollToRoom = (room: TourRoom) => {
    sectionRefs.current[room.name]?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveRoom(room.name);
  };

  return (
    <div
      ref={containerRef}
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-label="Photo tour"
      aria-hidden={!isTopmost}
      {...(!isTopmost ? { inert: true } : {})}
    >
      <header className={styles.topBar}>
        <IconButton className={styles.backButton} aria-label="Back to listing" onClick={onClose}>
          <IconChevronLeft />
        </IconButton>
        <h1>Photo tour</h1>
        <div className={styles.topActions}>
         <button  className={styles.shareBtn} type="button" aria-label="Share photo tour">
      <svg viewBox="0 0 36 36" width="20" height="20" fill="currentColor">
        <path
          d="m27 18v9c0 1.1046-.8954 2-2 2h-18c-1.10457 0-2-.8954-2-2v-9m11-15v21m-10-11 
             9.2929-9.29289c.3905-.39053 1.0237-.39053 1.4142 0l9.2929 9.29289"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    </button>
          <button type="button" aria-label="Save photo tour">♡</button>
        </div>
      </header>

      <nav className={styles.thumbStrip} aria-label="Photo tour rooms">
        {rooms.map((room) => {
          const preview = room.images[0];
          return (
          <button
            key={room.name}
            type="button"
            className={`${styles.thumb} ${activeRoom === room.name ? styles.thumbActive : ""}`}
            aria-current={activeRoom === room.name ? "true" : undefined}
            onClick={() => scrollToRoom(room)}
          >
            <img src={preview.src} alt="" loading="lazy" />
            <span>{room.name}</span>
          </button>
          );
        })}
      </nav>

      <main className={styles.tourContent}>
        {rooms.map((room) => (
          <section
            key={room.name}
            ref={(element) => { sectionRefs.current[room.name] = element; }}
            className={styles.roomSection}
            data-room={room.name}
          >
            <div className={styles.roomCopy}>
              <h2>{room.name}</h2>
              <p>{room.detail}</p>
            </div>
            <div className={styles.roomGallery}>
              {getTourRows(room.images).map((row, rowIndex) => (
                <div
                  key={`${room.name}-row-${rowIndex}`}
                  className={`${styles.roomRow} ${row.isSingle ? styles.roomRowSingle : styles.roomRowDouble}`}
                >
                  {row.images.map((image) => (
                    <button
                      key={image.id}
                      type="button"
                      className={styles.roomImage}
                      onClick={() => onOpenLightbox(image.index)}
                      aria-label={`Open ${image.alt}`}
                    >
                      <img src={image.src} alt={image.alt} loading="lazy" />
                    </button>
                  ))}
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
