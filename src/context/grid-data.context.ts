import { createContext } from 'react';
import { IGridItem } from '../models/grid-item.model';

export interface IGridData {
  items: IGridItem[];
}

export const gridDataContext = createContext({} as IGridData);
