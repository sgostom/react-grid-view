import { GridPaginationContext } from '../context/grid-pagination.context';
import { GridSearchContext } from '../context/grid-serach-context.hook';
import { useGridItems } from '../hooks/use-grid-items.hook';
import { usePagination } from '../hooks/use-pagination.hook';
import GridHeader from './GridHeader';
import GridItems from './GridItems';

const GridView = () => {
  const { filteredItems, applySearch } = useGridItems();
  const pagination = usePagination(filteredItems, 5);

  return (
    <div className="mx-auto max-w-[1344px]">
      <GridSearchContext.Provider value={{ applySearch }}>
        <GridPaginationContext.Provider value={pagination}>
          <GridHeader></GridHeader>
          <GridItems></GridItems>
        </GridPaginationContext.Provider>
      </GridSearchContext.Provider>
    </div>
  );
};

export default GridView;
