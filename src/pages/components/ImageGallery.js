export default function ImageGallery({ images = [] }) {
  // Ensure images is always an array
  const safeImages = Array.isArray(images) ? images : [];

  return (
    <>
      <div className="gallery-container">
        <div className="gallery-grid">
          {safeImages.map((image, index) => (
            <a key={index} href={`#lightbox-${index}`} className="gallery-item">
              <img
                src={image.src || "/placeholder.png"} // Fallback image
                alt={image.alt || "Gallery Image"} // Fallback alt text
                className="gallery-thumbnail"
              />
            </a>
          ))}
        </div>

        {safeImages.map((image, index) => (
          <div key={index} id={`lightbox-${index}`} className="lightbox">
            <a href="#" className="lightbox-close">
              &times;
            </a>
            <img
              src={image.src || "/placeholder.png"} // Fallback image
              alt={image.alt || "Lightbox Image"} // Fallback alt text
              className="lightbox-image"
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        .gallery-container {
          width: 100%;
          padding: 20px;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
          gap: 10px;
        }

        .gallery-item {
          display: block;
          cursor: pointer;
        }

        .gallery-thumbnail {
          width: 100%;
          height: auto;
          border-radius: 8px;
          transition: transform 0.2s ease-in-out;
        }

        .gallery-thumbnail:hover {
          transform: scale(1.05);
        }

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
          max-width: 90%;
          max-height: 90%;
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
