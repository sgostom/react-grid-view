import { useContext } from 'react';
import { GridPaginationContext } from '../context/grid-pagination.context';
import GridHeader from './GridHeader';
import GridItem from './GridItem';

const Grid = () => {
  const { paginatedItems } = useContext(GridPaginationContext);

  if (!paginatedItems) return null;

  return (
    <div className="flex flex-col items-center">
      <GridHeader></GridHeader>
      <div className="flex flex-wrap">
        {paginatedItems.map((item, i) => (
          <GridItem key={item.id} gridItem={item}></GridItem>
        ))}
      </div>
    </div>
  );
};

export default Grid;
