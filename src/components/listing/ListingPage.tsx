import { useEffect, useRef, useState } from "react";
import type { ListingData } from "../../types/listing";
import { GalleryGrid } from "../gallery/GalleryGrid";
import { IconAmenity, IconReviewMetric, type AmenityIconName, type ReviewMetricIconName } from "../ui/icons";
import { AmenitiesModal } from "./AmenitiesModal";
import { BookingCard } from "./BookingCard";
import { ListingHeader } from "./ListingHeader";
import styles from "./ListingPage.module.css";

interface ListingPageProps {
  listing: ListingData;
  onOpenTour: (startIndex: number) => void;
}

export function ListingPage({ listing, onOpenTour }: ListingPageProps) {
  const nearbyStays = listing.images.slice(1, 6);
  const nearbyStaysPages = [
    nearbyStays,
    listing.images.slice(3, 8),
  ];
  const [activeSection, setActiveSection] = useState("photos");
  const [nearbyPage, setNearbyPage] = useState(0);
  const [amenitiesOpen, setAmenitiesOpen] = useState(false);
  const [descriptionExpanded, setDescriptionExpanded] = useState(false);
  const [sectionNavVisible, setSectionNavVisible] = useState(false);
  const galleryAnchorRef = useRef<HTMLDivElement>(null);
  const titleAnchorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateScrollState = () => {
      const galleryBottom = galleryAnchorRef.current?.getBoundingClientRect().bottom ?? 0;
      const titleTop = titleAnchorRef.current?.getBoundingClientRect().top ?? 0;
      const shouldShowSectionNav = galleryBottom <= 0 || titleTop <= 0;

      setSectionNavVisible(shouldShowSectionNav);

      const sectionIds = ["photos", "amenities", "reviews", "location"];
        const navHeight = 76;
      const currentSection = sectionIds.reduce((current, sectionId) => {
        const section = document.getElementById(sectionId);
        return section && section.getBoundingClientRect().top <= navHeight ? sectionId : current;
      }, "photos");

      setActiveSection(currentSection);
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      window.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  const handleSectionNavigation = (event: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    event.preventDefault();
    setActiveSection(sectionId);

    if (sectionId === "photos") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <ListingHeader title={listing.title} />

        <div ref={galleryAnchorRef}>
          <GalleryGrid images={listing.images} onOpenTour={onOpenTour} />
        </div>

        <nav className={`${styles.sectionNav} ${sectionNavVisible ? styles.sectionNavVisible : ""}`} aria-label="Listing sections">
          {[['Photos', 'photos'], ['Amenities', 'amenities'], ['Reviews', 'reviews'], ['Location', 'location']].map(([label, id]) => (
            <a key={id} className={activeSection === id ? styles.activeTab : ""} href={`#${id}`} onClick={(event) => handleSectionNavigation(event, id)}>{label}</a>
          ))}
          <div className={styles.navSummary}>
            <div><strong>{listing.price.currencySymbol}28,499 <small>for 5 nights</small></strong><span>★ {listing.rating.average.toFixed(2)} · {listing.rating.reviewCount} reviews</span></div>
            <button type="button">Reserve</button>
          </div>
        </nav>

        <div className={styles.contentLayout}>
          <div className={styles.mainColumn}>
            <div className={styles.firstView} id="photos">
              <div ref={titleAnchorRef} className={styles.titleBlock}>
                <h1>Entire serviced apartment in Candolim, India</h1>
                <p>{listing.meta.guests} guests · {listing.meta.bedrooms} bedroom · {listing.meta.beds} bed · {listing.meta.bathrooms} bathroom</p>
              </div>

              <div className={styles.favourite}>
                <strong><span aria-hidden="true">♧</span> Guest<br />favourite <span aria-hidden="true">♧</span></strong>
                <span>One of the most loved homes on Airbnb,<br />according to guests</span>
                <b>{listing.rating.average.toFixed(2)}<small>★★★★★</small></b>
                <i aria-hidden="true" />
                <b>{listing.rating.reviewCount}<small>Reviews</small></b>
              </div>

              <div className={styles.hostRow}>
                <img src={listing.host.avatarSrc} alt={`${listing.host.name}, host`} />
                <div><strong>Hosted by {listing.host.name}</strong><span>2 years hosting</span></div>
              </div>

              <div className={styles.highlights}>
                <div><span aria-hidden="true">♨</span><p><strong>Outdoor entertainment</strong><br />The pool and alfresco dining are great for summer trips.</p></div>
                <div><span aria-hidden="true">♧</span><p><strong>Designed for staying cool</strong><br />Beat the heat with the A/C and ceiling fan.</p></div>
                <div><span aria-hidden="true">▣</span><p><strong>Self check-in</strong><br />You can check in with the building staff.</p></div>
              </div>

              <div className={styles.translation}>Some info has been automatically translated. <u>Show original</u></div>
              <div className={styles.descriptionBlock}>
                <p className={`${styles.description} ${descriptionExpanded ? styles.descriptionExpanded : ""}`}>
                  🌴 Plan Your Relaxing Holiday at Amor De Goa by Mirashya Homes! ✨ Stay in this cozy 1BHK in the heart of Candolim, featuring a private jacuzzi 🛁 for the perfect unwind. Enjoy high-speed WiFi 💻, Smart TV 📺, pet-friendly comfort 🐾, and stylish interiors. Just minutes from Candolim Beach 🏖️, popular cafés, restaurants, and nightlife 🍹, it&apos;s ideal for couples seeking romance, relaxation, and a touch of luxury in North Goa. ❤️🌴
                </p>
                <button
                  type="button"
                  className={styles.descriptionToggle}
                  onClick={() => setDescriptionExpanded((expanded) => !expanded)}
                  aria-expanded={descriptionExpanded}
                >
                  {descriptionExpanded ? "Show Less >" : "Show more >"}
                </button>
              </div>
            </div>

            <section className={styles.section} aria-labelledby="sleep-title">
          <h2 id="sleep-title">Where you&apos;ll sleep</h2>
          <div className={styles.roomGrid}>
            {listing.images.slice(3, 5).map((image, index) => (
              <article key={image.id} className={styles.roomCard}>
                <img src={image.src} alt={image.alt} />
                <strong>{index === 0 ? "Bedroom" : "Living room"}</strong>
                <span>{index === 0 ? "1 double bed" : "1 sofa"}</span>
              </article>
            ))}
          </div>
          </section>

        <section className={styles.section} id="amenities" aria-labelledby="amenities-title">
          <h2 id="amenities-title">What this place offers</h2>
          <div className={styles.amenityGrid}>
            {([
              ["Kitchen", "kitchen"],
              ["Wifi", "wifi"],
              ["Dedicated workspace", "workspace"],
              ["Free parking on premises", "parking"],
              ["TV", "tv"],
              ["Air conditioning", "air-conditioning"],
            ] as Array<[string, AmenityIconName]>).map(([amenity, icon]) => (
              <span key={amenity}><IconAmenity name={icon} />{amenity}</span>
            ))}
          </div>
          <button type="button" className={styles.outlineButton} onClick={() => setAmenitiesOpen(true)}>Show all 50 amenities</button>
        </section>

        <section className={`${styles.section} ${styles.calendarSection}`} aria-labelledby="calendar-title">
          <h2 id="calendar-title">5 nights in Candolim</h2>
          <p>18 Oct 2026 - 23 Oct 2026</p>
          <div className={styles.calendarRow}>
            {["October 2026", "November 2026"].map((month, monthIndex) => (
              <div key={month} className={styles.calendar}>
                <h3>{month}</h3>
                <div className={styles.weekdays}>{["S", "M", "T", "W", "T", "F", "S"].map((day, index) => <span key={`${day}-${index}`}>{day}</span>)}</div>
                <div className={styles.days}>{Array.from({ length: 35 }, (_, index) => {
                  const day = index - (monthIndex === 0 ? 3 : 6) + 1;
                  return <span key={index} className={day === 18 || day === 23 ? styles.selectedDay : day < 1 || day > (monthIndex === 0 ? 31 : 30) ? styles.mutedDay : ""}>{day > 0 && day <= (monthIndex === 0 ? 31 : 30) ? day : ""}</span>;
                })}</div>
              </div>
            ))}
          </div>
          <a className={styles.clearDates} href="#calendar-title">Clear dates</a>
        </section>

          </div>
          <BookingCard
            price={listing.price}
            rating={listing.rating}
          />
        </div>

        <section className={styles.section} id="reviews" aria-labelledby="reviews-title">
          <div className={styles.reviewHero}>
            <div className={styles.ratingMark}>
              <img src="/laurel-left.png" alt="" />
              <span>{listing.rating.average.toFixed(2)}</span>
              <img src="/laurel-right.png" alt="" />
            </div>
            <h2 id="reviews-title">Guest favourite</h2>
            <p>This home is a guest favourite based on ratings, reviews and reliability</p>
            <a href="#review-list">How reviews work</a>
          </div>
          <div className={styles.reviewStats}>
            {["Overall rating", "Cleanliness", "Accuracy", "Check-in", "Communication", "Location", "Value"].map((label, index) => (
              <div key={label}>
                <strong>{label}</strong>
                {index === 0 ? (
                  <div className={styles.ratingBars}>{[5, 4, 3, 2, 1].map((score) => <span key={score}><b>{score}</b><i className={score === 5 ? styles.ratingBarActive : ""} /></span>)}</div>
                ) : (
                  <><b>{index < 5 ? "5.0" : "4.8"}</b><IconReviewMetric name={(["cleanliness", "accuracy", "check-in", "communication", "location", "value"] as ReviewMetricIconName[])[index - 1]} /></>
                )}
              </div>
            ))}
          </div>
          <div className={styles.reviewTags} aria-label="Review categories">
            {["🛏 Comfort 6", "✅ Accuracy 5", "🛁 Hot tub 5", "🧺 Condition 4", "🎁 Hospitality 8", "🧴 Cleanliness 4", "🍽 Amenities 2", "Decor 2", "Indoor Spaces 2", "Location 2"].map((tag) => <span key={tag}>{tag}</span>)}
          </div>
          <div className={styles.reviewList} id="review-list">
            {["Amit", "Aheesh", "Samiksha", "Vedant", "Vaibhav S", "Mohd"].map((name, index) => <article key={name}><div className={styles.reviewer}><span>{name[0]}</span><div><strong>{name}</strong><small>{index % 2 ? "3 years" : "2 months"} on Airbnb</small></div></div><b>★★★★★ · {index % 2 ? "2 weeks ago" : "1 week ago"}</b><p>{index % 2 ? "We had a wonderful stay. The apartment was clean, comfortable, and exactly as shown in the photos. The host was very responsive and helpful throughout our stay." : "Very helpful and responsive team. Safe and peaceful stay, loved everything about the property."}</p></article>)}
          </div>
          <button type="button" className={styles.outlineButton}>Show all {listing.rating.reviewCount} reviews</button>
        </section>

        <section className={styles.section} id="location" aria-labelledby="location-title">
          <h2 id="location-title">Where you&apos;ll be</h2>
          <p>{listing.location}</p>
          <div className={styles.map}><span>⌕</span><i>●</i><div className={styles.mapControls}>＋<br />−</div></div>
          <p>Exact location will be provided after booking.</p>
          <h3>Neighbourhood highlights</h3>
          <p>Located in the heart of Candolim, Amor de Goa offers a peaceful stay with easy access to beaches, cafés, and popular attractions.</p>
          <a className={styles.showMore} href="#location">Show more ›</a>
        </section>

        <section className={styles.section} aria-labelledby="host-title">
          <h2 id="host-title">Meet your host</h2>
          <div className={styles.hostSection}>
            <article className={styles.hostCard}>
              <div className={styles.hostIdentity}>
                <div className={styles.hostAvatarWrap}>
                  <img src={listing.host.avatarSrc} alt="Mirashya Homes" />
                  <span aria-label="Verified host">✓</span>
                </div>
                <h3>Mirashya<br />Homes</h3>
                <span>Host</span>
              </div>
              <div className={styles.hostStats}>
                <strong>1,463<small>Reviews</small></strong>
                <strong>4.68★<small>Rating</small></strong>
                <strong>{listing.host.yearsHosting}<small>Years hosting</small></strong>
              </div>
            </article>
            <div className={styles.hostFacts}>
              <p><span aria-hidden="true">♧</span>Born in the 80s</p>
              <p><span aria-hidden="true">⌂</span>Where I went to school: NICMAR GOA</p>
            </div>
            <div className={styles.hostDetails}>
              <h3>Co-Hosts</h3>
              <div className={styles.coHostGrid}>
                {['Sharath', 'Aman Dev Pahwa', 'Maria Karen Priyanka', 'Simran', 'Pallavi', 'Sanyukta', 'Shruti', 'Amisha'].map((name, index) => (
                  <span key={name}>
                    {index < 6 ? <img src={`https://picsum.photos/seed/cohost-${index}/48/48`} alt="" /> : <b>{name[0]}</b>}
                    {name}
                  </span>
                ))}
              </div>
              <h3>Host details</h3>
              <p>Response rate: 100%<br />Responds within an hour</p>
              <button type="button" className={styles.messageHost}>Message host</button>
              <p className={styles.paymentNote}><span aria-hidden="true">♢</span>To help protect your payment, always use Airbnb to send money and communicate with hosts.</p>
            </div>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="know-title">
          <h2 id="know-title">Things to know</h2>
          <div className={styles.knowGrid}>{[["▣", "Cancellation policy", "Free cancellation before 17 October. Cancel before check-in on 18 October for a partial refund."], ["⚿", "House rules", "Check-in after 2:00 pm\nCheckout before 11:00 am\n3 guests maximum"], ["♢", "Safety & property", "Carbon monoxide alarm not reported\nSmoke alarm not reported\nExterior security cameras on property"]].map(([icon, title, text]) => <article key={title}><span className={styles.knowIcon}>{icon}</span><h3>{title}</h3><p>{text}</p><a href="#know-title">Learn more</a></article>)}</div>
        </section>

        <section className={`${styles.section} ${styles.nearby}`} aria-labelledby="nearby-title">
          <div className={styles.nearbyHeading}><h2 id="nearby-title">More stays nearby</h2><div className={styles.nearbyControls}><span>{nearbyPage + 1} / {nearbyStaysPages.length}</span><button type="button" aria-label="Previous stays" onClick={() => setNearbyPage((page) => Math.max(0, page - 1))} disabled={nearbyPage === 0}>‹</button><button type="button" aria-label="Next stays" onClick={() => setNearbyPage((page) => Math.min(nearbyStaysPages.length - 1, page + 1))} disabled={nearbyPage === nearbyStaysPages.length - 1}>›</button></div></div>
          <div className={styles.nearbyViewport}>
            <div className={styles.nearbyTrack} style={{ transform: `translateX(-${nearbyPage * 100}%)` }}>
              {nearbyStaysPages.map((page, pageIndex) => <div className={styles.nearbyGrid} key={`nearby-page-${pageIndex}`}>
                {page.map((image, index) => <article key={`${pageIndex}-${image.id}`}><img src={image.src} alt={image.alt} /><strong>{["Beautiful Studio with a view to die for", "NAQAB - 1bhk with private pool", "Greentique Luxury Flat with plunge pool, Calangute", "The Tropical Studio | 5 mins to Beach", "Luxury Casa Bella 1BHK with plunge pool, Calangute"][index]}</strong><span>{listing.price.currencySymbol}{(23600 + index * 3200 + pageIndex * 1800).toLocaleString("en-IN")} · ★ 4.9{index}</span></article>)}
              </div>)}
            </div>
          </div>
        </section>
      </div>
      {amenitiesOpen && <AmenitiesModal onClose={() => setAmenitiesOpen(false)} />}
    </main>
  );
}
