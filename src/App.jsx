import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import heroLogoImage from './assets/hero-logo.png'; 
import placeholderImage from './assets/placeholder.png'; 
import placeholderImage2 from './assets/placeholder2.png'; 


import './App.css'




function App() {
  const [count, setCount] = useState(0)
  const [currentPage, setCurrentPage] = useState('shop');

  const products = [
    {
      id: 1,
      name: 'Paper Buddies',
      price: '£5',
      image: placeholderImage,
      description: 'A buddie for you and your friends, who wouldn\'t want one',
      artist: 'Eimear (Age 9)'
    },
    {
      id: 2,
      name: 'Sparkly Robot Drawing',
      price: '£8.00',
      image: placeholderImage2, 
      description: 'An imaginative drawing of a friendly robot, complete with glittery details.',
      artist: 'Iona (Age 9)'
    },
    {
      id: 3,
      name: 'Clay Monster Sculpture',
      price: '£15.00',
      image: placeholderImage2, // Now referencing the local placeholder.png
      description: 'A unique, hand-sculpted clay monster with big eyes and a friendly smile.',
      artist: 'Sarah-Rose (Age 9)'
    },
    {
      id: 4,
      name: 'Abstract Paint Splatter',
      price: '£10.00',
      image: placeholderImage2, // Now referencing the local placeholder.png
      description: 'A burst of colors on canvas, a true abstract masterpiece!',
      artist: 'Evie (Age 9)'
    },
    {
      id: 5,
      name: 'Handmade Friendship Bracelet',
      price: '£5.00',
      image: placeholderImage2, // Now referencing the local placeholder.png
      description: 'Colorful woven bracelet, perfect for sharing with a best friend.',
      artist: 'Eimear\'s Dad (Possibly over 40)'
    },
    {
      id: 6,
      name: 'Doodle Art Sketchbook',
      price: '£7.50',
      image: placeholderImage2, // Now referencing the local placeholder.png
      description: 'A collection of fun doodles and sketches, bound into a mini-book.',
      artist: 'Eimear (Age 9)'
    }
  ];

  
const Header = () => (
    <header className="bg-gradient-to-r from-pink-100 to-white p-4 shadow-lg rounded-b-2xl mb-8">
      <div className="container mx-auto flex justify-between items-center">
        {/* Website Title/Logo */}
        <div className="flex items-center space-x-2">
          {/* Hand-drawn style pencil icon */}
          <svg className="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
          </svg>
          <h1 className="text-3xl font-extrabold text-pink-800 font-inter tracking-tight">
            Doodle & Design
          </h1>
        </div>

        {/* Navigation Links */}
        <nav className="space-x-6">
          <a href="https://doodleanddesign.me" className="text-pink-700 hover:text-pink-600 font-semibold transition-colors duration-200">Home</a>
          <a href="https://doodleanddesign.me" className="text-pink-700 hover:text-pink-600 font-semibold transition-colors duration-200">Shop</a>
          <a href="https://doodleanddesign.me" className="text-pink-700 hover:text-pink-600 font-semibold transition-colors duration-200">About Us</a>
          <a href="https://doodleanddesign.me" className="text-pink-700 hover:text-pink-600 font-semibold transition-colors duration-200">Contact</a>
        </nav>

        {/* Shopping Cart Icon */}
        <div className="relative">
          {/* Shopping cart icon SVG */}
          <svg className="w-7 h-7 text-pink-700 cursor-pointer hover:text-pink-600 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
          </svg>
          <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full px-1 py-0.5">0</span>
        </div>
      </div>
    </header>
  );

  // New Hero Section component
  const HeroSection = () => (
    <section className="bg-gradient-to-br from-pink-100 to-white py-16 px-4 text-center rounded-xl mx-auto max-w-6xl shadow-lg mb-12">
      <div className="flex flex-col items-center justify-center">
        {/* Logo/Main Title with playful elements */}
        <div className="flex flex-col items-center space-y-4 mb-6">
          <img
            src={heroLogoImage}
            alt="Doodle & Design Logo"
            className="w-3/4 h-auto rounded-full shadow-md max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl" // Made logo take up more width
            onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/192x192/FFC0CB/FFFFFF?text=Logo`; }} // Fallback
          />
          {/* Removed the h2 text "Doodle & Design" */}
        </div>
        <p className="text-xl text-gray-700 max-w-2xl mb-8">
          Welcome to our online shop, where creativity blossoms! Discover unique, handmade arts and crafts created with love by talented young artists.
        </p>
        <button className="bg-pink-500 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-pink-600 transition-colors duration-300 shadow-lg transform hover:scale-105">
          Explore Our Art
        </button>
      </div>
    </section>
  );


  // Component for displaying a single product card
  const ProductCard = ({ product }) => (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-105 border border-pink-100">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-t-xl"
        // Fallback image in case the provided URL fails
        onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/400x300/CCCCCC/666666?text=Image+Error`; }}
      />
      <div className="p-5">
        <h3 className="text-xl font-bold text-pink-800 mb-2 font-inter">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-3">By {product.artist}</p>
        <p className="text-pink-600 text-2xl font-extrabold mb-4">{product.price}</p>
        <button className="w-full bg-pink-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-pink-600 transition-colors duration-200 shadow-md transform hover:scale-105">
          Add to Cart
        </button>
      </div>
    </div>
  );

  // Component for displaying a list of products
  const ProductList = ({ products }) => (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-extrabold text-pink-800 text-center mb-10 font-inter">Our Wonderful Creations</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );

  // Component for the website footer
  const Footer = () => (
    <footer className="bg-gradient-to-r from-pink-100 to-white p-6 mt-12 rounded-t-2xl">
      <div className="container mx-auto text-center text-pink-800">
        <p className="text-lg font-semibold mb-2">Doodle & Design © 2025</p>
        <p className="text-sm">Handmade with love by our talented young artists!</p>
        <div className="flex justify-center space-x-4 mt-4">
          {/* Social media icons (placeholders) */}
          <a href="https://doodleanddesign.me" className="text-pink-700 hover:text-pink-600 transition-colors duration-200">
            {/* Instagram icon */}
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C9.11 2 8.78 2 7.15 2.08c-1.63.08-2.61.35-3.54.71-.93.36-1.74.88-2.55 1.69-.81.81-1.33 1.62-1.69 2.55-.36.93-.63 1.91-.71 3.54C2 8.78 2 9.11 2 12s0 3.22.08 4.85c.08 1.63.35 2.61.71 3.54.36.93.88 1.74 1.69 2.55.81.81 1.62 1.33 2.55 1.69.93.36 1.91.63 3.54.71C8.78 22 9.11 22 12 22s3.22 0 4.85-.08c1.63-.08 2.61-.35 3.54-.71.93-.36 1.74-.88 2.55-1.69.81-.81 1.33-1.62 1.69-2.55.36-.93.63-1.91.71-3.54.08-1.63.08-1.96.08-4.85s0-3.22-.08-4.85c-.08-1.63-.35-2.61-.71-3.54-.36-.93-.88-1.74-1.69-2.55-.81-.81-1.62-1.33-2.55-1.69-.93-.36-1.91-.63-3.54-.71C15.22 2 14.89 2 12 2zm0 4.79c2.88 0 5.21 2.33 5.21 5.21s-2.33 5.21-5.21 5.21-5.21-2.33-5.21-5.21 2.33-5.21 5.21-5.21zm0 2.21c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm6.5-3.5c-.75 0-1.36.61-1.36 1.36s.61 1.36 1.36 1.36 1.36-.61 1.36-1.36-.61-1.36-1.36-1.36z" clipRule="evenodd" />
            </svg>
          </a>
          <a href="https://doodleanddesign.me" className="text-pink-700 hover:text-pink-600 transition-colors duration-200">
            {/* Facebook icon */}
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.92 3.58 9.02 8.28 9.83V14.5h-2.5v-2.5h2.5V10c0-2.48 1.5-3.84 3.71-3.84 1.05 0 1.96.08 2.23.12v2.42h-1.44c-1.15 0-1.37.55-1.37 1.35V12h2.7l-.44 2.5h-2.26V22c4.7-.81 8.28-4.91 8.28-9.83z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );

  return (
    // Main container for the application, using Inter font and light background
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white font-inter text-gray-800">
      {/* The Tailwind CSS CDN and configuration, and Google Fonts link are now in public/index.html */}

      {/* Render Header component */}
      <Header />

      {/* Render Hero Section component */}
      <HeroSection />

      {/* Main content area */}
      <main className="pb-12">
        {/* Conditional rendering based on currentPage state */}
        {currentPage === 'shop' && <ProductList products={products} />}
        {/* Add more pages here as needed, e.g., for 'home', 'about', etc. */}
      </main>

      {/* Render Footer component */}
      <Footer />
    </div>
  );
}

export default App;

