import { useMemo, useState } from 'react';
import { DECODED_DATA } from '../consts/data.const';

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

  return { filteredItems, searchPhrase, setSearchPhrase };
};
