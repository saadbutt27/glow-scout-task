"use client"
import React, { useState } from 'react'
import Button from '@/components/reusable/Button';
import { Clock5, MapPin } from 'lucide-react'

interface FormData {
    firstName: string;
    lastName: string;
    address: string;
    tel: string;
    email: string;
    alterEmail: string;
    startDate: string;
    endDate: string;
    hours: number;
    minutes: number;
    period: 'AM' | 'PM';
    comment: string;
}

export default function Form() {
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        address: '',
        tel: '',
        email: '',
        alterEmail: '',
        startDate: '',
        endDate: '',
        hours: 0,
        minutes: 0,
        period: 'AM',
        comment: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handlePeriodChange = (selectedPeriod: 'AM' | 'PM') => {
        setFormData({ ...formData, period: selectedPeriod });
      };
    
      const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData); // Replace with your data handling logic
        // Example: Send formData to backend, etc.
      };
  return (
    <form onSubmit={handleSubmit}>
        <div className="flex">
            <div className="w-1/3 pr-8 border-r-2 border-gray-300">
                <h3 className="text-xl font-semibold mb-4">Personal Details</h3>
                <div className="relative z-0 group mb-4">
                    <label className="block text-gray-600"></label>
                    <input 
                        type="text" 
                        name="firstName" 
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="block py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer" 
                        placeholder="First Name" 
                        required
                    />
                </div>
                <div className="relative z-0 group mb-4">
                    <label className="block text-gray-600"></label>
                    <input 
                        type="text" 
                        name="lastName" 
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="block py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer" 
                        placeholder="Last Name" 
                        required
                    />
                </div>
                <div className="relative z-0 group mb-4">
                    <label className="block text-gray-600"></label>
                    <input 
                        type="text" 
                        name="address" 
                        value={formData.address}
                        onChange={handleInputChange}
                        className="block py-2.5 pl-2 pr-10 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer" 
                        placeholder="Enter Address" 
                        required
                    />
                    <MapPin 
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-400"
                        strokeWidth={1}
                    />
                </div>

                <h3 className="text-xl font-semibold mb-4 mt-8">Contact details</h3>
                <div className="relative z-0 group mb-4">
                    <label className="block text-gray-600"></label>
                    <input 
                        type="tel" 
                        name="tel" 
                        value={formData.tel}
                        onChange={handleInputChange}
                        className="block py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer" 
                        placeholder="Mobile/Telephone" 
                        required
                    />
                </div>
                <div className="relative z-0 group mb-4">
                    <label className="block text-gray-600"></label>
                    <input 
                        type="email" 
                        name="email" 
                        value={formData.email}
                        onChange={handleInputChange}
                        className="block py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer" 
                        placeholder="Email Address" 
                        required
                    />
                </div>
                <div className="relative z-0 group mb-4">
                    <label className="block text-gray-600"></label>
                    <input 
                        type="email" 
                        name="alterEmail" 
                        value={formData.alterEmail}
                        onChange={handleInputChange}
                        className="block py-2.5 px-2 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer" 
                        placeholder="Alternate Email Address" 
                        required
                    />
                </div>
            </div>
            <div className="w-2/3 pl-8">
            <h3 className="text-xl font-semibold mb-4">Date & Timings</h3>
            
            <div className="flex items-center flex-wrap gap-x-10 gap-y-5 mb-4">
                <div className="flex items-center">
                    <input 
                        className="w-full border-2 border-gray-300 p-2 rounded-md focus:border-secondary focus:outline-none" 
                        type="date"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleInputChange}
                     />
                    <span className="mx-4">-</span>
                    <input 
                        className="w-full border-2 border-gray-300 p-2 rounded-md focus:border-secondary focus:outline-none" 
                        type="date"
                        name="endDate"
                        value={formData.endDate}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="flex items-center gap-x-2">
                    {/* Clock icon */}
                    <Clock5 strokeWidth={1} />

                    {/* Hours input */}
                    <input
                        type="number"
                        name="hours"
                        className="rounded-md border-2 border-gray-300 px-2 py-1 w-12 text-center focus:outline-none focus:border-secondary"
                        placeholder="HH"
                        value={formData.hours}
                        onChange={handleInputChange}
                    />

                    {/* Colon */}
                    <span className="font-bold">:</span>

                    {/* Minutes input */}
                    <input
                        type="number"
                        name="minutes"
                        className="rounded-md border-2 border-gray-300 px-2 py-1 w-12 text-center focus:outline-none focus:border-secondary"
                        placeholder="MM"
                        value={formData.minutes}
                        onChange={handleInputChange}
                    />

                    {/* AM/PM buttons */}
                    <div className="flex">
                        <button
                            type="button"
                            className={`rounded-l-md px-2 py-1 focus:outline-none ${formData.period === 'AM' ? 'bg-secondary text-primary' : 'bg-primary text-secondary border-2 border-secondary'}`}
                            onClick={() => handlePeriodChange('AM')}
                        >
                            AM
                        </button>
                        <button
                            type="button"
                            className={`rounded-r-md px-2 py-1 focus:outline-none ${formData.period === 'PM' ? 'bg-secondary text-primary' : 'bg-primary text-secondary border-2 border-secondary'}`}
                            onClick={() => handlePeriodChange('PM')}
                        >
                            PM
                        </button>
                    </div>
                </div>
            </div>
            <hr className="border-t-[1px] border-solid border-t-secondary mb-4" />
            <h3 className="text-xl font-semibold mb-4">Comment</h3>
            <textarea className="w-full h-64 border-2 border-primary rounded-md p-4 focus:border-secondary focus:outline-none" 
                placeholder="Write any instruction here."
                name="comment"
                value={formData.comment}
                onChange={handleInputChange}
            ></textarea>
            </div>
        </div>
        <div className="flex justify-end gap-x-2 mt-8">
            <Button text="Cancel" />
            <Button text="Submit" type="submit" />
        </div>
    </form>
  )
}
