import { useState } from "react"
import { assets } from "../assets/assets"

   const InputField = ({type, placeholder, name, handleChange, address}) => (
        <input type = {type} placeholder={placeholder} name={name} onChange={handleChange} value={address[name]} required 
        className="w-full px-2 py-2.5 border border-gray-500/30 rounded outline-none text-gray-600 focus:border-indigo-600 transition" />
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
        zipcode: "",
        country: "",
    })

    const handleChange = (e) => {
        const {name, value} = e.target

        setAddress(prevAddress => ({
            ...prevAddress,
            [name]: value
        })
        )
    }
        const onSubmitHandler = async (e) => {
            e.preventDefault()
        }

    return (
        <div className="mt-16 pb-16">
            <p className="text-2xl md:text-3xl text-gray-500">Add Shipping <span className="font-semibold text-indigo-600">Address</span></p>
            <div className="flex flex-col-reverse md:flex-row justify-between mt-10">
                <div className="flex-1 max-w-md">
                    <form onSubmit={onSubmitHandler} className="space-y-3 mt-6 text-sm">
                        <div className="">
                            <InputField handleChange={handleChange} address={address} 
                            type="text" placeholder="First Name" name="firstName" />
                              <InputField handleChange={handleChange} address={address} 
                            type="text" placeholder="Last Name" name="lastName" />
                        </div>
                    </form>
                </div>
                <img className="md:mr-16 mb-16 md:mt-0" src={assets.add_address_iamge} alt="Add Address" />
            </div>
        </div>
    )
}

export default Address