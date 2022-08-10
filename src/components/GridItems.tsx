import { useContext } from 'react';
import { GridPaginationContext } from '../context/grid-pagination.context';
import GridItem from './GridItem';

const GridItems = () => {
  const { paginatedItems, numberOfItems } = useContext(GridPaginationContext);

  if (numberOfItems === 0) return <>No results found...</>;

  return (
    <section className="-mx-2 flex flex-wrap justify-center">
      {paginatedItems.map((item) => (
        <GridItem key={item.id} gridItem={item}></GridItem>
      ))}
    </section>
  );
};

export default GridItems;
