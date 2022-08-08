import { useState } from 'react';
import { DECODED_DATA } from '../consts/data.const';
import GridItem from './GridItem';

const Grid = () => {
  const [items] = useState(DECODED_DATA);

  return (
    <div className="flex">
      {items.map((item) => (
        <GridItem gridItem={item}></GridItem>
      ))}
    </div>
  );
};

export default Grid;
