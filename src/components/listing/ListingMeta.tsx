import type { HostInfo, ListingMeta as ListingMetaType, RatingInfo } from "../../types/listing";
import { IconStar } from "../ui/icons";
import styles from "./ListingMeta.module.css";

interface ListingMetaProps {
  propertyType: string;
  meta: ListingMetaType;
  rating: RatingInfo;
  host: HostInfo;
}

export function ListingMeta({ propertyType, meta, rating, host }: ListingMetaProps) {
  return (
    <div className={styles.wrap}>
      <div className={styles.left}>
        <h2 className={styles.propertyType}>{propertyType}</h2>
        <p className={styles.counts}>
          {meta.guests} guests <span aria-hidden="true">{"\u00B7"}</span> {meta.bedrooms} bedroom{" "}
          <span aria-hidden="true">{"\u00B7"}</span> {meta.beds} bed <span aria-hidden="true">{"\u00B7"}</span>{" "}
          {meta.bathrooms} bathroom
        </p>
        <p className={styles.ratingLine}>
          <IconStar />
          <span>{rating.average.toFixed(2)}</span>
          <span aria-hidden="true">{"\u00B7"}</span>
          <span>{rating.reviewCount} reviews</span>
          {host.isSuperhost && (
            <>
              <span aria-hidden="true">{"\u00B7"}</span>
              <span className={styles.superhost}>Superhost</span>
            </>
          )}
        </p>
      </div>
      <img className={styles.avatar} src={host.avatarSrc} alt={`${host.name}, host`} />
    </div>
  );
}
