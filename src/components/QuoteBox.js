import React, { useState } from 'react';
import quotes from "../quotes.json"
import Button from './Button';

// const colors = ["#000000", "#3D0000", "#950101", "#FF0000"]
const colors = ["#040303", "#461111", "#A13333", "#B3541E", "#950101", "#362222"]

const QuoteBox = () => {

    const randomQuotes= Math.floor(Math.random()*quotes.length);

    const [changeQuote, setChangeQuote] = useState(randomQuotes)

    const change =()=>{

        
        console.log("cambió")
        setChangeQuote(randomIndex)
        console.log(changeQuote)
        
    }
        const randomIndex= Math.floor(Math.random()*quotes.length); 
        const randomColors= Math.floor(Math.random()*colors.length);
        document.body.style = `background: ${colors[randomColors]}`;
        const colorsButton = colors[randomColors];
        console.log(colorsButton)
    
    console.log(quotes)
    return (

    
        <div className='section-quotes'style={{color:colors[randomColors]}}>
            <h3 className='quote'><i className="fa-solid fa-quote-left"></i> {quotes[changeQuote].quote} <i className="fa-solid fa-quote-right"></i></h3><br/>
            <em><h3 className='author'>{quotes[changeQuote].author}</h3></em><br/>
            <Button change= {change} colorsButton= {colorsButton}/>
        </div>
    );
};

export default QuoteBox;