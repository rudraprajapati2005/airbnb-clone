import type { ListingData } from "../types/listing";

const uploadedImages = [
  ["LivingRoom1.jpg", "Living room 1", "Sofa · Air conditioning · Ceiling fan · TV"],
  ["LivingRoom1_2.jpg", "Living room 1", "Sofa · Air conditioning · Ceiling fan · TV"],
  ["LivingRoom1_3.jpg", "Living room 1", "Sofa · Air conditioning · Ceiling fan · TV"],
  ["LivingRoom2_1.jpg", "Living room 2", "Dining table · Garden view · Ceiling fan"],
  ["LivingRoom2_2.jpg", "Living room 2", "Dining table · Garden view · Ceiling fan"],
  ["LivingRoom2_3.jpg", "Living room 2", "Dining table · Garden view · Ceiling fan"],
  ["LivingRoom2_4.jpg", "Living room 2", "Dining table · Garden view · Ceiling fan"],
  ["LivingRoom2_5.jpg", "Living room 2", "Dining table · Garden view · Ceiling fan"],
  ["LivingRoom2_6.jpg", "Living room 2", "Dining table · Garden view · Ceiling fan"],
  ["full_kitchen_1.jpg", "Full kitchen", "Refrigerator · Induction stove · Cookware"],
  ["Bedroom_1.jpg", "Bedroom", "1 queen bed · Air conditioning · Wardrobe"],
  ["Bedroom_2.jpg", "Bedroom", "1 queen bed · Air conditioning · Wardrobe"],
  ["Bedroom_3.jpg", "Bedroom", "1 queen bed · Air conditioning · Wardrobe"],
  ["Bedroom_4.jpg", "Bedroom", "1 queen bed · Air conditioning · Wardrobe"],
  ["Bedroom_5.jpg", "Bedroom", "1 queen bed · Air conditioning · Wardrobe"],
  ["Bedroom_6.jpg", "Bedroom", "1 queen bed · Air conditioning · Wardrobe"],
  ["FullBathroom.jpg", "Full bathroom", "Jacuzzi tub · Rainfall shower · Hot water"],
  ["gym1.jpg", "Gym", "Fitness equipment · Air conditioning · Towels"],
  ["gym2.jpg", "Gym", "Fitness equipment · Air conditioning · Towels"],
  ["gym3.jpg", "Gym", "Fitness equipment · Air conditioning · Towels"],
  ["gym4.jpg", "Gym", "Fitness equipment · Air conditioning · Towels"],
  ["gym5.jpg", "Gym", "Fitness equipment · Air conditioning · Towels"],
  ["exterior1.jpg", "Exterior", "Private entrance · Parking on premises"],
] as const;

const listingImages = uploadedImages.map(([filename, room, detail]) => ({
  id: filename,
  src: `/images/${filename}`,
  alt: `${room} photo`,
  room,
  detail,
}));

const additionalTourImages = [
  ["LivingRoom2_2.jpg", "Pool", "Shared outdoor pool · Loungers"],
  ["exterior1.jpg", "Pool", "Shared outdoor pool · Loungers"],
  ["LivingRoom2_5.jpg", "Pool", "Shared outdoor pool · Loungers"],
  ["Bedroom_2.jpg", "Addition Photos", "More details of the property"],
  ["full_kitchen_1.jpg", "Addition Photos", "More details of the property"],
  ["LivingRoom1_2.jpg", "Addition Photos", "More details of the property"],
  ["gym3.jpg", "Addition Photos", "More details of the property"],
  ["Bedroom_5.jpg", "Addition Photos", "More details of the property"],
  ["LivingRoom2_6.jpg", "Addition Photos", "More details of the property"],
  ["FullBathroom.jpg", "Addition Photos", "More details of the property"],
  ["gym1.jpg", "Addition Photos", "More details of the property"],
  ["LivingRoom1_7.jpg", "Addition Photos", "More details of the property"],
  ["Bedroom_6.jpg", "Addition Photos", "More details of the property"],
] as const;

const tourImages = additionalTourImages.map(([filename, room, detail], index) => ({
  id: `${room.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${index + 1}`,
  src: `/images/${filename}`,
  alt: `${room} photo ${index + 1}`,
  room,
  detail,
}));

/**
 * Single canonical image array. Every surface (gallery grid, Photo Tour,
 * Lightbox) reads from this array and reasons about images by index, so
 * "photo N" always refers to the same photo everywhere.
 */
export const listingData: ListingData = {
  title: "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10",
  propertyType: "Entire serviced apartment in Candolim, India",
  location: "Candolim, Goa, India",
  meta: {
    guests: 2,
    bedrooms: 1,
    beds: 1,
    bathrooms: 1,
  },
  rating: {
    average: 4.95,
    reviewCount: 19,
  },
  host: {
    name: "Mirashya",
    isSuperhost: true,
    yearsHosting: 4,
    avatarSrc: "https://picsum.photos/seed/mirashya-host/80/80",
  },
  price: {
    nightly: 5699,
    currencySymbol: "\u20B9",
    discountLabel: "Get 10% off your next trip",
  },
  images: [...listingImages, ...tourImages],
};
