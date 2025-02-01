import React, {useState} from 'react'

export default function About() {
    const [mystyle, setStyle] = useState({
    
        color: 'white',
        backgroundColor: 'black'
    })
    const [btnText, setBtnText] = useState("Enable dark mode")

   const toogleBtn = ()=>{
        if(mystyle.color === 'white'){
            setStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setBtnText("Enable dark mode")
        }
        else{
            setStyle({
                color: 'white',
                backgroundColor: 'black'
            })
            setBtnText("Enable light mode")
        }
    }
  return (
   <>
   <div>
        <div className="container" style={mystyle}>
        <h1 style={mystyle}>About Us </h1>
            <p>
            Welcome to our website! We are dedicated to providing the best service possible.
            </p>
            <h2>Our Mission</h2>
            <p>
            Our mission is to deliver high-quality products that bring value to our customers.
            </p>
            <h2>Our Team</h2>
            <p>
            We have a diverse team of professionals who are passionate about what they do.
            </p>
            <h2>Contact Us</h2>
            <p>
            If you have any questions, feel free to reach out to us at contact@ourwebsite.com.
            </p>
            </div>
            <button className='btn btn-primary' onClick={toogleBtn} >{btnText}</button>
    </div>
    </>
  )
}
