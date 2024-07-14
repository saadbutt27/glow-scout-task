import React from 'react'

// This is a reusable button component which excepts props
// For text to show in button
// And type of button, by default it'll have button type
// This button has a hoverable effect as well
const Button = ({ text, type="button" }: { text: string, type?: "button" | "submit" | "reset" }) => {  
    return (
        <button type={type} className="bg-secondary rounded-full px-6 py-2.5 text-primary font-semibold hover:text-secondary hover:bg-primary border-2 hover:border-secondary duration-300">
            {text}
        </button>
  )
}

export default Button