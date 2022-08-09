import { IGridItem } from '../models/grid-item.model';

interface GridItemProps {
  gridItem: IGridItem;
}

const GridItem = ({ gridItem }: GridItemProps) => {
  return (
    <div className="m-2 w-64 rounded-md border">
      <div className="flex h-64 w-full items-center justify-center bg-gray-300">
        <img
          className="max-h-full max-w-full"
          src={gridItem.imagePath}
          alt={gridItem.title}
        ></img>
      </div>

      <div className="p-2">
        <div className="text-xl font-semibold">{gridItem.title}</div>
        <div>{gridItem.description}</div>
      </div>
    </div>
  );
};

export default GridItem;
