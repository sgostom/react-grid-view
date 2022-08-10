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

      <button
        aria-label="Prev"
        className="mx-2 inline disabled:cursor-not-allowed disabled:text-gray-500"
        disabled={!canGoPrev}
        onClick={goPrev}
      >
        <ArrowLeft></ArrowLeft>
        <span className="ml-1">Prev</span>
      </button>
      <button
        aria-label="Next"
        className="mx-2 inline disabled:cursor-not-allowed disabled:text-gray-500"
        disabled={!canGoNext}
        onClick={goNext}
      >
        <span className="mr-1">Next</span>
        <ArrowRight></ArrowRight>
      </button>
    </div>
  );
};

export default Pagination;
