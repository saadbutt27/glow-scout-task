import React from 'react'
import Wrapper from '../reusable/Wrapper'
import { CircleArrowOutUpRightIcon } from 'lucide-react'

// This is last section which has a button to sign up as business
export default function Business() {
  return (
    <section className="mt-20 py-20">
    <Wrapper>
        <div className="flex flex-col justify-center items-center gap-y-10 text-secondary">
            <h2 className="text-4xl">Are you a business ?</h2>
            <p className="text-lg">People are seeking for the specialist. <br />Join us now and serve your skills.</p>
            <button 
                className="flex gap-x-2.5 border-2 border-secondary rounded-full px-6 py-2.5 bg-primary hover:bg-secondary hover:text-primary text-secondary duration-300 font-semibold">
                Sign Up as Business
                <CircleArrowOutUpRightIcon />
            </button>
        </div>
    </Wrapper>
</section>
  )
}
