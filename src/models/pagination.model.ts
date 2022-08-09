export interface IPagination<T> {
  paginatedItems: T[];
  canGoNext: boolean;
  goNext: () => void;
  canGoPrev: boolean;
  goPrev: () => void;
  pageLimit: number;
  offset: number;
  numberOfItems: number;
}
