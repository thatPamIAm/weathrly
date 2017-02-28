import React from 'react';

const LocationNotFound = ({ response }) => {
  return (
    <h2 className='not-found-header'>
      {response.description}
    </h2>
  );
};

export default LocationNotFound;
