import { useState } from "react"
import { assets } from "../assets/assets"

const InputField = ({type, placeholder, name, handleChange, address, icon}) => (
    <div className="relative">
        {icon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                {icon}
            </div>
        )}
        <input 
            type={type} 
            placeholder={placeholder} 
            name={name} 
            onChange={handleChange} 
            value={address[name]} 
            required 
            className={`w-full px-2 ${icon ? 'pl-10' : 'pl-4'} py-3 border border-gray-200 rounded-xl outline-none text-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all duration-200 bg-gray-50 hover:bg-white`} 
        />
    </div>
)

function Address() {
    const [address, setAddress] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        street: "",
        city: "",
        state: "",
/*************  ✨ Windsurf Command ⭐  *************/
/**
 * Prevents the default form submission behavior and refreshes the page.
 * @param {Event} e - The event object passed from the form's onSubmit event.
 */
/*******  0629c0ae-8376-4b78-8072-d981470dc717  *******/        zipcode: "",
        country: "",
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setAddress(prevAddress => ({
            ...prevAddress,
            [name]: value
        }))
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        // Handle form submission here
        console.log("Address submitted:", address)
    }

    // Icons for input fields
    const UserIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
    )

    const EmailIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
        </svg>
    )

    const PhoneIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
        </svg>
    )

    const LocationIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
        </svg>
    )

    const HomeIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
    )

    const ZipIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
        </svg>
    )

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50/30 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <div className="text-center md:text-left mb-10">
                    <p className="text-3xl md:text-4xl font-light text-gray-700">
                        Add Shipping <span className="font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Address</span>
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-2 mx-auto md:mx-0"></div>
                </div>
                
                <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-12 lg:gap-16">
                    {/* Form Section */}
                    <div className="flex-1 w-full max-w-xl">
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
                            <form onSubmit={onSubmitHandler} className="space-y-4">
                                {/* Name Fields */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <InputField 
                                        handleChange={handleChange} 
                                        address={address} 
                                        type="text" 
                                        placeholder="First Name" 
                                        name="firstName" 
                                        icon={<UserIcon />}
                                    />
                                    <InputField 
                                        handleChange={handleChange} 
                                        address={address} 
                                        type="text" 
                                        placeholder="Last Name" 
                                        name="lastName" 
                                        icon={<UserIcon />}
                                    />
                                </div>

                                {/* Email */}
                                <InputField 
                                    handleChange={handleChange} 
                                    address={address} 
                                    type="email" 
                                    placeholder="Email Address" 
                                    name="email" 
                                    icon={<EmailIcon />}
                                />

                                {/* Street Address */}
                                <InputField 
                                    handleChange={handleChange} 
                                    address={address} 
                                    type="text" 
                                    placeholder="Street Address" 
                                    name="street" 
                                    icon={<HomeIcon />}
                                />

                                {/* City and State */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <InputField 
                                        handleChange={handleChange} 
                                        address={address} 
                                        type="text" 
                                        placeholder="City" 
                                        name="city" 
                                        icon={<LocationIcon />}
                                    />
                                    <InputField 
                                        handleChange={handleChange} 
                                        address={address} 
                                        type="text" 
                                        placeholder="State/Province" 
                                        name="state" 
                                        icon={<LocationIcon />}
                                    />
                                </div>

                                {/* Zipcode and Country */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <InputField 
                                        handleChange={handleChange} 
                                        address={address} 
                                        type="text" 
                                        placeholder="ZIP / Postal Code" 
                                        name="zipcode" 
                                        icon={<ZipIcon />}
                                    />
                                    <InputField 
                                        handleChange={handleChange} 
                                        address={address} 
                                        type="text" 
                                        placeholder="Country" 
                                        name="country" 
                                        icon={<LocationIcon />}
                                    />
                                </div>

                                {/* Phone Number */}
                                <InputField 
                                    handleChange={handleChange} 
                                    address={address} 
                                    type="tel" 
                                    placeholder="Phone Number" 
                                    name="phone" 
                                    icon={<PhoneIcon />}
                                />

                                {/* Submit Button */}
                                <button 
                                    type="submit"
                                    className="w-full mt-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3.5 px-6 rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 cursor-pointer uppercase font-semibold tracking-wide shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                                >
                                    Add Address
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="flex-1 flex justify-center md:justify-end">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                            <img 
                                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain animate-float" 
                                src={assets.add_address_iamge} 
                                alt="Add Address Illustration" 
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Add custom animation */}
            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
            `}</style>
        </div>
    )
}

export default Address