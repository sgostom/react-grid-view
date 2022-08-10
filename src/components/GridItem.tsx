import { IGridItem } from '../models/grid-item.model';

interface GridItemProps {
  gridItem: IGridItem;
}

const GridItem = ({ gridItem }: GridItemProps) => {
  return (
    <div className="relative m-2 w-64 overflow-hidden rounded-md border border-gray-300 shadow-md">
      <div className="relative h-64  w-full overflow-hidden bg-gray-300">
        <div
          className="flex h-64 w-full items-center justify-center bg-cover bg-center opacity-80 blur"
          style={{
            backgroundImage: `url("${gridItem.imagePath}")`,
          }}
        ></div>
        <img
          className="absolute inset-2/4	z-10 max-h-full max-w-full -translate-x-1/2	-translate-y-1/2"
          src={gridItem.imagePath}
          alt={gridItem.title}
        ></img>
      </div>

      <div className="bg-white p-2">
        <div className="text-xl font-semibold">{gridItem.title}</div>
        <div>{gridItem.description}</div>
      </div>
    </div>
  );
};

export default GridItem;
