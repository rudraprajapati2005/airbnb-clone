/**
 * Canonical image record. The same array (see data/listingData.ts) is reused
 * by the gallery grid, the Photo Tour, and the Lightbox so that image order
 * and indices stay identical across all three surfaces.
 */
export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  /** Short room/area label shown as the Photo Tour caption heading. */
  room: string;
  /** One-line detail string shown under the room label in the Photo Tour. */
  detail: string;
}

export interface HostInfo {
  name: string;
  isSuperhost: boolean;
  yearsHosting: number;
  avatarSrc: string;
}

export interface RatingInfo {
  average: number;
  reviewCount: number;
}

export interface ListingMeta {
  guests: number;
  bedrooms: number;
  beds: number;
  bathrooms: number;
}

export interface PriceInfo {
  nightly: number;
  currencySymbol: string;
  discountLabel: string;
}

export interface ListingData {
  title: string;
  propertyType: string;
  location: string;
  meta: ListingMeta;
  rating: RatingInfo;
  host: HostInfo;
  price: PriceInfo;
  images: GalleryImage[];
}
