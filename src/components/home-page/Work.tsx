import React from 'react'
import Wrapper from '../reusable/Wrapper'
import Button from '../reusable/Button'

export default function Work() {
  return (
    <Wrapper>
        <section className="h-screen flex flex-col justify-between items-center mt-20 bg-trinary p-10">
            <h2 className="text-4xl mt-16">How Glow Scout Works</h2>
            <div className="flex gap-x-10">
                {workCard(1, "Sign Up")}
                {workCard(2, "Select your Beauty Goals")}
                {workCard(3, "Select Treatment")}
                {workCard(4, "Select Spa")}
            </div>
            <Button text={"Get Started"}/>
        </section>
    </Wrapper>
  )
}

function workCard(i:number, title:string) {
    return(
        <div className="text-3xl flex flex-col justify-between items-center bg-frinary rounded-md p-5 w-44 h-80">
            <h4 className="font-semibold">0{i}</h4>
            <h4 className="text-center font-normal">{title}</h4>
        </div>
    )
}
