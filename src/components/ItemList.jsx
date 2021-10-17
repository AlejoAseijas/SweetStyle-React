import { memo } from "react";
import Item from "./Item";

const ItemList = memo(({ data }) => {
  localStorage.setItem("products", JSON.stringify(data));
  return (
    <>
      {data.map((data) => (
        <Item product={data} />
      ))}
    </>
  );
});

export default ItemList;
