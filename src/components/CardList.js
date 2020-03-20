import React from 'react';
import Card from './Card';

const CardList = ({ planets }) => {

  return (
    <div>
    {
      planets.map((user, i) => {
        return (
          <Card key={planets[i].name} name={planets[i].name} climate={planets[i].climate} terrain={planets[i].terrain} population={planets[i].population} />
        );
      })
    }
    </div>
  )
}

export default CardList;
