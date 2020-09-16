import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/SingleTitle/TheBoyss2/1500x600_Hero-Tall_p._CB404993995_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="456890"
            title="The Lean Startup"
            price={29.92}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
            rating={5}
          />
          <Product
            id="604890"
            title="Savya home® by Apex Chair Zoom Home Office Revolving Chair Chrome Painted Metal Base(Zoom)"
            price={258.92}
            image="https://m.media-amazon.com/images/I/71E14ykuvyL._AC_UL320_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="459030"
            title="Fitbit Inspire Health and Fitness Tracker (Black)"
            price={258.92}
            image="https://m.media-amazon.com/images/I/71kobXi3UHL._AC_UY218_.jpg"
            rating={5}
          />
          <Product
            id="323340"
            title="Amazon Echo (3rd Gen)"
            price={258.92}
            image="https://m.media-amazon.com/images/I/7128HRanJgL._AC_UY218_.jpg"
            rating={5}
          />
          <Product
            id="456230"
            title="OnePlus 8 Pro (Onyx Black 8GB RAM+128GB Storage)"
            price={258.92}
            image="https://m.media-amazon.com/images/I/61YSMhOd5EL._AC_UL320_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="895660"
            title="Apple iMac Pro (27-inch, 3.0GHz 10-core Intel Xeon W Processor, 32GB RAM, 1TB SSD Storage)"
            price={258.92}
            image="https://images-na.ssl-images-amazon.com/images/I/81XI2xLLjYL._SL1500_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
