import { useState } from 'react';
import { DECODED_DATA } from '../consts/data.const';
import { GridPaginationContext } from '../context/grid-pagination.context';
import { usePagination } from '../hooks/use-pagination.hook';
import Grid from './Grid';

const GridView = () => {
  const [items] = useState(DECODED_DATA);

  const pagination = usePagination(items, 5);

  return (
    <GridPaginationContext.Provider value={pagination}>
      <Grid></Grid>
    </GridPaginationContext.Provider>
  );
};

export default GridView;
