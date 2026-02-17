import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { useState, useEffect } from "react";

function MainBanner() {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    // Optional: Auto-rotate text or background (you can remove if not needed)
    const taglines = [
        "Freshness you can Trust, Savings You Will Love!",
        "Farm-Fresh Delivered to Your Doorstep",
        "Quality Produce at Affordable Prices",
        "Your Daily Grocery Partner"
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % taglines.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-green-50">
            {/* Decorative background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute top-20 left-20 w-20 h-20 bg-primary/5 rounded-full blur-xl"></div>
                <div className="absolute bottom-20 right-20 w-32 h-32 bg-primary/5 rounded-full blur-xl"></div>
            </div>

            {/* Main banner images with overlay */}
            <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent z-10"></div>
                <img 
                    src={assets.main_banner_bg} 
                    alt="Fresh groceries" 
                    className="w-full hidden md:block h-[600px] object-cover object-center"
                />
                <img 
                    src={assets.main_banner_bg_sm} 
                    alt="Fresh groceries" 
                    className="w-full md:hidden h-[500px] object-cover object-center"
                />
            </div>

            {/* Content overlay with enhanced styling */}
            <div className="absolute inset-0 z-20 flex flex-col items-center md:items-start justify-center px-4 md:px-12 lg:px-24">
                {/* Floating badge */}
                <div className="mb-4 md:mb-6 animate-bounce-slow">
                    <span className="inline-block px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-primary shadow-lg">
                        ⚡ Free Delivery on Orders $50+
                    </span>
                </div>

                {/* Animated headline */}
                <div className="space-y-2">
                    <h2 className="text-primary font-semibold text-lg md:text-xl tracking-wide animate-fadeIn">
                        Welcome to FreshMart
                    </h2>
                    
                    <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white max-w-2xl leading-tight">
                        <span className="block">Freshness you</span>
                        <span className="block bg-gradient-to-r from-primary to-primary-dull bg-clip-text text-transparent">
                            can Trust,
                        </span>
                        <span className="block text-3xl md:text-4xl lg:text-5xl mt-2">
                            Savings You Will Love!
                        </span>
                    </h1>

                    {/* Animated tagline (optional) */}
                    <p className="text-white/90 text-base md:text-lg max-w-lg mt-4 animate-slideUp">
                        {taglines[currentSlide]}
                    </p>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-4 md:gap-6 mt-6 md:mt-8">
                    <div className="flex items-center gap-2 text-white">
                        <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">100% Fresh</span>
                    </div>
                    <div className="flex items-center gap-2 text-white">
                        <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">Free Delivery</span>
                    </div>
                    <div className="flex items-center gap-2 text-white">
                        <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">Best Prices</span>
                    </div>
                </div>

                {/* CTA Buttons with enhanced styling */}
                <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 md:mt-10">
                    <Link 
                        to={'/products'} 
                        className="group relative overflow-hidden bg-gradient-to-r from-primary to-primary-dull 
                        hover:from-primary-dull hover:to-primary text-white px-8 md:px-10 py-3.5 rounded-full 
                        font-semibold text-base md:text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 
                        transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center"
                    >
                        <span className="relative z-10">Shop Now</span>
                        <svg 
                            className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                        <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full 
                        group-hover:translate-x-full transition-transform duration-700"></div>
                    </Link>

                    <Link 
                        to={'/products'} 
                        className="group flex items-center gap-2 px-8 md:px-10 py-3.5 rounded-full 
                        bg-white/90 backdrop-blur-sm hover:bg-white text-gray-800 font-semibold 
                        text-base md:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 
                        transition-all duration-300 w-full sm:w-auto justify-center"
                    >
                        <span>Explore Deals</span>
                        <svg 
                            className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </div>

            {/* Floating shape decorations */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/10 to-transparent z-15"></div>
            
            {/* Animated floating elements */}
            <div className="absolute bottom-10 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float"></div>
            <div className="absolute top-10 right-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-float-delay"></div>
        </div>
    );
}

export default MainBanner;