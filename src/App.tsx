import { useState } from "react";
import { Header } from "./components/layout/Header";
import { Lightbox } from "./components/lightbox/Lightbox";
import { ListingPage } from "./components/listing/ListingPage";
import { PhotoTour } from "./components/photo-tour/PhotoTour";
import { listingData } from "./data/listingData";

type OverlayState =
  | { view: "none" }
  | { view: "tour"; index: number }
  | { view: "lightbox"; index: number };

export default function App() {
  const [overlay, setOverlay] = useState<OverlayState>({ view: "none" });

  return (
    <>
      <Header />
      <ListingPage
        listing={listingData}
        onOpenTour={(index) => setOverlay({ view: "tour", index })}
      />

      {(overlay.view === "tour" || overlay.view === "lightbox") && (
        <PhotoTour
          images={listingData.images}
          startIndex={overlay.index}
          onClose={() => setOverlay({ view: "none" })}
          onOpenLightbox={(index) => setOverlay({ view: "lightbox", index })}
          isTopmost={overlay.view === "tour"}
        />
      )}

      {overlay.view === "lightbox" && (
        <Lightbox
          images={listingData.images}
          startIndex={overlay.index}
          onClose={() => setOverlay({ view: "tour", index: overlay.index })}
        />
      )}
    </>
  );
}
