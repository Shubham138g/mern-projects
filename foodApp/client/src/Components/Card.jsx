import React from "react";

const Card = () => {
  return (
    <>
      <div>
        <div class="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
          <img src="https://imgs.search.brave.com/fq5XQP7deYTygo4Hc4ABXWgiAdgR-YMk9RFVFTh56s8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vcGljanVt/Ym8uY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy9mcmllcy1mb29k/LWZyZWUtcGhvdG8u/anBnP3c9NjAwJnF1/YWxpdHk9ODA" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the.</p>
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
                <option value="half">Half</option>
                <option value="Full">Full</option>
              </select>
              <div className="d-inline fs-5">Total Price</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
