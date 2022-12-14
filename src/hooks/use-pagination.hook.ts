import { useEffect, useState } from 'react';
import { IPagination } from '../models/pagination.model';

export const usePagination = <T>(
  dataSource: T[],
  pageLimit: number
): IPagination<T> => {
  const [offset, setOffset] = useState(0);
  useEffect(() => setOffset(0), [dataSource]);

  const numberOfItems = dataSource.length;

  const paginatedItems = dataSource.slice(offset, offset + pageLimit);

  const canGoNext = offset + pageLimit < numberOfItems;
  const goNext = () => setOffset(offset + pageLimit);

  const canGoPrev = offset - pageLimit >= 0;
  const goPrev = () => setOffset(offset - pageLimit);

  return {
    paginatedItems,
    canGoNext,
    goNext,
    canGoPrev,
    goPrev,
    offset,
    pageLimit,
    numberOfItems,
  };
};
