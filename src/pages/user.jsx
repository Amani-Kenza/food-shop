import React, { useState } from 'react';
import {Navbar} from '../components/Navbar'
import { Footer } from './../components/Footer';
const FormExample = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Faire quelque chose avec les données du formulaire, comme les envoyer à un serveur
    console.log(formData);
    // Réinitialiser le formulaire après la soumission
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    });
  };

  return (
  <div>
    <Navbar />
    <div className='border-2 rounded-lg flex mt-12 ml-72 shadow-2xl ml-24 w-7/12'>
    <div className='ml-12 text-center'>
    <h1 className='font-bold mt-4 mb-4'>Log In</h1>
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="email"
          id="email"
          name="email"
          placeholder='email'
          value={formData.email}
          onChange={handleChange}
          className='p-4 mb-4 cursor-pointer border-2 border-gray-500 rounded-full w-56 h-10'
        />
      </div>
      <div>
        <input
          type="password"
          id="password"
          name="password"
          placeholder='password'
          value={formData.email}
          onChange={handleChange}
          className='p-4 mb-2 cursor-pointer rounded-full border-2 border-gray-500 w-56 h-10'
        />
        <h5 className='ml-24 mb-4 cursor-pointer'>Forget password?</h5>
      </div>
      <div className="flex justify-center items-center">
      <button className='text-white bg-2 ml-2 cursor-pointer shadow-2xl animation rounded-full font-bold w-32 h-12'>Log in</button>
      </div>
      <div className='border border-solid w-48 mt-4 ml-4'></div>
      <div>
        <button className='ml-2 cursor-pointer animation mt-2 rounded-full border-2 w-56 h-12'>Continue with Google</button>
      </div>
      <div>
        <button className='ml-2 cursor-pointer animation mt-2 rounded-full border-2 w-56 h-12'>Continue with Facebook</button>
      </div>
    </form>
    </div>
    <div className='text-white border border-solid h-96 ml-14'></div>
    <div className='ml-24 text-center'>
    <h1 className='font-bold mt-4 mb-4'>Sign Up</h1>
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          id="fullName"
          name="fullName"
          placeholder='FullName'
          value={formData.fullName}
          onChange={handleChange}
          className='p-4 mb-4 cursor-pointer border-2 border-gray-500 rounded-full w-56 h-10'
        />
      </div>
      <div>
        <input
          type="email"
          id="email"
          name="email"
          placeholder='Email'
          value={formData.email}
          onChange={handleChange}
          className='p-4 mb-4 cursor-pointer border-2 border-gray-500 rounded-full w-56 h-10'
        />
      </div>
      <div>
        <input
          type="password"
          id="password"
          name="password"
          placeholder='Password'
          value={formData.email}
          onChange={handleChange}
          className='p-4 mb-4 cursor-pointer border-2 border-gray-500 rounded-full w-56 h-10'
        />
      </div>
      <div>
        <input
          type="password"
          id="password"
          name="password"
          placeholder='Confirm Password'
          value={formData.email}
          onChange={handleChange}
          className='p-4 mb-4 cursor-pointer border-2 border-gray-500 rounded-full w-56 h-10'
        />
      </div>
      <div className="flex justify-center items-center">
      <button className='text-white bg-2 ml-2 cursor-pointer shadow-2xl animation rounded-full font-bold w-32 h-12'>Sign up</button>
      </div>
      
    </form>
    </div>
    </div>
    <Footer />
  </div>
  );
};

export default FormExample;
