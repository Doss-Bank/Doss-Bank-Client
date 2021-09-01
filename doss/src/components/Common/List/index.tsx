import { ReactElement, forwardRef, Ref } from "react";

interface Props<T> {
  className?: string;
  items: Array<T>;
  renderItems: (item: T, index: number) => ReactElement;
  ref?: Ref<HTMLDivElement>;
}

const List = forwardRef<HTMLDivElement, Props<any>>(
  ({ items, renderItems, className }, ref) => {
    return (
      <div className={className} ref={ref}>
        {items.map((item, index) => renderItems(item, index))}
      </div>
    );
  }
);

export default List;
