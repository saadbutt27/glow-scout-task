import Button from '@/components/reusable/Button';
import StarRatings from '@/components/reusable/StarRatings';
import React from 'react'
import ReviewForm from './ReviewForm';
import Link from 'next/link';

// a client interface
interface Client {
    name: string;
    feedback: string;
    rating: number;
}

// This component will list the revies by our clients for this spa
export default function SpaReviews() {
    // static data for revies of clients
    const clients_data:Client[] = [
        {   
            name: "Ashley K.",
            feedback: "It’s a long established fact that glowscout is doing such a great job. It’s a long established fact that glowscout is doing such a great job.",
            rating: 4,
        },
        {   
            name: "Client 2",
            feedback: "It’s a long established fact that glowscout is doing such a great job. It’s a long established fact that glowscout is doing such a great job.",
            rating: 4,
        },
        {   
            name: "Client 3",
            feedback: "It’s a long established fact that glowscout is doing such a great job. It’s a long established fact that glowscout is doing such a great job.",
            rating: 4,
        },
        {   
            name: "Client 4",
            feedback: "It’s a long established fact that glowscout is doing such a great job. It’s a long established fact that glowscout is doing such a great job.",
            rating: 4,
        }
    ];
  return (
    <section className="flex flex-col items-center gap-y-12 mt-10 mb-20">
        {/* <div className="flex flex-col items-center gap-y-2 mt-10"> */}
            <h1 className="text-4xl">Reviews</h1>
        {/* </div> */}
        <div className="grid grid-cols-2 gap-10 mt-10">
            {clients_data.map((client, index) => (
                <div key={index} className="flex flex-col gap-2 w-3/4">
                    <p className="text-3xl font-semibold">{client.name}</p>
                    <p className="text-lg">{client.feedback}</p>
                    <StarRatings ratings={4} size={30}/>
                </div>
            ))}
        </div>
        
        <Link href="#">
            <Button text="View all" />
        </Link>

        <ReviewForm />
        
    </section>
  )
}
