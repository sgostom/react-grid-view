import { ChangeEvent, useContext } from 'react';
import { GridSearchContext } from '../context/grid-serach-context.hook';

const GridSearch = () => {
  const { searchPhrase, setSearchPhrase } = useContext(GridSearchContext);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchPhrase(e.target.value);
  };

  return (
    <div>
      <label htmlFor="search-input" className="block text-sm">
        Search
      </label>
      <input
        type="text"
        id="search-input"
        className="block w-full rounded-lg border p-1 outline-none"
        value={searchPhrase}
        onChange={handleChange}
      ></input>
    </div>
  );
};

export default GridSearch;
