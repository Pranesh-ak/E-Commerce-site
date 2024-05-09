import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useGlobalContext } from "../context";

const data = [
  {
    name:"Samsung Galaxy S9",
    processor:"Qualcomm Snapdragon 845",
    ram:"8",
    storagecap:"128",
    battery:"4000",
    price:"29000",
    description:"A great phone with powerful features.",
  },
  {
    name: "Samsung Galaxy S10",
    processor: "Qualcomm Snapdragon 855",
    ram: "8GB",
    storagecap: "128GB",
    battery: "3400mAh",
    price: "$450.00",
    description: "A premium smartphone with top-notch features."
},
{
    name: "Google Pixel 3",
    processor: "Qualcomm Snapdragon 845",
    ram: "8GB",
    storagecap: "128GB",
    battery: "2915mAh",
    price: "$350.00",
    description: "A high-quality Android device known for its exceptional camera."
},
{
    name: "OnePlus 6T",
    processor: "Qualcomm Snapdragon 845",
    ram: "8GB",
    storagecap: "128GB",
    battery: "3700mAh",
    price: "$400.00",
    description: "A flagship killer phone with a large battery and fast performance."
},
{
    name: "Xiaomi Mi 9",
    processor: "Qualcomm Snapdragon 855",
    ram: "8GB",
    storagecap: "128GB",
    battery: "3300mAh",
    price: "$350.00",
    description: "An affordable flagship smartphone with impressive specifications."
},
{
    name: "LG G7 ThinQ",
    processor :"Qualcomm Snapdragon 845",
    ram: "8GB",
    storagecap: "128GB",
    battery: "3000mAh",
    price: "$320.00",
    description: "A feature-rich device with a focus on audio quality."
},
{
    name: "Sony Xperia XZ3",
    processor: "Qualcomm Snapdragon 845",
    ram: "8GB",
    storagecap: "128GB",
    battery: "3300mAh",
    price: "$380.00",
    description: "A premium Sony smartphone with a stunning display."
},
{
    name: "HTC U12+",
    processor: "Qualcomm Snapdragon 845",
    ram: "8GB",
    storagecap: "128GB",
    battery: "3500mAh",
    price: "$380.00",
    description: "A high-end HTC device known for its unique design."
},
{
    name: "Nokia 9 PureView",
    processor: "Qualcomm Snapdragon 845",
    ram: "8GB",
    storagecap: "128GB",
    battery: "3320mAh",
    price: "$370.00",
    description: "A Nokia flagship phone with a focus on photography."
},
{
    name: "Asus ZenFone 6",
    processor: "Qualcomm Snapdragon 855",
    ram: "8GB",
    storagecap: "128GB",
    battery: "5000mAh",
    price: "$420.00",
    description: "A versatile phone with a unique flip camera design."
}
];

function HomePage() {
  const initial=[];
  const {lis,setLis}=useGlobalContext(initial)  
  const nav = useNavigate();
  return (
    <>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Welcome to PRYS.com</h1>
          </div>
        </div>
      </section>

      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col" style={{
              gap: "100px"
            }}>
              {data.map((data, index) => {
                return (
                  <div className="card shadow-sm" key={index} style={{
                    minWidth: "80vw",
                  }}>
                    <div className="card-body">
                      <b className="card-text">{data.name}</b>
                      <p className="card-text">PROCESSOR:{data.processor}</p>
                      <p className="card-text">RAM : {data.ram}</p>
                      <p className="card-text">STORAGE : {data.storagecap}</p>
                      <p className="card-text">BATTERY : {data.battery}</p>
                      <p className="card-text">{data.description}</p>
                      <p className="card-text">{data.price}</p>
                      <div className="d-flex justify-content-center align-items-center">
                        <div className="btn-group">
                          <button
                            type="button"
                            className="btn btn-lg btn-outline-success mb-3 mt-3"
                            onClick={() => { nav("/purchase/");
                            setLis(data)
                            }}
                          >
                            Purchase
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <script
        src="/docs/5.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm"
        crossOrigin="anonymous"
      ></script>
    </>
  );
}

export default HomePage;
