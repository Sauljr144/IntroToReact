import { useState } from "react";
import styles from './ListGroup.module.css'
// {items: [], heading: string}
//TypeScript feature called Interface
// using an interface we can defined the shape or the interface of an object

interface ListPorps {
  items: string[];
  heading: string;
  onSelectItem: (item:string) => void
}

function ListGroup({items, heading, onSelectItem}:ListPorps) {
 
  console.log;

  const [selectedIndex, setSelectedIndex] = useState(-1);

  // let selectedIndex = 0;
  // const arr = useState(0);
  // arr[0] variab;e {selectedIndex}
  // arr[1] updater function

  // Event handler wich is a funtion to handle our onClick
  // const handleClick = (e:MouseEvent) => console.log(e);

  // items = [];
  //   const message = items.length === 0 ? <p>No item found</p> : null;

  //   const getMessage = () => {
  //     return items.length === 0 ? <p>No item found</p> : null;
  //   }

  //   if (items.length === 0) {
  //     return (
  //       <>
  //         <h1>List</h1>
  //         <p>No item found</p>
  //       </>
  //     );
  //   }

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className={[styles.listGroup, styles.container].join(' ')}>
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? styles['listGroupItem']
                : styles['listGroupItem']
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
