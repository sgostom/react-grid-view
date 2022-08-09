import { useContext } from 'react';
import { GridPaginationContext } from '../context/grid-pagination.context';
import ArrowLeft from './ArrowLeft';
import ArrowRight from './ArrowRight';
import PaginationStatus from './PaginationStatus';

const Pagination = () => {
  const { canGoNext, goNext, canGoPrev, goPrev } = useContext(
    GridPaginationContext
  );

  return (
    <div className="my-2">
      <PaginationStatus></PaginationStatus>

      <button className="mx-2 inline" disabled={!canGoPrev} onClick={goPrev}>
        <ArrowLeft></ArrowLeft>
        <span className="ml-1">Prev</span>
      </button>
      <button className="mx-2 inline" disabled={!canGoNext} onClick={goNext}>
        <span className="mr-1">Next</span>
        <ArrowRight></ArrowRight>
      </button>
    </div>
  );
};

export default Pagination;
