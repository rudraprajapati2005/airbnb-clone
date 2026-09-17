import { useEffect, useRef } from "react";
import { useBodyScrollLock } from "../../hooks/useBodyScrollLock";
import { useFocusTrap } from "../../hooks/useFocusTrap";
import { IconAmenity, IconClose, type AmenityIconName } from "../ui/icons";
import styles from "./AmenitiesModal.module.css";

interface AmenitiesModalProps {
  onClose: () => void;
}

const amenityGroups: Array<[string, Array<[string, AmenityIconName]>]> = [
  ["Bathroom", [["Hairdryer", "hairdryer"], ["Cleaning products", "cleaning"], ["Shampoo", "shampoo"], ["Hot water", "hot-water"], ["Shower gel", "shower-gel"]]],
  ["Bedroom and laundry", [["Washing machine", "washing-machine"], ["Hangers", "hanger"], ["Bed linen", "bed"], ["Room-darkening blinds", "blinds"], ["Iron", "iron"], ["Clothes storage", "storage"], ["Cot", "cot"]]],
  ["Entertainment", [["TV", "tv"]]],
  ["Family", [["Cot", "cot"]]],
  ["Heating and cooling", [["Air conditioning", "air-conditioning"], ["Ceiling fan", "fan"]]],
  ["Home safety", [["Exterior security cameras on property", "camera"], ["Carbon monoxide alarm", "alarm"], ["Smoke alarm", "alarm"]]],
  ["Internet and office", [["Wifi", "wifi"], ["Dedicated workspace", "workspace"]]],
  ["Kitchen and dining", [["Kitchen", "kitchen"], ["Fridge", "fridge"], ["Freezer", "freezer"], ["Microwave", "microwave"], ["Cooking basics", "cooking"], ["Crockery and cutlery", "cutlery"], ["Kettle", "kettle"], ["Coffee", "coffee"], ["Wine glasses", "wine"], ["Toaster", "toaster"], ["Blender", "blender"], ["Cooker", "cooker"]]],
  ["Location features", [["Private entrance", "entrance"]]],
  ["Outdoor", [["Patio or balcony", "patio"], ["Outdoor dining area", "dining"]]],
  ["Parking and facilities", [["Free parking on premises", "parking"], ["Pool", "pool"], ["Hot tub", "hot-tub"], ["Gym", "gym"]]],
  ["Services", [["Pets allowed", "pets"], ["Cleaning available during stay", "cleaning-service"], ["Long-term stays allowed", "long-stay"], ["Self check-in", "self-check-in"]]],
];

export function AmenitiesModal({ onClose }: AmenitiesModalProps) {
  const dialogRef = useFocusTrap<HTMLDivElement>(true);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useBodyScrollLock(true);

  useEffect(() => {
    closeButtonRef.current?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div className={styles.overlay} role="presentation" onMouseDown={onClose}>
      <div
        ref={dialogRef}
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby="amenities-modal-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button ref={closeButtonRef} type="button" className={styles.close} aria-label="Close amenities" onClick={onClose}>
          <IconClose />
        </button>
        <div className={styles.content}>
          <h2 id="amenities-modal-title">What this place offers</h2>
          {amenityGroups.map(([category, amenities]) => (
            <section key={category} className={styles.group} aria-labelledby={`amenity-${category}`}>
              <h3 id={`amenity-${category}`}>{category}</h3>
              <ul>
                {amenities.map(([amenity, icon]) => <li key={amenity}><IconAmenity name={icon} />{amenity}</li>)}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
