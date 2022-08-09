import { useContext } from 'react';
import { GridPaginationContext } from '../context/grid-pagination.context';
import ArrowLeft from './ArrowLeft';
import ArrowRight from './ArrowRight';

const Pagination = () => {
  const {
    canGoNext,
    goNext,
    canGoPrev,
    goPrev,
    offset,
    pageLimit,
    numberOfItems,
  } = useContext(GridPaginationContext);

  return (
    <>
      <span className="mx-3">
        Showing <span className="font-semibold">{offset + 1}</span> to{' '}
        <span className="font-semibold">{offset + pageLimit}</span> of{' '}
        <span className="font-semibold ">{numberOfItems}</span> Entries
      </span>

      <button className="mx-2 inline" disabled={!canGoPrev} onClick={goPrev}>
        <ArrowLeft></ArrowLeft>
        <span className="ml-1">Prev</span>
      </button>
      <button className="mx-2 inline" disabled={!canGoNext} onClick={goNext}>
        <span className="mr-1">Next</span>
        <ArrowRight></ArrowRight>
      </button>
    </>
  );
};

export default Pagination;
