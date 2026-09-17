import type { GalleryImage } from "../../types/listing";
import { IconGrid } from "../ui/icons";
import styles from "./GalleryGrid.module.css";

interface GalleryGridProps {
  images: GalleryImage[];
  onOpenTour: (startIndex: number) => void;
}

const START_ROOM = "Living room 2";
const PREVIEW_SELECTION = [
  { room: "Living room 2", occurrence: 0 },
  { room: "Living room 2", occurrence: 1 },
  { room: "Living room 2", occurrence: 2 },
  { room: "Bedroom", occurrence: 0 },
  { room: "Exterior", occurrence: 0 },
] as const;

export function GalleryGrid({ images, onOpenTour }: GalleryGridProps) {
  const visible = PREVIEW_SELECTION.map(({ room, occurrence }) =>
    images.filter((image) => image.room === room)[occurrence],
  ).filter((image): image is GalleryImage => Boolean(image));
  const [hero, ...rest] = visible;
  const startRoomIndex = images.findIndex((image) => image.room === START_ROOM);
  const heroTourIndex = startRoomIndex === -1 ? 0 : startRoomIndex;

  return (
    <div className={styles.grid} role="group" aria-label="Photo gallery preview">
      <button
        type="button"
        className={styles.hero}
        onClick={() => onOpenTour(heroTourIndex)}
        aria-label={`Open photo tour, starting at ${START_ROOM}`}
      >
        <img src={hero.src} alt={hero.alt} loading="eager" />
      </button>

      <div className={styles.subgrid}>
        {rest.map((image) => {
          const index = images.indexOf(image);
          return (
            <button
              key={image.id}
              type="button"
              className={styles.cell}
              onClick={() => onOpenTour(index)}
              aria-label={`Open photo tour, starting at photo ${index + 1} of ${images.length}: ${image.alt}`}
            >
              <img src={image.src} alt={image.alt} loading="eager" />
            </button>
          );
        })}
      </div>

      <button
        type="button"
        className={styles.showAll}
        onClick={() => onOpenTour(0)}
        aria-label={`Show all ${images.length} photos`}
      >
        <IconGrid />
        Show all photos
      </button>
    </div>
  );
}
