import React, { useEffect, useState } from "react";
import Nav from "../../components/nav/Nav";
import Carrousel from "../../components/ui/carrousel/Carrousel";
import axios from "axios";

function Home(props) {
  async function axiosConsumo(params) {
    var productsFinals = [];
    await axios
      .get("https://fakestoreapi.com/products")
      .then(function (response) {
        // handle success
        var arrayrate = [];
        response.data.map((data) => {
          if (data.category === params) {
            arrayrate.push(data.rating.rate);
          }
        });
        arrayrate = arrayrate.filter((valor, indice) => {
          return arrayrate.indexOf(valor) === indice;
        });
        arrayrate = arrayrate.sort((a, b) => b - a);
        arrayrate = [arrayrate[0], arrayrate[1], arrayrate[2]];
        const products = response.data.filter(
          (dataFilter) =>
            dataFilter.rating.rate === arrayrate[0] ||
            dataFilter.rating.rate === arrayrate[1] ||
            dataFilter.rating.rate === arrayrate[2]
        );

        productsFinals = products.filter(
          (dataFilter) => dataFilter.rating.rate === arrayrate[0]
        );
        if (productsFinals.length !== 3) {
          const products2 = products.filter(
            (dataFilter) => dataFilter.rating.rate === arrayrate[1]
          );
          if (products2.length === 1) {
            products2.map((dataProducts2) =>
              productsFinals.push(dataProducts2)
            );
          } else if (products2.length > 1) {
            var arrayProducts2 = [];
            products2.map((dataProducts2) =>
              arrayProducts2.push(dataProducts2.rating.count)
            );
            arrayProducts2 = arrayProducts2.sort((a, b) => b - a);
            arrayProducts2 = products2.filter(
              (dataFilter) => dataFilter.rating.count === arrayProducts2[0]
            );
            productsFinals.push(...arrayProducts2);
          }
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    return productsFinals;
  }
  const [linkNavActivo, setlinkNavActivo] = useState("");
  const [bestProductsRopaHombre, setbestProductsRopaHombre] = useState([]);
  const [bestProductsJewelwry, setbestProductsJewelwry] = useState([]);
  const [bestProductselectronics, setbestProductselectronics] = useState([]);
  const [bestProductsRopaMujer, setbestProductsRopaMujer] = useState([]);
  useEffect(() => {
    setlinkNavActivo("nav-link-1");
    async function fetchData() {
      const dataRopaHombre = await axiosConsumo("men's clothing");
      setbestProductsRopaHombre(dataRopaHombre);
      const datajewelery = await axiosConsumo("jewelery");
      setbestProductsJewelwry(datajewelery);
      const dataelectronics = await axiosConsumo("electronics");
      setbestProductselectronics(dataelectronics);
      const dataRopaMujer = await axiosConsumo("women's clothing");
      setbestProductsRopaMujer(dataRopaMujer);
    }
    fetchData();
  }, []);

  return (
    <div>
      <Nav linkNavActivo={linkNavActivo} />
      <h2>Nuestros mejores productos</h2>
      <div class="row row-cols-1 row-cols-md-2 g-0">
        <div class="col">
          <div class="card">
            <div class="card-img-top">
              <Carrousel
                bestProducts={bestProductsRopaHombre}
                dark={true}
                idDife={"fdewewfd"}
              />
            </div>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div>
              <Carrousel
                bestProducts={bestProductsJewelwry}
                idDife={"fgdfhgfhs"}
              />
            </div>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div>
              <Carrousel
                bestProducts={bestProductsRopaMujer}
                idDife={"sdfst435"}
                dark={true}
              />
            </div>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div>
              <Carrousel
                bestProducts={bestProductselectronics}
                idDife={"gfdgteer"}
              />
            </div>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
