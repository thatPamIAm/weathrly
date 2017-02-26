import React from 'react'

const LocationNotFound = ({responseData}) => {
    return(
      <h2>
        {responseData.description}
      </h2>
    )
}

export default LocationNotFound;
