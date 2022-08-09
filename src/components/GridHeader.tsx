import GridSearch from './GridSearch';
import Pagination from './Pagination';

const GridHeader = () => {
  return (
    <div className="my-3 flex w-full flex-col items-center justify-between sm:flex-row sm:items-end">
      <GridSearch></GridSearch>
      <Pagination></Pagination>
    </div>
  );
};

export default GridHeader;
