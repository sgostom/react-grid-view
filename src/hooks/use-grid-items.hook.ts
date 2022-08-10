import { useCallback, useMemo, useState } from 'react';
import { DECODED_DATA } from '../consts/data.const';
import { debounce } from '../utils/debounce.util';

export const useGridItems = () => {
  const [searchPhrase, setSearchPhrase] = useState('');

  const filteredItems = useMemo(
    () =>
      DECODED_DATA.filter(
        (item) =>
          item.title.toLowerCase().search(searchPhrase.toLowerCase()) >= 0
      ),
    [searchPhrase]
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const applySearch = useCallback(debounce(setSearchPhrase), []);

  return { filteredItems, applySearch };
};
