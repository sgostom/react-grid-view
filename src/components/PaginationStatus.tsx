import { useContext } from 'react';
import { GridPaginationContext } from '../context/grid-pagination.context';

const Pagination = () => {
  const { offset, pageLimit, numberOfItems } = useContext(
    GridPaginationContext
  );

  const from = numberOfItems === 0 ? numberOfItems : offset + 1;
  const to = Math.min(offset + pageLimit, numberOfItems);

  return (
    <span className="mx-3">
      Showing <span className="font-semibold">{from}</span> to{' '}
      <span className="font-semibold">{to}</span> of{' '}
      <span className="font-semibold ">{numberOfItems}</span> Entries
    </span>
  );
};

export default Pagination;
