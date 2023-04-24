//import { useState } from "react";
import { useDispatch } from "react-redux";
import style from "./Count.module.css";
import { addProduct, removeProduct } from "../../store/order/orderSlice";

export const Count = ({count, id}) => { 
  const dispatch = useDispatch();
  //const [count, setCount] = useState(props.count);

  const addCount = () => {
    dispatch(addProduct({ id }));
    //setCount(count + 1);
    
  }

  const removeCount = () => {
    dispatch(removeProduct({ id }));
    /*f (count>1){
      setCount(count - 1);
    }*/
  }

  return (
    <div className={style.count}>
      <button className={style.minus} onClick={removeCount}>-</button>
      <p className={style.amount}>{count}</p>
      <button className={style.plus} onClick={addCount}>+</button>
    </div>
  )
};
