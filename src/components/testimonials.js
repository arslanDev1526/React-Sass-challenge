import React from 'react'
import quotes from './images/bg-quotes.png'
import picone from './images/profile-1.jpg'
import pictwo from './images/profile-2.jpg'
import picthree from './images/profile-3.jpg'

import './testimonials.scss'

export const Testimonials = () => {
  return (
<> 
<div className='quote-img'>
<img  src={quotes}/>
</div>
<div className='review-container'>
 

<div className='review-1'> 
    <p className='review-1-p'> 
    Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.
    </p>

    <div> 
        <img  src={picone} /> 
        
<div>
        <h3> 
        Satish Patel
        </h3>
        <p> 
        Founder & CEO, Huddle
        </p>
        </div>
    </div>
</div>

<div className='review-1'> 
    <p className='review-1-p'> 
    Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.
    </p>

    <div> 
        <img  src={pictwo} /> 
        
<div>
        <h3> 
        Bruce McKenzie
        </h3>
        <p> 
        Founder & CEO, Huddle
        </p>
        </div>
    </div>
</div>

<div className='review-1'> 
    <p className='review-1-p'> 
    Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.
    </p>

    <div> 
        <img  src={picthree} /> 
        
<div>
        <h3> 
        Bruce McKenzie
        </h3>
        <p> 
        Founder & CEO, Huddle
        </p>
        </div>
    </div>
</div>
</div>
</>
  )
}
