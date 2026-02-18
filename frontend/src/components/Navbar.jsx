import { useState } from "react";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";

function Navbar() {
    const [open, setOpen] = React.useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const { user, setUser, setShowUserLogin, navigate, cartItems } = useAppContext();

    const logout = async () => {
        setUser(null);
        navigate('/');
    };

    // Calculate total cart items (you'll need to implement this based on your cart structure)
    const cartCount = Object.values(cartItems || {}).reduce((total, quantity) => total + quantity, 0);

    return (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
            <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-12 py-3 max-w-7xl mx-auto">
                {/* Logo with hover effect */}
                <NavLink 
                    to="/" 
                    onClick={() => setOpen(false)}
                    className="transform hover:scale-105 transition-transform duration-200"
                >
                    <img 
                        className="h-8 sm:h-10 w-auto" 
                        src={assets.logo} 
                        alt="Logo" 
                    />
                </NavLink>

                {/* Desktop Navigation */}
                <div className="hidden sm:flex items-center gap-6 lg:gap-8">
                    {/* Navigation Links with underline animation */}
                    <div className="flex items-center gap-4 lg:gap-6">
                        <NavLink 
                            to='/' 
                            className={({ isActive }) => 
                                `relative py-2 text-gray-700 hover:text-indigo-600 transition-colors duration-200 font-medium
                                ${isActive ? 'text-indigo-600' : ''}
                                after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 
                                after:bg-indigo-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform 
                                after:duration-300 ${isActive ? 'after:scale-x-100' : ''}`
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink 
                            to='/products' 
                            className={({ isActive }) => 
                                `relative py-2 text-gray-700 hover:text-indigo-600 transition-colors duration-200 font-medium
                                ${isActive ? 'text-indigo-600' : ''}
                                after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 
                                after:bg-indigo-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform 
                                after:duration-300 ${isActive ? 'after:scale-x-100' : ''}`
                            }
                        >
                            Products
                        </NavLink>
                        <NavLink 
                            to='/about' 
                            className={({ isActive }) => 
                                `relative py-2 text-gray-700 hover:text-indigo-600 transition-colors duration-200 font-medium
                                ${isActive ? 'text-indigo-600' : ''}
                                after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 
                                after:bg-indigo-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform 
                                after:duration-300 ${isActive ? 'after:scale-x-100' : ''}`
                            }
                        >
                            Contact
                        </NavLink>
                    </div>

                    {/* Search Bar - Expanded version for desktop */}
                    <div className="hidden lg:flex items-center">
                        <div className="relative group">
                            <input 
                                className="w-64 py-2 pl-4 pr-10 text-sm border border-gray-200 rounded-full 
                                focus:outline-none focus:border-indigo-300 focus:ring-2 focus:ring-indigo-100 
                                transition-all duration-300 bg-gray-50 hover:bg-white"
                                type="text" 
                                placeholder="Search products..." 
                            />
                            <img 
                                src={assets.search_icon} 
                                alt='search' 
                                className="absolute right-3 top-2.5 w-4 h-4 opacity-50 group-hover:opacity-100 
                                transition-opacity duration-200"
                            />
                        </div>
                    </div>

                    {/* Compact search icon for medium screens */}
                    <button 
                        onClick={() => setSearchOpen(!searchOpen)}
                        className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                    >
                        <img src={assets.search_icon} alt='search' className="w-5 h-5" />
                    </button>

                    {/* Cart with animation */}
                    <div 
                        onClick={() => navigate('/cart')} 
                        className="relative cursor-pointer group"
                    >
                        <div className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200">
                            <img 
                                src={assets.nav_cart_icon} 
                                alt='cart' 
                                className="w-5 h-5 group-hover:scale-110 transition-transform duration-200"
                            />
                        </div>
                        {cartCount > 0 && (
                            <button className="absolute -top-1 -right-1 text-xs text-white bg-gradient-to-r 
                            from-indigo-500 to-purple-500 w-5 h-5 rounded-full flex items-center 
                            justify-center font-medium shadow-sm animate-pulse">
                                {cartCount}
                            </button>
                        )}
                    </div>

                    {/* User section with improved dropdown */}
                    {!user ? (
                        <button 
                            onClick={() => setShowUserLogin(true)} 
                            className="px-6 py-2.5 bg-gradient-to-r from-indigo-500 to-purple-600 
                            hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 
                            text-white rounded-full text-sm font-medium shadow-md hover:shadow-lg 
                            transform hover:-translate-y-0.5"
                        >
                            Sign In
                        </button>
                    ) : (
                        <div className="relative group">
                            <button className="flex items-center gap-2 p-1.5 rounded-full hover:bg-gray-100 
                            transition-colors duration-200">
                                <img 
                                    src={assets.profile_icon} 
                                    alt="Profile" 
                                    className="w-8 h-8 rounded-full border-2 border-transparent 
                                    group-hover:border-indigo-200 transition-all duration-200"
                                />
                                <span className="text-sm font-medium text-gray-700 hidden lg:block">
                                    {user.name || 'Account'}
                                </span>
                            </button>
                            
                            {/* Dropdown with animation */}
                            <div className="absolute right-0 top-12 w-48 bg-white rounded-lg shadow-xl 
                            border border-gray-100 py-2 opacity-0 invisible group-hover:opacity-100 
                            group-hover:visible transition-all duration-300 transform 
                            group-hover:translate-y-0 translate-y-2 z-50">
                                <div className="px-4 py-2 border-b border-gray-100">
                                    <p className="text-sm font-medium text-gray-900">{user.name || 'User'}</p>
                                    <p className="text-xs text-gray-500 truncate">{user.email}</p>
                                </div>
                                <NavLink 
                                    to="/my-orders" 
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 
                                    hover:text-indigo-600 transition-colors duration-200"
                                >
                                    My Orders
                                </NavLink>
                                <button 
                                    onClick={logout}
                                    className="block w-full text-left px-4 py-2 text-sm text-red-600 
                                    hover:bg-red-50 transition-colors duration-200"
                                >
                                    Sign Out
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Mobile menu button with animation */}
                <button 
                    onClick={() => setOpen(!open)} 
                    aria-label="Menu" 
                    className="sm:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                    <div className="relative w-6 h-5">
                        <span className={`absolute w-6 h-0.5 bg-gray-600 transform transition-all duration-300 
                        ${open ? 'rotate-45 top-2' : 'rotate-0 top-0'}`}></span>
                        <span className={`absolute w-6 h-0.5 bg-gray-600 top-2 transition-opacity duration-300 
                        ${open ? 'opacity-0' : 'opacity-100'}`}></span>
                        <span className={`absolute w-6 h-0.5 bg-gray-600 transform transition-all duration-300 
                        ${open ? '-rotate-45 top-2' : 'rotate-0 top-4'}`}></span>
                    </div>
                </button>

                {/* Mobile search toggle */}
                <button 
                    onClick={() => setSearchOpen(!searchOpen)}
                    className="sm:hidden p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                >
                    <img src={assets.search_icon} alt='search' className="w-5 h-5" />
                </button>
            </div>

            {/* Mobile search bar */}
            {searchOpen && (
                <div className="sm:hidden px-4 pb-3 animate-slideDown">
                    <div className="relative">
                        <input 
                            className="w-full py-2.5 pl-4 pr-10 text-sm border border-gray-200 rounded-full 
                            focus:outline-none focus:border-indigo-300 focus:ring-2 focus:ring-indigo-100 
                            transition-all duration-300 bg-gray-50"
                            type="text" 
                            placeholder="Search products..." 
                            autoFocus
                        />
                        <img 
                            src={assets.search_icon} 
                            alt='search' 
                            className="absolute right-3 top-3 w-4 h-4 opacity-50"
                        />
                    </div>
                </div>
            )}

            {/* Mobile Menu with slide-down animation */}
            {open && (
                <div className="sm:hidden bg-white border-t border-gray-100 shadow-lg animate-slideDown">
                    <div className="px-4 py-3 space-y-2">
                        <NavLink 
                            to='/' 
                            onClick={() => setOpen(false)}
                            className={({ isActive }) => 
                                `block px-4 py-2.5 rounded-lg transition-all duration-200
                                ${isActive 
                                    ? 'bg-indigo-50 text-indigo-600 font-medium' 
                                    : 'text-gray-700 hover:bg-gray-50'}`
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink 
                            to='/products' 
                            onClick={() => setOpen(false)}
                            className={({ isActive }) => 
                                `block px-4 py-2.5 rounded-lg transition-all duration-200
                                ${isActive 
                                    ? 'bg-indigo-50 text-indigo-600 font-medium' 
                                    : 'text-gray-700 hover:bg-gray-50'}`
                            }
                        >
                            Products
                        </NavLink>
                        <NavLink 
                            to='/about' 
                            onClick={() => setOpen(false)}
                            className={({ isActive }) => 
                                `block px-4 py-2.5 rounded-lg transition-all duration-200
                                ${isActive 
                                    ? 'bg-indigo-50 text-indigo-600 font-medium' 
                                    : 'text-gray-700 hover:bg-gray-50'}`
                            }
                        >
                            Contact
                        </NavLink>
                        
                        {user && (
                            <>
                                <NavLink 
                                    to='/my-orders' 
                                    onClick={() => setOpen(false)}
                                    className={({ isActive }) => 
                                        `block px-4 py-2.5 rounded-lg transition-all duration-200
                                        ${isActive 
                                            ? 'bg-indigo-50 text-indigo-600 font-medium' 
                                            : 'text-gray-700 hover:bg-gray-50'}`
                                    }
                                >
                                    My Orders
                                </NavLink>
                                <NavLink 
                                    to='/profile' 
                                    onClick={() => setOpen(false)}
                                    className={({ isActive }) => 
                                        `block px-4 py-2.5 rounded-lg transition-all duration-200
                                        ${isActive 
                                            ? 'bg-indigo-50 text-indigo-600 font-medium' 
                                            : 'text-gray-700 hover:bg-gray-50'}`
                                    }
                                >
                                    Profile
                                </NavLink>
                            </>
                        )}
                        
                        <div className="pt-2 border-t border-gray-100">
                            {!user ? (
                                <button 
                                    onClick={() => {
                                        setOpen(false);
                                        setShowUserLogin(true);
                                    }} 
                                    className="w-full px-4 py-2.5 bg-gradient-to-r from-indigo-500 to-purple-600 
                                    hover:from-indigo-600 hover:to-purple-700 text-white rounded-lg 
                                    text-sm font-medium transition-all duration-300 shadow-md"
                                >
                                    Sign In
                                </button>
                            ) : (
                                <button 
                                    onClick={logout} 
                                    className="w-full px-4 py-2.5 bg-red-500 hover:bg-red-600 
                                    text-white rounded-lg text-sm font-medium transition-all 
                                    duration-300 shadow-md"
                                >
                                    Sign Out
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* Add these styles to your global CSS or Tailwind config */}
            <style jsx>{`
                @keyframes slideDown {
                    from {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-slideDown {
                    animation: slideDown 0.3s ease-out;
                }
            `}</style>
        </nav>
    );
}

export default Navbar;