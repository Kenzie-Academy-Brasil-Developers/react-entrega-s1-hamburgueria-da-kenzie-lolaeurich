import { useEffect, useState } from "react"

import Cart from "./Components/Cart";
import ProductsList from "./Components/ProductsList";

import "./Components/Style/App.css"

function App() {

//name, category, price, img

  //Array de produtos iniciando vazio
  const [products, setProducts] = useState([]);

  //Array que filtra os produtos iniciando vazio
  const [filteredProducts, setFilteredProducts] = useState([]);

  //Produtos vendidos
  const [currentSale, setCurrentSale] = useState([])

  //Total do carrinho de compras
  const [cartTotal, setCartTotal] = useState(0)

  const [userInput, setUserInput] = useState("")


  //Uso da API para pegar os produtos
  useEffect(() => {      
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
    .then(res => res.json())
    .then(data => setProducts(data))
  }, [])


  //Função responsável por filtrar os produtos, independentemente da escrita (maiúscula ou minúscula)
  const showProducts = (input) => {
    const myProducts = input.toLowerCase()
    setUserInput(input)
    setFilteredProducts(
      products.filter(
        (item) => item.name.toLowerCase().includes(myProducts) || item.category.toLowerCase().includes(myProducts)
      )
    )
  }
  
  //junção dos itens no carrinho com os novos add
  const handleClick = (productId) => {
    const novoProd = products.find((item) => item.id === productId);

    !currentSale.some((item) => item.id === novoProd.id) &&
      setCurrentSale([...currentSale, novoProd]);
  };

  //função para soma do meu total do carrinho
  const total = () => {
    const vendas = currentSale.reduce((acumulador, item) => acumulador + item.price, 0);
    setCartTotal(vendas);
  };


  return (
    <>
    <div className="DivApp">

      <header className="AppHeader">

        <div className="DivLogo">

          <h2 className="Logo">Burger</h2><h2 className="Logo2">Kenzie</h2>

        </div>

        <nav className="HeaderNav">

          <input className="HeaderInput"
          type="text"
          placeholder="Pesquise aqui"
          value={userInput}
          onChange={(event) => showProducts (event.target.value)}
          />

          <button className="HeaderButton"
          onClick={() => showProducts(userInput)}>Pesquisar</button>

        </nav>
      </header>

      <div className="ProductsContainer">
      <ProductsList products={products} filteredProducts={filteredProducts} userInput={userInput} handleClick={handleClick}/>
     
      <Cart currentSale={currentSale} cartTotal={cartTotal} setCurrentSale={setCurrentSale} total={total} handleClick={handleClick}/>
      </div>
    </div>
    </>
  );
}
export default App