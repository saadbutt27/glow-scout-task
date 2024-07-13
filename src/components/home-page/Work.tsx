import React from 'react'
import Wrapper from '../reusable/Wrapper'
import Button from '../reusable/Button'

export default function Work() {
  return (
      <section className="mt-20 bg-trinary p-20">
        <Wrapper>
            <div className="flex flex-col justify-between items-center gap-y-10">
                <h2 className="text-4xl mt-16">How Glow Scout Works</h2>
                <div className="grid lg:grid-cols-4 grid-cols-2 gap-10">
                    {workCard(1, "Sign Up")}
                    {workCard(2, "Select your Beauty Goals")}
                    {workCard(3, "Select Treatment")}
                    {workCard(4, "Select Spa")}
                </div>
                <Button text={"Get Started"}/>
            </div>
        </Wrapper>
    </section>
  )
}

function workCard(i:number, title:string) {
    return(
        <div className="text-xl lg:text-3xl flex flex-col justify-between items-center bg-frinary rounded-md p-5 lg:w-44 lg:h-80 w-32 h-60">
            <h4 className="font-semibold">0{i}</h4>
            <h4 className="text-center font-normal">{title}</h4>
        </div>
    )
}
