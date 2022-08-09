import { createContext } from 'react';
import { ISearch } from '../models/seatch.model';

export const GridSearchContext = createContext<ISearch>({
  searchPhrase: '',
  setSearchPhrase: () => { },
});
