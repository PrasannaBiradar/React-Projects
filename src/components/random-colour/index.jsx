import { useState } from "react";

export default function RandomColor(){
    const [typeOfColor,setTypeOfColor] = useState('hex');
    const [color,setColor] = useState('#000000');

    function randomColorUtility(length) {
        return Math.floor(Math.random() * length);
    }
    function createRandomHexColor() {
        const hex = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
        let hexColor = '#';

        for(let i=0; i<6; i++){
            hexColor += hex[randomColorUtility(hex.length)];
        }
        setColor(hexColor);
    }

    function createRandomRgbColor() {
        const r = randomColorUtility(256);
        const g = randomColorUtility(256);
        const b = randomColorUtility(256);

        setColor(`rgb(${r},${g},${b})`);
    }

    return (
    <div 
      style={{
            width: '100vw',
            height: '100vh',
            background: color
        }}
    >
        <button onClick={() => setTypeOfColor('hex')}>Hex Colour Code</button>
        <button onClick={() => setTypeOfColor('rgb')}>RGB Colour Code</button>
        <button onClick={ typeOfColor === 'hex' ? createRandomHexColor : createRandomRgbColor}>Generate Random Color</button>
        <h3>{typeOfColor === 'rgb' ? "RGB Color" : "Hex Color"}</h3>
        <h1>{color}</h1>
    </div>
    );
}