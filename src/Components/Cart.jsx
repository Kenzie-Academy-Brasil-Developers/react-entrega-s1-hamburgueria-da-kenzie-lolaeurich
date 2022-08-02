//Responsável por apresentar os produtos inseridos no carrinho e o valor total da compra.
import "./Style/cart.css"

function Cart({currentSale, setCurrentSale}){

    //Valor total do meu carrinho
    const total = currentSale.reduce((valorAtual, acumulador) => {
        return acumulador.price + valorAtual
    }, 0)

    //Função dediminuir valor quando removo um item do carrinho
    const removeCart = () => {
        setCurrentSale([])
    }

    //função de remover produto
    const removeHamburger = (obj) => {
        setCurrentSale(currentSale.filter((item, index) => index !== obj))
    }

    return (

        <aside className="Aside">

        <div className="Cart">
            <header className="Header">
                <h2 className="CartName">Meu carrinho</h2>
            </header>

            <section className="CartSpace">
                <>
                    {currentSale.length > 0 ? (
                        <>
                            <ul className="CartList">
                                {currentSale.map((product, obj) => (
                                    <li className="Item" key={obj}>
                                        <figure className="Figure">
                                            <img className="Image" src={product.img} alt={product.name}></img>
                                        </figure>

                                        <div className="DivDescription">
                                            <h3 className="ProductName">{product.name}</h3>
                                            <p className="ProductCategory">{product.category}</p>
                                        </div>

                                        <button className="CartButton"
                                        onClick={() => removeHamburger(obj)}>Remover</button>

                                    </li>
                                ))}
                            </ul>

                            <div className="CartValue">
                                <label className="TotalValue">Total</label>
                                <label className="Price">{total.toLocaleString("pt-BR", {
                                    style:"currency",
                                    currency:"BRL"
                                })} </label>
                            </div>  

                            <button className="RemoveBtn"
                            onClick={() => removeCart()}>Remover tudo</button>  
                        </>
                    )
                    :
                    (
                        
                        <div className="EmptyCart">
                            <h3 className="CartQuote">Ainda não há itens no carrinho</h3>
                            <p className="CartQuote2">Adicione algum produtos</p>
                        </div>

                    )}
                </>
            </section>
        </div>
        </aside>
    )
}

export default Cart