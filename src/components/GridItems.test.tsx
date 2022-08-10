import { render, screen } from '@testing-library/react';
import { ReactNode } from 'react';
import { GridPaginationContext } from '../context/grid-pagination.context';
import { IGridItem } from '../models/grid-item.model';
import { IPagination } from '../models/pagination.model';
import GridItems from './GridItems';

test('should GridItems show no data message', () => {
  render(<GridItems />);
  const linkElement = screen.getByText('No results found...');
  expect(linkElement).toBeInTheDocument();
});

const customRender = (ui: ReactNode, providerProps: IPagination<IGridItem>) => {
  return render(
    <GridPaginationContext.Provider value={providerProps}>
      {ui}
    </GridPaginationContext.Provider>
  );
};

test('should GridItems show empty list message', () => {
  customRender(<GridItems />, {
    paginatedItems: [],
    numberOfItems: 0,
  } as unknown as IPagination<IGridItem>);
  const linkElement = screen.getByText('No results found...');
  expect(linkElement).toBeInTheDocument();
});

const providerProps = {
  paginatedItems: [
    { id: '1', title: 'hello', description: 'hello2', imagePath: '#' },
    { id: '2', title: 'hello3', description: 'hello4', imagePath: '#' },
  ],
  numberOfItems: 2,
} as IPagination<IGridItem>;

test('should GridItems show title of GridItem', () => {
  customRender(<GridItems />, providerProps);
  const linkElement = screen.getByText(providerProps.paginatedItems[1].title);
  expect(linkElement).toBeInTheDocument();
});

test('should GridItems show description of GridItem', () => {
  customRender(<GridItems />, providerProps);
  const linkElement = screen.getByText(
    providerProps.paginatedItems[0].description
  );
  expect(linkElement).toBeInTheDocument();
});
