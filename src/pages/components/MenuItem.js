export default function MenuItem({ price, imgSrc, productName, description }) {
    const safeImgSrc = imgSrc || "/placeholder.png"; // Fallback image
    const safeProductName = productName || "Default Product";
    const safeDescription = description || "Default product description.";
    const safePrice = price || "$10.00";
  
    return (
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
            flexBasis: "60%", // Fix the text column to 60%
            maxWidth: "60%", // Prevent it from exceeding 60%
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
          <img
            src={safeImgSrc}
            alt={safeProductName}
            className="object-cover rounded-md"
            style={{
              width: "97.2%", // 72px (original width) + 35%
              height: "25.8%", // 48px (original height) + 10%
            }}
          />
        </div>
      </div>
    );
  }
  