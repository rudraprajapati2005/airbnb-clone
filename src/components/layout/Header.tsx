import styles from "./Header.module.css";
import { IconGlobe, IconMenu, IconSearch } from "../ui/icons";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="/" className={styles.logo} aria-label="Homepage">
             <svg
            viewBox="0 0 1080 1080"
            style={{ display: "block", height: "32px", width: "auto", fill: "currentColor" }}
            aria-hidden="true"
          >
            <path d="M948.912 666.715C875.618 506.859 795.308 344.664 713.438 184.809C698.623 155.177 670.554 98.2527 645.603 67.8412C609.736 24.1733 556.715 0.779785 502.915 0.779785C449.115 0.779785 396.094 24.1733 360.227 67.8412C335.277 98.2527 307.207 155.177 292.392 184.809C210.522 344.664 130.212 506.859 56.9187 666.715C47.5621 687.769 24.9504 737.675 16.3736 760.289C6.2373 787.581 0.779297 817.213 0.779297 846.845C0.779297 975.509 101.362 1079.22 235.473 1079.22C346.193 1079.22 434.3 1008.26 502.915 934.18C571.53 1008.26 659.638 1079.22 770.357 1079.22C904.468 1079.22 1005.83 975.509 1005.83 846.845C1005.83 817.213 999.593 787.581 989.457 760.289C980.88 737.675 958.268 687.769 948.912 666.715ZM502.915 810.195C447.555 738.455 396.094 649.56 396.094 577.819C396.094 506.079 446.776 470.209 502.915 470.209C559.055 470.209 610.516 508.419 610.516 577.819C610.516 647.22 558.275 738.455 502.915 810.195ZM770.357 998.902C688.362 998.902 618.032 941.557 555.741 872.656C619.966 792.541 690.826 679.121 690.826 577.819C690.826 458.513 598.04 389.892 502.915 389.892C407.79 389.892 315.784 458.513 315.784 577.819C315.784 679.098 386.145 792.478 450.144 872.593C387.845 941.526 317.491 998.902 235.473 998.902C146.586 998.902 81.0898 931.061 81.0898 846.845C81.0898 826.57 84.2087 807.856 91.2261 788.361C98.2436 770.426 120.855 720.52 130.212 701.025C203.505 541.17 282.256 380.534 364.126 220.679C378.941 191.047 403.891 141.921 422.605 119.307C442.877 94.3538 470.947 81.0975 502.915 81.0975C534.883 81.0975 562.953 94.3538 583.226 119.307C601.939 141.921 626.89 191.047 641.704 220.679C723.574 380.534 802.325 541.17 875.618 701.025C884.975 720.52 907.587 770.426 914.604 788.361C921.622 807.856 925.52 826.57 925.52 846.845C925.52 931.061 859.244 998.902 770.357 998.902Z"></path>
          </svg>
          <span >airbnb</span>
        </a>
        <div className={styles.searchBar} role="search">

          <img className={styles.searchHouseImg} src="/images/homeLogoWithOutBG.png" alt="House" />
          <button type="button" className={styles.searchItem}>Anywhere</button>
          <button type="button" className={styles.searchItem}>Anytime</button>
          <button type="button" className={`${styles.searchItem} ${styles.guests}`}>Add guests</button>
          <button type="button" className={styles.searchButton} aria-label="Search"><IconSearch /></button>
        </div>
        <div className={styles.navActions}>
          <button type="button" className={styles.host}>Become a host</button>
          <button type="button" className={styles.circleButton} aria-label="Choose a language"><IconGlobe /></button>
          <button type="button" className={styles.circleButton} aria-label="Open menu"><IconMenu /></button>
        </div>
      </div>
    </header>
  );
}
