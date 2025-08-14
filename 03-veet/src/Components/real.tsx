import React from 'react';

function PropertyCard(props) {
    
  return (
    
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
      <img
        className="w-full h-48 object-cover"
        src="https://images.pexels.com/photos/31820499/pexels-photo-31820499.jpeg"
        alt="Modern House in Kathmandu"
      />
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">{props.username}</h2>
        <p className="text-gray-700 text-base mb-1">
          1234 Elm Street, Kathmandu, Nepal
        </p>
        <p className="text-gray-700 text-sm mb-2">
          4 Bedrooms | 3 Bathrooms | 2,500 sq ft
        </p>
        <p className="text-blue-500 font-semibold text-lg">$750,000</p>
      </div>
      <div className="px-6 pt-4 pb-6">
        <a
          href="https://www.google.com/maps/place/Kathmandu,+Nepal/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-500 text-black font-black px-4 py-2 rounded-full text-sm hover:bg-blue-600 hover:text-black transition-colors"
        >
          View on Map
        </a>
      </div>
    </div>
  );
}

export default PropertyCard;

