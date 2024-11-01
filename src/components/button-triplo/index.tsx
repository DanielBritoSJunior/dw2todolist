"use client"
import { useState } from "react"

interface  ButtonTriploProps {
    text: string
}

export default function ButtonTriplo({ text }: ButtonTriploProps) {
    const [color, setColor] = useState<string>('')

    const mudarCor = (color: string) => {
        setColor(color) 
    }

    return (
        <div className="flex items-center gap-2">
            <button className="border-2 border-solid p-2" onClick={() => mudarCor('red')} style={{ backgroundColor: color === 'red' ? 'red' : '' }}>
                {text}
            </button>
            <button className="border-2 border-solid p-2" onClick={() => mudarCor('blue')} style={{ backgroundColor: color === 'blue' ? 'blue' : '' }}>
                {text}
            </button>
            <button className="border-2 border-solid p-2" onClick={() => mudarCor('green')} style={{ backgroundColor: color === 'green' ? 'green' : '' }}>
                {text}
            </button>
            <button className="border-2 border-solid p-2" onClick={() => mudarCor('black')} style={{ backgroundColor: color === 'black' ? 'black' : '' }}>
                {text}
            </button>
        </div>
    )
}