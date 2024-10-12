import { useEffect } from "react";
import { API } from "../services";
import { useState } from "react";

function Home() {
  const [products, setProducts] = useState([]);

  async function buscarProdutos() {
    const request = await API.get("/products");
    setProducts(request.data);
  }

  useEffect(() => {
    buscarProdutos();
  }, []);

  console.log(products);

  return (
    <>
      <section className=" px-5 w-screen" aria-label="Produtos">
        <ul className="grid list-none p-0">

          {products.map((product) => (
            <li className="col-12 md:col-3">
              <div className="shadow-4 p-3 border-round-md">
                <div className="relative">
                  <img
                    className="w-full p-3"
                    src={product.image}
                    alt={product.title}
                    style={{height: '300px', objectFit: 'contain'}}
                  />
                  <h6 className="absolute top-0 right-0 bg-primary py-1 px-2 border-round-md">
                    {product.rating.rate}
                  </h6>
                </div>
                <h3 className="mb-0 white-space-nowrap overflow-hidden text-overflow-ellipsis">{product.title}</h3>
                <h6 className="mt-0 text-primary uppercase">{product.category}</h6>
                <h3 className="mb-0">{product.price}</h3>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default Home;
