import React, { FC } from "react";
import { Item } from "./Item";

export interface TypeItemsListNavBar {
  title: string;
  to: string;
}
interface Props {
  itemsListNavBar: TypeItemsListNavBar[];
}
export const ItemsNavBar: FC<Props> = ({ itemsListNavBar }) => {
  return (
    <div className="flex justify-center items-center gap-3">
      {itemsListNavBar.map(({ title, to }, index) => (
        <Item key={index} title={title} to={to} />
      ))}
    </div>
  );
};
