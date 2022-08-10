import { ChangeEvent, useContext, useState } from 'react';
import { GridSearchContext } from '../context/grid-serach-context.hook';

const GridSearch = () => {
  const { applySearch } = useContext(GridSearchContext);

  const [searchPhrase, setSearchPhrase] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = e.target.value;
    setSearchPhrase(value);
    applySearch(value);
  };

  return (
    <div>
      <label htmlFor="search-input" className="block text-sm">
        Search
      </label>
      <input
        type="text"
        id="search-input"
        aria-label="Search"
        className="block w-full rounded-lg border border-gray-300 p-1"
        value={searchPhrase}
        onChange={handleChange}
      ></input>
    </div>
  );
};

export default GridSearch;
