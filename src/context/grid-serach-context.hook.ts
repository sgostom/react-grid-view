import { createContext } from 'react';
import { ISearch } from '../models/search.model';

export const GridSearchContext = createContext<ISearch>({
  applySearch: () => { },
});
