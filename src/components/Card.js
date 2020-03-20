import React from 'react';

const Card = ({ name, climate, terrain, population }) => {
  return (
    <div className='link black dim tc bg-light-blue flex justify-center br3 pa3 ma2 bw2 shadow-5'>
      <img alt='robots' src={`https://robohash.org/${name}?200x200`} />
      <div>
        <h2>{name}</h2>
        <p><strong>Climate:</strong> {climate}</p>
        <p><strong>Terrain:</strong> {terrain}</p>
        <p><strong>Population:</strong> {population}</p>
      </div>
    </div>
  );
}

export default Card;
