import React from 'react'

const Button = ({ text }: { text: string }) => {  
    return (
        <button className="bg-secondary rounded-full px-6 py-2.5 text-primary">
            {text}
        </button>
  )
}

export default Button