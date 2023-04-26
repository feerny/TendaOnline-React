import React, { useEffect, useState } from "react";
import Nav from "../../components/nav/Nav";
import Carrousel from "../../components/ui/carrousel/Carrousel";
import axios from "axios";

function Home(props) {
  const [linkNavActivo, setlinkNavActivo] = useState("");
  const [bestProducts, setbestProducts] = useState([]);
  useEffect(() => {
    setlinkNavActivo("nav-link-1");
    axios
      .get("https://fakestoreapi.com/products")
      .then(function (response) {
        // handle success
        var arrayrate = [];
        var arraycount = [];
        response.data.map((data) => {
          arraycount.push(data.rating.count);
          return arrayrate.push(data.rating.rate);
        });
        
        arrayrate = arrayrate.filter((valor, indice) => {
          return arrayrate.indexOf(valor) === indice;
        });
        arrayrate = arrayrate.sort((a, b) => b - a);
        arrayrate = [arrayrate[0], arrayrate[1], arrayrate[2]];
        const products=response.data.filter(dataFilter=>dataFilter.rating.rate===arrayrate[0] || dataFilter.rating.rate===arrayrate[1] || dataFilter.rating.rate===arrayrate[2])
        var productsFinals=[]
        productsFinals=products.filter(dataFilter=>dataFilter.rating.rate===arrayrate[0])
        if (productsFinals.length!==3) {
            const products2=products.filter(dataFilter=>dataFilter.rating.rate===arrayrate[1]);
            products2.map(dataProducts2=>productsFinals.push(dataProducts2))
        }
        console.log(productsFinals);
    })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);

  return (
    <div>
      <Nav linkNavActivo={linkNavActivo} />
      <Carrousel />
    </div>
  );
}

export default Home;
