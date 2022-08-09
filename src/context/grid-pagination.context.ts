import { createContext } from 'react';
import { IGridItem } from '../models/grid-item.model';
import { IPagination } from '../models/pagination.model';

export const GridPaginationContext = createContext(
  {} as IPagination<IGridItem>
);
