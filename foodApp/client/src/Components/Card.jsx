import React from "react";

const Card = (props) => {
  let options = props.options;
  let priceoptions = Object.keys(options);

  const handleAddCart=()=>{
    
  }
  return (
    <>
      <div>
        <div class="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
         
          <img src={props.imgSrc} class="card-img-top" alt="..." style={{height:"190px",objectFit:"fill"}} />
          <div class="card-body">
            <h5 class="card-title">{props.foodName}</h5>

            <div className="container w-100">
              <select className="m-2  h-100 bg-primary">
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {" "}
                      {i + 1}
                    </option>
                  );
                })}
              </select>
              <select className="m-2  h-100 bg-primary">
                {priceoptions.map((data) => {
                  return (
                    <option key={data} value={data}>
                      {data}
                    </option>
                  );
                })}
              </select>
              <div className="d-inline fs-5">Total Price</div>
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
