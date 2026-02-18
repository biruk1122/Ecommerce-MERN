import { assets, features } from "../assets/assets";

function BottomBanner() {
  return (
    <section className="relative mt-24">

      {/* Background Images */}
      <img
        src={assets.bottom_banner_image}
        alt="Bottom Banner"
        className="hidden md:block w-full object-cover"
      />
      <img
        src={assets.bottom_banner_image_sm}
        alt="Bottom Banner"
        className="md:hidden w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20"></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center md:justify-end px-6 md:px-16">

        <div
          className="max-w-md w-full
                     backdrop-blur-md bg-white/10
                     border border-white/20
                     rounded-xl
                     p-6 md:p-8
                     text-white shadow-xl"
        >
          <h1 className="text-xl md:text-2xl font-bold leading-snug mb-5">
            Why We Are the Best Choice
            <span className="block text-indigo-400 mt-1">
              for Your Shopping Needs?
            </span>
          </h1>

          <div className="space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                
                {/* Smaller Icon */}
                <div className="flex items-center justify-center 
                                w-9 h-9 rounded-full 
                                bg-indigo-500/20 border border-indigo-400/40">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-4 h-4"
                  />
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-sm md:text-base font-semibold">
                    {feature.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-200/80">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Small CTA */}
          <button
            className="mt-6 w-full md:w-auto px-5 py-2.5 rounded-full
                       bg-gradient-to-r from-indigo-500 to-purple-600
                       hover:from-indigo-600 hover:to-purple-700
                       transition-all duration-300 text-sm font-medium shadow-md"
          >
            Start Shopping
          </button>
        </div>

      </div>
    </section>
  );
}

export default BottomBanner;