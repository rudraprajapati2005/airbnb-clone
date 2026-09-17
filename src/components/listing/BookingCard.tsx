import type { PriceInfo, RatingInfo } from "../../types/listing";
import { IconStar } from "../ui/icons";
import styles from "./BookingCard.module.css";

interface BookingCardProps {
  price: PriceInfo;
  rating: RatingInfo;
}

export function BookingCard({ price, rating }: BookingCardProps) {
  return (
    <div className={styles.bookingRail}>
      <div className={styles.discount}>
        <span aria-hidden="true">🏷️</span>
        <span>Get 10% off your next stay.<br /><u>Terms apply</u></span>
        <button type="button">Claim</button>
      </div>
      <aside className={styles.card} aria-label="Booking">
      <div className={styles.priceRow}>
        <span className={styles.price}>
          {price.currencySymbol}
          28,499
        </span>
        <span className={styles.night}>for 5 nights</span>
      </div>

      <div className={styles.dateGrid}>
        <div className={styles.dateCell}>
          <span className={styles.dateLabel}>CHECK-IN</span>
          <span className={styles.dateValue}>10/18/2026</span>
        </div>
        <div className={styles.dateCell}>
          <span className={styles.dateLabel}>CHECKOUT</span>
          <span className={styles.dateValue}>10/23/2026</span>
        </div>
        <div className={styles.guestCell}>
          <span className={styles.dateLabel}>GUESTS</span>
          <span className={styles.dateValue}>2 guests</span>
        </div>
      </div>

      <button type="button" className={styles.reserve}>
        Reserve
      </button>

      <p className={styles.disclaimer}>You won&apos;t be charged yet</p>

      <p className={styles.ratingSummary}>
        <IconStar />
        <span>{rating.average.toFixed(2)}</span>
        <span aria-hidden="true">{"\u00B7"}</span>
        <span>{rating.reviewCount} reviews</span>
      </p>
      </aside>
    </div>
  );
}
