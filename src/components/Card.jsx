// import React from 'react'
import cardImg from '../assets/tailwind-thumb.jpg';

const Card = () => {
  return (
    <div className="card rounded-md border border-green-800 bg-green-700 font-mono text-white shadow-md shadow-green-800 lg:max-w-md">
      <img src={cardImg} alt="imgCard" />
      <div className="p-3">
        <h1 className="my-2 text-lg font-bold">Tailwind-Css</h1>
        <p className="mb-3 text-sm">
          Tailwind CSS works by scanning all of your HTML files, JavaScript
          components, and any other templates for class names, generating the
          corresponding styles and then writing them to a static CSS file. It's
          fast, flexible, and reliable — with zero-runtime.
        </p>
        <button className="btn-primary">More</button>
      </div>
    </div>
  );
};

export default Card;
