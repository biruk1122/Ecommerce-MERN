import { assets, features } from "../assets/assets";

function BottomBanner() {
  return (
    <section className="relative mt-24 overflow-hidden">

      {/* Background Image */}
      <img
        src={assets.bottom_banner_image}
        alt="Bottom Banner"
        className="w-full hidden md:block object-cover"
      />
      <img
        src={assets.bottom_banner_image_sm}
        alt="Bottom Banner"
        className="w-full md:hidden object-cover"
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent md:to-black/20"></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center md:justify-end px-6 md:px-16 lg:px-24">
        
        {/* Glass Card */}
        <div className="backdrop-blur-md bg-white/10 border border-white/20 
                        rounded-2xl p-8 md:p-10 max-w-xl text-white shadow-2xl">

          <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-8">
            Why We Are the Best Choice
            <span className="block text-indigo-400">
              for Your Shopping Needs?
            </span>
          </h1>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 group"
              >
                {/* Icon Circle */}
                <div className="flex items-center justify-center 
                                w-12 h-12 rounded-full 
                                bg-indigo-500/20 border border-indigo-400/40
                                group-hover:bg-indigo-500 transition duration-300">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-6 h-6 group-hover:scale-110 transition"
                  />
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-lg md:text-xl font-semibold">
                    {feature.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-200/80 mt-1">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button className="mt-8 w-full md:w-auto px-6 py-3 rounded-full 
                             bg-gradient-to-r from-indigo-500 to-purple-600
                             hover:from-indigo-600 hover:to-purple-700
                             transition-all duration-300 font-medium shadow-lg">
            Start Shopping
          </button>

        </div>
      </div>
    </section>
  );
}

export default BottomBanner;