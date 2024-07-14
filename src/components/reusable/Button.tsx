import React from 'react'

const Button = ({ text }: { text: string }) => {  
    return (
        <button className="bg-secondary rounded-full px-6 py-2.5 text-primary hover:font-semibold hover:text-secondary hover:bg-primary hover:border-2 hover:border-secondary duration-300">
            {text}
        </button>
  )
}

export default Button