// import Image from "next/image";
// import localFont from "next/font/local";
import LayoutInterior from "./components/LayoutInterior";
import ImageGallery from './components/ImageGallery';
import SEO from "./components/SEO";
// import CaseStudyList from "./components/CaseStudyList";
// import caseStudyData from "./components/data/caseStudies.json";
export default function Gallery() {
  // const images = [
  //   { src: '/images/salt.png', alt: 'Image 1' },
  //   { src: '/images/salt.png', alt: 'Image 2' },
  //   { src: '/images/salt.png', alt: 'Image 3' },
  //   { src: '/images/salt.png', alt: 'Image 4' },
  // ];
  return (
    <>
      <SEO
        title="About White House Bakery of Baytown"
        description="Discover why filtered water is essential for sourdough
        baking. Learn how it affects flavor, texture, and the fermentation
        process. Elevate your sourdough with the right water choice."
        keywords="Discover why filtered water is essential for sourdough
        baking. Learn how it affects flavor, texture, and the fermentation
        process. Elevate your sourdough with the right water choice."
      />
      <LayoutInterior
        pageTitle={"The Importance of Using Filtered Water in Sourdough Baking"}
      >
        <h2 className="text-3xl font-bold">
          Image gallery
        </h2>
        <ImageGallery
          images={[
            { src: "/images/salt.png", alt: "Image 1" },
            { src: "/images/salt.png", alt: "Image 2" },
            { src: "/images/salt.png", alt: "Image 3" },
          ]}
        />

  {/*
        <ImageGallery images={images} />

*/}
      </LayoutInterior>
    </>
  );
}
