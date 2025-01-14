import Image from "next/image";
import Link from "next/link";
import LayoutHome from "./components/LayoutHome";
import localFont from "next/font/local";
import InfoCard from "./components/InfoCard";
import MenuItem from "./components/MenuItem";
import InfoCardSmall from "./components/InfoCardSmall";
import ImageGallery from './components/ImageGallery';

import { useMediaQuery } from "react-responsive";

import SEO from "./components/SEO";

export default function Home() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <>
      <SEO
        title="White House Bakery of Baytown"
        description=""
        keywords=""
      />
      <LayoutHome>
        <main className="flex flex-col items-center sm:items-start">
          <div className="container max-w-screen-xl mx-auto px-4 hero-content text-center">
            <h1 className="text-4xl font-bold text-center text-gray-900 mt-8">Sourdough Baking - The True Taste of Tradition</h1>
            <p><strong>WE ARE AN ALL-ORGANIC, ARTISAN BREAD BAKERY.</strong><br />All bread is crafted with care, our organic sourdough bread brings together time-honored methods and the finest natural ingredients. Taste the difference that <Link href="/ingredients-celtic-salt">Celtic salt</Link>, <Link href="/ingredients-filtered-water">filtered water</Link>, and <Link href="/ingredients-organic-flour">organic flour</Link> make in every bite.
            </p>

            <h2 style={{
              fontSize: "22px"
            }}>How to Order</h2>
              <p>Text your order to: 832.323.3070 (preferably) or 224.392.6495. We&apos;ll text you the pick up address, when your order is ready. <br /><strong>Please allow 48 hours to prepare and bake the bread</strong>.</p>
              <p><strong>ALL BREAD IS MADE TO ORDER, NO SURPLUS LOAVES LEFT</strong>.</p>
            <div className="text-left">
              <h2>Why Choose Our Organic Sourdough Bread</h2>
              <ul>
                <li><strong>Organic Ingredients:</strong> Free from harmful additives and chemicals.</li>
                <li><strong>Timeless Methods:</strong> Slow fermentation for superior flavor and nutrition.</li>
                <li><strong>Sustainably Crafted:</strong> Supporting the planet with every loaf.</li>
              </ul>
              
              <div className="grid grid-cols-1 gap-6">

                <MenuItem
                  id="standard-sourdough"
                  imgSrc="/images/standard_sourdough01.jpg"
                  productName="Standard Sourdough Bread"
                  description="A taste of the simple life - a loaf of sourdough bread made with only the finest of ingredients. Organic flour, celtic salt and filtered water. Baked from a mature, organic starter. Hand-made using traditional methods by an expert baker."
                  price="$10.00"
                  weight="2.2lbs"
                />
                <MenuItem
                  id="sourdough-poppy"
                  imgSrc="/images/sourdough_poppy01.jpg"
                  productName="Sourdough Bread with Poppy Seeds"
                  description="A loaf covered with poppyseeds on the outside, enhancing the sourdough flavor. Baked from a mature starter. All organic."
                  price="$12.00"
                  weight="2.2lbs"

                />
                <MenuItem
                  id="butter-bread"
                  imgSrc="/images/sourdough_butterbread01.jpg"
                  productName="Butter Bread"
                  description="Sandwich bread. A buttery loaf treated with grass-fed cow butter after baking, making the crust softer and delicious."
                  price="$12.00"
                  weight="2.2lbs"

                />
                <MenuItem
                  id="sunflower-bread"
                  imgSrc="/images/sunflower_bread.jpg"
                  productName="Sunflower Bread"
                  description="A delicious loaf permeated by sunflower seeds. Baked like regular sourdough bread - with crisp, crunchy crust. Baked with organic sunflower seeds."
                  price="$12.00"
                  weight="2.2lbs"

                />
                <MenuItem
                  id="garlic-bread"
                  imgSrc="/images/garlic_bread.jpg"
                  productName="Roasted Garlic Bread"
                  description="A wonderful and crunchy bread with the addition of 3 heads of roasted garlic. Garlic is roasted using cold-pressed avocado oil for best quality."
                  price="$12.00"
                  weight="2.2lbs"

                />
                {/* 
                <MenuItem 
                  imgSrc="/images/sourdough_butterbread01.jpg" 
                  productName="Sourdough Bread with Sunflower Seeds" 
                  description="Golden, crispy french fries cooked to perfection."
                  price="$10.00"
                />
                */}

              </div>
              <br /><br />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                <InfoCard
                  imgSrc="/images/flour_card.png"
                  headline="Organic Flour"
                  paragraph="The Soul of Every Loaf - 
                  We source our organic flour from trusted farms that value sustainability and quality. By avoiding pesticides and chemical treatments, organic flour retains its natural nutrients and flavor, making it the perfect foundation for our sourdough. Each bite is a celebration of purity and care."
                  cta={{ href: "/ingredients-organic-flour", text: "Organic Flour" }}
                />
                <InfoCard
                  imgSrc="/images/salt.png"
                  headline="Celtic Salt"
                  paragraph="Where Flavor Meets Nutrition - Celtic salt is unrefined, mineral-rich, and sustainably harvested from pristine coastal waters. Unlike processed salts, it retains over 80 essential minerals that enhance the flavor and nutritional profile of our bread. Every sprinkle brings a natural complexity to the taste you won’t find in mass-produced bread."
                  cta={{ href: "/ingredients-celtic-salt", text: "Celtic Salt" }}
                />
                <InfoCard
                  imgSrc="/images/water_card.png"
                  headline="Filtered Water"
                  paragraph="Purity in Every Drop - 
                  Water is the lifeblood of sourdough, and we use only the purest filtered water in our dough. Free from impurities and chemicals, our water ensures that the fermentation process is clean and natural, producing a better-tasting and healthier loaf."
                  cta={{ href: "/ingredients-filtered-water", text: "Filtered Water" }}
                />
              </div>
              <br />
              <br />

            </div>




          </div>
        </main>
      </LayoutHome>
      <style jsx>{`
        .infocard-wrapper {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          grid-gap: 20px;
          width: 100%;
        }

        @media (max-width: 768px) {
          .infocard-wrapper {
            grid-template-columns: 1fr; /* Stack vertically on mobile */
          }
        }
      `}</style>
    </>
  );
}
