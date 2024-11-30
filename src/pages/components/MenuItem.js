export default function MenuItem({ imgSrc, productName, description }) {
    const safeImgSrc = imgSrc || "/placeholder.png"; // Fallback image
    const safeProductName = productName || "Default Product";
    const safeDescription = description || "Default product description.";
  
    return (
      <div className="menu-item flex items-center border-b border-gray-200 py-4">
        {/* Left Section: Product Name and Description */}
        <div className="flex-grow">
          <h2 className="text-lg font-semibold text-gray-900">
            {safeProductName}
          </h2>
          <p className="text-sm text-gray-700">{safeDescription}</p>
        </div>
  
        {/* Right Section: Product Image */}
        <div className="ml-4">
          <img
            src={safeImgSrc}
            alt={safeProductName}
            className="w-24 h-24 object-cover rounded-md"
          />
        </div>
      </div>
    );
  }
  