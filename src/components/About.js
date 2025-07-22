import React from 'react'

export default function About({mode}) {
  return (
    <div className='container' style={{color: mode==='dark'?'white':'black'}}>
      <h1 className='my-4'>About Us</h1>
      <p className='container card shadow-sm p-4 card-body m-5 fs-5' style={{color: mode==='dark'?'white':'black', backgroundColor: mode==='dark'?'#2c3238':'white'}} > 
      Welcome to our text analysis tool! Designed to help you easily manipulate and analyze your text, this platform offers a variety of features including converting text to uppercase or lowercase, removing extra spaces, copying text, and providing detailed summaries. Whether you're a student, a professional, or anyone in need of quick text editing, our tool makes the process fast and effortless. Simply enter your text, and explore the many capabilities tailored to meet your needs. Happy editing!
      </p>
    </div>
  )
}
