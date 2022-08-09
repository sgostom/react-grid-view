import { createContext } from 'react';
import { IGridItem } from '../models/grid-item.model';
import { IPagination } from '../models/pagination.model';

export const GridPaginationContext = createContext<IPagination<IGridItem>>({
  paginatedItems: [],
  canGoNext: false,
  goNext: () => { },
  canGoPrev: false,
  goPrev: () => { },
  pageLimit: 0,
  offset: 0,
  numberOfItems: 0,
});
