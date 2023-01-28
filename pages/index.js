import Head from 'next/head';
import Image from 'next/image';
import buildspaceLogo from '../assets/buildspace-logo.png';
import profileLogo from '../assets/profile_image.jpg';

import { useState } from 'react';

const Home = () => {
  const [input,setInput] = useState('');

  const onChange = (event) =>{
    setInput(event.target.value);
    console.log({input});
  };

  const generateAction = ()=>{
    console.log("Generate btn Works");
  }

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
