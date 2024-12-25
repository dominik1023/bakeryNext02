import Image from "next/image";

export default function MenuItem({
  price,
  imgSrc,
  productName,
  description,
  id, // Add a unique id for each menu item
}) {
  const safeImgSrc = imgSrc || "/placeholder.png"; // Fallback image
  const safeProductName = productName || "Default Product";
  const safeDescription = description || "Default product description.";
  const safePrice = price || "$10.00";

  return (
    <>
      <div
        className="menu-item flex flex-col sm:flex-row items-start sm:items-center border-b border-gray-200 py-4"
        style={{
          borderBottom: "1px dotted #999",
        }}
      >
        {/* Fixed-width text column */}
        <div
          className="text-column"
          style={{
            flexBasis: "60%",
            maxWidth: "60%",
          }}
        >
          <h2
            className="text-lg font-semibold text-gray-900"
            style={{
              fontSize: "1.75rem",
            }}
          >
            {safePrice} {safeProductName}
          </h2>
          <p className="text-sm text-gray-700">{safeDescription}</p>
        </div>

        {/* Image section */}
        <div className="mt-4 sm:mt-0 sm:ml-4">
          <a href={`#lightbox-${id}`} className="menu-item-image-link">
            <Image
              src={safeImgSrc}
              alt={safeProductName}
              width={450}
              height={300}
              className="rounded-md"
              style={{
                width: "28rem",
              }}
            />
          </a>
        </div>
      </div>

      {/* Lightbox */}
      <div id={`lightbox-${id}`} className="lightbox">
        <a href="#" className="lightbox-close">
          &times;
        </a>
        <Image
          src={safeImgSrc}
          alt={safeProductName}
          width={1920}
          height={1080}
          className="lightbox-image"
          style={{ maxWidth: "90%", maxHeight: "90%" }}
        />
      </div>

      <style jsx>{`
        .menu-item {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
        }

        .menu-item :global(img) {
          cursor: pointer;
          transition: transform 0.2s ease-in-out;
        }

        .menu-item :global(img:hover) {
          transform: scale(1.05);
        }

        /* Lightbox Styles */
        .lightbox {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.3s ease, visibility 0.3s ease;
        }

        .lightbox:target {
          opacity: 1;
          visibility: visible;
        }

        .lightbox-image {
          border-radius: 8px;
        }

        .lightbox-close {
          position: absolute;
          top: 20px;
          right: 20px;
          font-size: 2rem;
          color: white;
          text-decoration: none;
          cursor: pointer;
        }

        .lightbox-close:hover {
          color: #ffdddd;
        }
      `}</style>
    </>
  );
}
