import React from 'react'

const LocationNotFound = ({responseData}) => {
    return(
      <h2 className='not-found-header'>
        {responseData.description}
      </h2>
    )
}

export default LocationNotFound;
