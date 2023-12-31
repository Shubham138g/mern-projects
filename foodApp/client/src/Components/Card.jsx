import React ,{useEffect, useRef, useState}from "react";
import {useCart,useDispatchCart} from '../Components/ContextReducer.js';

const Card = (props) => {
  let dispatch=useDispatchCart();
  let data=useCart();
  const priceRef=useRef();
  let options = props.options;
  let priceoptions = Object.keys(options);
  const  [qty, setQty] = useState(1);
  const  [size, setSize] = useState("");

  const handleAddCart=async()=>{
    let food=[]
    for(const item of data)
    {
      if(item.id===props.foodItem._id){
        food=item;
        break;
      }
    }
    if(food !==[]){
      // console.log(food);
    if(food.size===size){
      await dispatch({type:"UPDATE",id:props.foodItem._id,price:finalPrice,qty:qty})
      return
    }
    else if(food.size !==size){
    await dispatch({type:"ADD",id:props.foodItem._id,name:props.foodItem.name,price:finalPrice,qty:qty,size:size})
    return
    }
    return
  }
  await dispatch({type:"ADD",id:props.foodItem._id,name:props.foodItem.name,price:finalPrice,qty:qty,size:size})
    console.log(data);
  }
  let finalPrice=qty * parseInt(options[size]);
  useEffect(()=>{
    setSize(priceRef.current.value);
  },[])
  return (
    <>
      <div>
        <div class="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
         
          <img src={props.foodItem.img} class="card-img-top" alt="..." style={{height:"190px",objectFit:"fill"}} />
          <div class="card-body">
            <h5 class="card-title">{props.foodItem.name}</h5>

            <div className="container w-100">
              <select className="m-2  h-100 bg-primary" onChange={(e)=>setQty(e.target.value)}>
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>
              <select className="m-2  h-100 bg-primary" ref={priceRef} onChange={(e)=>setSize(e.target.value)}>
                {priceoptions.map((data) => {
                  return (
                    <option key={data} value={data}>
                      {data}
                    </option>
                  );
                })}
              </select>
              <div className="d-inline fs-5">₹{finalPrice}/-</div>
            </div>
            <hr />
            <div className="btn btn-primary justify-center ms-2" onClick={handleAddCart}>Add to cart</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
