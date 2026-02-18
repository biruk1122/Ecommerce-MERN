import React from "react";
import { useAppContext } from "../context/AppContext";
import { assets } from "../assets/assets";

const ProductCard = ({ product }) => {
  const [count, setCount] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);
  const [imageLoaded, setImageLoaded] = React.useState(false);
  const { currency, addToCart, removeFromCart, cartItems, navigate } = useAppContext();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product._id);
  };

  const handleRemoveFromCart = (e) => {
    e.stopPropagation();
    removeFromCart(product._id);
  };

  const handleIncrement = (e) => {
    e.stopPropagation();
    addToCart(product._id);
  };

  const handleCardClick = () => {
    navigate(`/product/${product._id}`);
  };

  const discountPercentage = product.price && product.offerPrice 
    ? Math.round(((product.price - product.offerPrice) / product.price) * 100)
    : 0;

  return product && (
    <div 
      onClick={handleCardClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer border border-gray-100 hover:border-indigo-200"
    >
      {/* Discount Badge */}
      {discountPercentage > 0 && (
        <div className="absolute top-3 left-3 z-10 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold px-2.5 py-1.5 rounded-full shadow-lg">
          {discountPercentage}% OFF
        </div>
      )}

      {/* Image Container */}
      <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-6 flex items-center justify-center h-48 md:h-56 overflow-hidden">
        {/* Loading Skeleton */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        )}
        
        <img 
          className={`w-28 md:w-36 h-auto object-contain transition-all duration-500 transform ${
            isHovered ? 'scale-110 rotate-2' : 'scale-100'
          } ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          src={product.image[0]} 
          alt={product.name}
          onLoad={() => setImageLoaded(true)}
          loading="lazy"
        />
        
        {/* Quick View Overlay */}
        <div className={`absolute inset-0 bg-indigo-600/10 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}>
          <span className="bg-white text-indigo-600 px-4 py-2 rounded-full text-sm font-medium shadow-lg transform hover:scale-105 transition">
            Quick View
          </span>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-4 md:p-5">
        {/* Category */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full">
            {product.category}
          </span>
        </div>

        {/* Product Name */}
        <h3 className="text-gray-800 font-semibold text-lg mb-2 line-clamp-2 min-h-[3.5rem] hover:text-indigo-600 transition-colors">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-0.5">
            {Array(5).fill('').map((_, i) => (
              <img 
                key={i} 
                className="w-3.5 h-3.5" 
                src={i < 4 ? assets.star_icon : assets.star_dull_icon} 
                alt="Rating Icon"
              />
            ))}
          </div>
          <span className="text-xs text-gray-500 font-medium">(4.0)</span>
        </div>

        {/* Price and Cart Section */}
        <div className="flex items-end justify-between mt-3 pt-3 border-t border-gray-100">
          <div className="flex flex-col">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-indigo-600">
                {currency}{product.offerPrice || product.price}
              </span>
              {product.offerPrice && (
                <span className="text-sm text-gray-400 line-through">
                  {currency}{product.price}
                </span>
              )}
            </div>
          </div>

          <div onClick={(e) => e.stopPropagation()}>
            {!cartItems[product._id] ? (
              <button 
                onClick={handleAddToCart}
                className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2.5 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
              >
                <img src={assets.cart_icon} alt="cart icon" className="w-4 h-4 filter brightness-0 invert" />
                <span>Add</span>
              </button>
            ) : (
              <div className="flex items-center gap-1 bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-lg p-1 border border-indigo-200">
                <button 
                  onClick={handleRemoveFromCart}
                  className="w-8 h-8 flex items-center justify-center bg-white rounded-lg text-indigo-600 hover:bg-indigo-600 hover:text-white font-bold text-lg transition-all duration-200 shadow-sm"
                >
                  −
                </button>
                <span className="w-8 text-center font-bold text-indigo-700">
                  {cartItems[product._id]}
                </span>
                <button 
                  onClick={handleIncrement}
                  className="w-8 h-8 flex items-center justify-center bg-white rounded-lg text-indigo-600 hover:bg-indigo-600 hover:text-white font-bold text-lg transition-all duration-200 shadow-sm"
                >
                  +
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Stock Status */}
        {product.stock && product.stock < 10 && (
          <div className="mt-2 text-xs text-orange-600 font-medium">
            Only {product.stock} left in stock!
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;