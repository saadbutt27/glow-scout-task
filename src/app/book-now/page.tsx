"use client"
import Button from '@/components/reusable/Button';
import Wrapper from '@/components/reusable/Wrapper'
import { Clock5, MapPin } from 'lucide-react'
import React, { useState } from 'react'

export default function page() {
    const [hours, setHours] = useState<string>(''); // State for hours input
    const [minutes, setMinutes] = useState<string>(''); // State for minutes input
    const [period, setPeriod] = useState<'AM' | 'PM'>('AM'); // State for AM/PM selection

    const handleHoursChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setHours(e.target.value);
    };

    const handleMinutesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMinutes(e.target.value);
    };

    const handlePeriodChange = (selectedPeriod: 'AM' | 'PM') => {
        setPeriod(selectedPeriod);
    };
  return (
    <main className=''>
        {/* Blurred Divs */}
        <div className="absolute top-36 -right-10 w-96 h-72 bg-trinary rounded-t-full blur-xl -z-10 -rotate-90"></div>
        <div className="absolute top-[35rem] -left-10  w-96 h-72 rounded-t-full bg-trinary blur-xl -z-10 rotate-90"></div>
        <Wrapper>
            <div className="bg-primary flex items-center justify-center">
                <div className="w-full mt-10 p-8 border-2 border-gray-300 rounded-lg shadow-lg">
                    <h2 className="text-4xl text-center font-semibold mb-8">Book Appointment</h2>
                    <div className="flex">
                        <div className="w-1/3 pr-8 border-r-2 border-gray-300">
                            <h3 className="text-xl font-semibold mb-4">Personal Details</h3>
                            <div className="relative z-0 group mb-4">
                                <label className="block text-gray-600"></label>
                                <input 
                                    type="text" 
                                    name="firstName" 
                                    id="firstName" 
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer" 
                                    placeholder="First Name" 
                                    required
                                />
                            </div>
                            <div className="relative z-0 group mb-4">
                                <label className="block text-gray-600"></label>
                                <input 
                                    type="text" 
                                    name="lastName" 
                                    id="lastName" 
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer" 
                                    placeholder="Last Name" 
                                    required
                                />
                            </div>
                            <div className="relative z-0 group mb-4">
                                <label className="block text-gray-600"></label>
                                <input 
                                    type="text" 
                                    name="address" 
                                    id="address" 
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
                                    id="tel" 
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer" 
                                    placeholder="Mobile/Telephone" 
                                    required
                                />
                            </div>
                            <div className="relative z-0 group mb-4">
                                <label className="block text-gray-600"></label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    id="email" 
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer" 
                                    placeholder="Email Address" 
                                    required
                                />
                            </div>
                            <div className="relative z-0 group mb-4">
                                <label className="block text-gray-600"></label>
                                <input 
                                    type="email" 
                                    name="alterEmail" 
                                    id="alterEmail" 
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer" 
                                    placeholder="Alternate Email Address" 
                                    required
                                />
                            </div>
                        </div>
                        <div className="w-2/3 pl-8">
                        <h3 className="text-xl font-semibold mb-4">Date & Timings</h3>
                        
                        <div className="flex items-center justify-between flex-wrap gap-5 mb-4">
                            <div className="flex items-center">
                                <input className="w-full border-2 border-gray-300 p-2 rounded-md focus:border-secondary focus:outline-none" type="date" />
                                <span className="mx-4">-</span>
                                <input className="w-full border-2 border-gray-300 p-2 rounded-md focus:border-secondary focus:outline-none" type="date" />
                            </div>
                            <div className="flex items-center space-x-2">
                                {/* Clock icon */}
                                <Clock5 strokeWidth={1} />

                                {/* Hours input */}
                                <input
                                    type="number"
                                    className="rounded-md border-2 border-gray-300 px-2 py-1 w-12 text-center focus:outline-none focus:border-secondary"
                                    placeholder="HH"
                                    value={hours}
                                    onChange={handleHoursChange}
                                />

                                {/* Colon */}
                                <span className="font-bold">:</span>

                                {/* Minutes input */}
                                <input
                                    type="number"
                                    className="rounded-md border-2 border-gray-300 px-2 py-1 w-12 text-center focus:outline-none focus:border-secondary"
                                    placeholder="MM"
                                    value={minutes}
                                    onChange={handleMinutesChange}
                                />

                                {/* AM/PM buttons */}
                                <div className="flex">
                                    <button
                                        className={`rounded-l-md px-2 py-1 focus:outline-none ${period === 'AM' ? 'bg-secondary text-primary' : 'bg-primary text-secondary border-2 border-secondary'}`}
                                        onClick={() => handlePeriodChange('AM')}
                                        >
                                        AM
                                    </button>
                                    <button
                                        className={`rounded-r-md px-2 py-1 focus:outline-none ${period === 'PM' ? 'bg-secondary text-primary' : 'bg-primary text-secondary border-2 border-secondary'}`}
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
                        ></textarea>
                        </div>
                    </div>
                    <div className="flex justify-end gap-x-2 mt-8">
                        <Button text="Cancel" />
                        <Button text="Submit" />
                    </div>
                    </div>
            </div>
        </Wrapper>
    </main>
  )
}
