import React from "react";
import style from "./styles/SideBar.module.css";
const SideBar = () => {
  interface Item {
    id: string;
    title: string;
    isActive: boolean;
  }
  const items: Array<Item> = [
    {
      id: "1",
      title: "Women's Fashion",
      isActive: true,
    },
    {
      id: "2",
      title: "Men's Fashion",
      isActive: true,
    },
    {
      id: "3",
      title: "Electronics",
      isActive: true,
    },
    {
      id: "4",
      title: "Home & Lifestyle",
      isActive: true,
    },
    {
      id: "5",
      title: "Medicine",
      isActive: true,
    },
    {
      id: "6",
      title: "Sports & Outdoor",
      isActive: true,
    },
    {
      id: "7",
      title: "Baby's & Toys",
      isActive: true,
    },
    {
      id: "8",
      title: "Groceries & Pets",
      isActive: true,
    },
    {
      id: "9",
      title: "Health & Beauty",
      isActive: true,
    },
  ];
  return (
    <div className={style.container}>
      <ul className={style.unorderedList}>
        {items.map((item, index: number) => {
          return (
            <li key={item.id} className={style.listItem}>
              {item.isActive && item.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SideBar;
