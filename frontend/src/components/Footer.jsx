import { assets, footerLinks } from "../assets/assets";
import { useState } from "react";

const Footer = () => {
    const [email, setEmail] = useState("");
    
    const handleNewsletterSubmit = (e) => {
        e.preventDefault();
        // Handle newsletter subscription
        console.log("Newsletter subscribed:", email);
        setEmail("");
    };

    const socialIcons = {
        "Instagram": "📷",
        "Twitter": "🐦",
        "Facebook": "📘",
        "YouTube": "▶️"
    };

    return (
        <footer className="relative mt-24 bg-gradient-to-b from-gray-50 to-white">
            {/* Top Border with Gradient */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
            
            {/* Decorative Background Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute top-20 left-10 w-40 h-40 bg-indigo-200 rounded-full filter blur-3xl" />
                <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-200 rounded-full filter blur-3xl" />
            </div>

            <div className="relative px-6 md:px-16 lg:px-24 xl:px-32 pt-16 pb-8">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 pb-12 border-b border-gray-200">
                    
                    {/* Brand Section - Left Column */}
                    <div className="lg:col-span-4 space-y-6">
                        <img 
                            className="w-36 md:w-40" 
                            src={assets.logo} 
                            alt="logo" 
                        />
                        
                        <p className="text-gray-600 leading-relaxed max-w-md">
                            A modern eCommerce platform offering a seamless shopping experience with fast, secure, and reliable home delivery right to your doorstep.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3 pt-4">
                            <div className="flex items-center gap-3 text-gray-600">
                                <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span>+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-600">
                                <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span>support@shopzone.com</span>
                            </div>
                        </div>

                        {/* Social Media Icons */}
                        <div className="flex gap-3 pt-4">
                            {footerLinks[2]?.links.map((link, i) => (
                                <a
                                    key={i}
                                    href={link.url}
                                    className="group relative w-10 h-10 bg-gray-100 hover:bg-indigo-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                                    aria-label={link.text}
                                >
                                    <span className="text-lg group-hover:text-white transition-colors">
                                        {socialIcons[link.text]}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Section - Right Column */}
                    <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
                        {footerLinks.slice(0, 2).map((section, index) => (
                            <div key={index} className="space-y-4">
                                <h3 className="font-bold text-lg text-gray-900 relative inline-block">
                                    {section.title}
                                    <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-indigo-500 rounded-full" />
                                </h3>
                                <ul className="space-y-3">
                                    {section.links.map((link, i) => (
                                        <li key={i}>
                                            <a 
                                                href={link.url} 
                                                className="text-gray-600 hover:text-indigo-600 transition-all duration-300 flex items-center gap-2 group"
                                            >
                                                <span className="w-1 h-1 bg-gray-400 rounded-full group-hover:bg-indigo-600 group-hover:w-2 transition-all" />
                                                {link.text}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                        {/* Newsletter Section */}
                        <div className="space-y-4 md:col-span-1">
                            <h3 className="font-bold text-lg text-gray-900 relative inline-block">
                                Newsletter
                                <span className="absolute -bottom-2 left-0 w-10 h-0.5 bg-indigo-500 rounded-full" />
                            </h3>
                            <p className="text-sm text-gray-600">
                                Subscribe for exclusive offers and updates!
                            </p>
                            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Your email"
                                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="w-full px-4 py-3 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white font-medium rounded-lg hover:from-indigo-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg"
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar with Copyright */}
                <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-600 text-sm order-2 md:order-1">
                        Copyright © {new Date().getFullYear()} ShopZone. All rights reserved.
                    </p>
                    
                    {/* Payment Methods */}
                    <div className="flex items-center gap-4 order-1 md:order-2">
                        <span className="text-sm text-gray-500">We accept:</span>
                        <div className="flex gap-2">
                            <div className="w-10 h-6 bg-gray-200 rounded flex items-center justify-center text-xs font-bold text-gray-600">VISA</div>
                            <div className="w-10 h-6 bg-gray-200 rounded flex items-center justify-center text-xs font-bold text-gray-600">MC</div>
                            <div className="w-10 h-6 bg-gray-200 rounded flex items-center justify-center text-xs font-bold text-gray-600">PP</div>
                            <div className="w-10 h-6 bg-gray-200 rounded flex items-center justify-center text-xs font-bold text-gray-600">AMEX</div>
                        </div>
                    </div>

                    {/* Legal Links */}
                    <div className="flex gap-6 text-sm order-3">
                        <a href="/privacy" className="text-gray-500 hover:text-indigo-600 transition-colors">Privacy</a>
                        <a href="/terms" className="text-gray-500 hover:text-indigo-600 transition-colors">Terms</a>
                        <a href="/sitemap" className="text-gray-500 hover:text-indigo-600 transition-colors">Sitemap</a>
                    </div>
                </div>

                {/* Additional Info */}
                <div className="mt-8 pt-8 border-t border-gray-200 text-center">
                    <p className="text-xs text-gray-500">
                        🚚 Free shipping on orders over $50 | 💳 Secure payments | 🎁 Gift cards available
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;