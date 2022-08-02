//Responsável por apresentar as informações do produto: 
//nome, categoria e preço, além de um button para adicionar ao carrinho;

import "./Style/product.css"

function Product({handleClick, product}){
    
    return (
        <div className="DivHamburger">
            <div className="DivItem">
                <figure className="FigureHamburger">
                    <img className="ImageHamburger" src={product.img} alt={product.name}></img>
                </figure>
            </div>

            <div className="DivDescription">
                <h2 className="ProductName">{product.name}</h2>
                <h3 className="ProductCategory">{product.category}</h3>
                <p className="ProductPrice">R$ {product.price}</p>

                <button className="ProductBtn" 
                onClick={() => handleClick(product.id)}>Add ao Carrinho</button>
            </div>

        </div>
    )
}

export default Product
