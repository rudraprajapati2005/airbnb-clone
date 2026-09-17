import { useState } from "react";
import { IconButton } from "../ui/IconButton";
import { IconHeart, IconShare } from "../ui/icons";
import styles from "./ListingHeader.module.css";

interface ListingHeaderProps {
  title: string;
}

export function ListingHeader({ title }: ListingHeaderProps) {
  const [saved, setSaved] = useState(false);

  return (
    <div className={styles.row}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.actions}>
        <IconButton aria-label="Share this listing">
          <IconShare />
          <span className={styles.actionLabel}>Share</span>
        </IconButton>
        <IconButton
          aria-pressed={saved}
          aria-label={saved ? "Remove from saved" : "Save this listing"}
          onClick={() => setSaved((v) => !v)}
        >
          <IconHeart style={saved ? { fill: "var(--color-brand)", stroke: "var(--color-brand)" } : undefined} />
          <span className={styles.actionLabel}>{saved ? "Saved" : "Save"}</span>
        </IconButton>
      </div>
    </div>
  );
}
