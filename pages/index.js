import Head from 'next/head';
import Image from 'next/image';
import buildspaceLogo from '../assets/buildspace-logo.png';
import profileLogo from '../assets/profile_image.jpg';

import { useState } from 'react';

const Home = () => {
  //to store input 
  const [input,setInput] = useState('');
  //to store image
  const[img,setImage] = useState('');

  const onChange = (event) =>{
    setInput(event.target.value);
    console.log({input});
  };

  const generateAction = async () => {
    console.log("Generate btn Works");

    const response = await fetch("/api/generate",{
      method: 'POST',
      headers: {'Content-Type':'image/jpeg'},
      body: JSON.stringify({input})
    });

    const data = await response.json();

    // Model is still loading
    if(response.status == 503){
      console.log("Model is still loading");
      return;
    }

    //if another Error
    if(!response.ok){
      console.log("Error: ${data.error} ");
      return;
    }

    setImage(data.img);
  };

  return (
    <div className="root">
      <Head>
        <title>AI Avatar Generator | buildspace</title>
      </Head>
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>AI Portrait Generator</h1>
          </div>
          <div className="header-subtitle">
            <h2>Turn me into anyone you want! Make sure you refer to me as "aysunpic" in the prompt</h2>
          </div>
          <div className="prompt-container">
            <input className="prompt-box" value={input} onChange= {onChange} /> 
          </div>
          <div className='prompt-buttons'>
            <button className='generate-button' onClick={generateAction}>
              <div className='generate'>
              <p> Generate </p>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="badge-container grow">
        <a
          href="https://ayushunleashed.carrd.co/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="badge">
            <Image src={profileLogo} alt="profile logo" />
            <p>Made by Ayush Unleashed</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Home;
