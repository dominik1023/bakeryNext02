export default function MenuItem({ imgSrc, productName, description }) {
    const safeImgSrc = imgSrc || "/placeholder.png"; // Fallback image
    const safeProductName = productName || "Default Product";
    const safeDescription = description || "Default product description.";
  
    return (
      <div className="menu-item flex flex-col sm:flex-row items-start sm:items-center border-b border-gray-200 py-4">
        {/* Left Section: Product Name and Description */}
        <div className="flex-grow">
          <h2 className="text-lg font-semibold text-gray-900">
            {safeProductName}
          </h2>
          <p className="text-sm text-gray-700">{safeDescription}</p>
        </div>
  
        {/* Right Section: Product Image */}
        <div className="mt-4 sm:mt-0 sm:ml-4">
          <img
            src={safeImgSrc}
            alt={safeProductName}
            className="w-72 h-48 object-cover rounded-md" // Adjusted size
          />
        </div>
      </div>
    );
  }
  