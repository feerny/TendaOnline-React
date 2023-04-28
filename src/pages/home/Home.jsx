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
        response.data.map((data) => {
          if (data.category==="men's clothing") {
            arrayrate.push(data.rating.rate);
          }

        });
        console.log(arrayrate);
        
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
            if (products2.length===1) {
              products2.map(dataProducts2=>productsFinals.push(dataProducts2))
            }else if(products2.length>1){
              var arrayProducts2=[]
              products2.map(dataProducts2=>arrayProducts2.push(dataProducts2.rating.count))
              arrayProducts2=arrayProducts2.sort((a, b) => b - a);
              arrayProducts2=products2.filter(dataFilter=>dataFilter.rating.count===arrayProducts2[0])
              productsFinals.push(...arrayProducts2);
            }
        }
        setbestProducts(productsFinals);
    })
      .catch(function (error) {
        console.log(error);
      })
  }, []);

  return (
    <div>
      <Nav linkNavActivo={linkNavActivo} />
      <h2>Nuestros mejores productos</h2>
      <div class="d-flex justify-content-center">
      <Carrousel bestProducts={bestProducts}/>
      </div>
    </div>
  );
}

export default Home;
