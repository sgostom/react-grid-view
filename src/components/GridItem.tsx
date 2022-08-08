import { IGridItem } from '../models/grid-item.model';

interface GridItemProps {
  gridItem: IGridItem;
}

const GridItem = ({ gridItem }: GridItemProps) => {
  return (
    <div className="m-2 w-48 rounded-md border">
      <img src={gridItem.imagePath} alt={gridItem.title}></img>

      <div className="p-2">
        <div className="text-xl font-semibold">{gridItem.title}</div>
        <div>{gridItem.description}</div>
      </div>
    </div>
  );
};

export default GridItem;
