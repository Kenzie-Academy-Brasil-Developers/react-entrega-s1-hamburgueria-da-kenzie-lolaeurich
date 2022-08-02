//Responsável por renderizar a lista de produtos
import Product from "./Product"

import "./Style/productsList.css"

function ProductsList({products, filteredProducts, userInput, handleClick}){
    return (
        <>
            {filteredProducts.length > 0 ?
            (
                <div className="MainMenu">
                    <h2 className="Tittle">Resultados referentes a:
                        <p className="ProductType">{userInput}</p>
                    </h2>

                    <div className="Filter">
                        {filteredProducts?.map((item, index) => (
                            <Product key={index} handleClick={handleClick} product={item}/>
                        ))}
                    </div>
                </div>
            )
            :
            (
                <div className="MainMenu2">
                    <>
                        {userInput.length > 0 && (
                            <h3 className="Tittle2">Nenhum resultado encontrado para:
                                <p className="ProductType2">{userInput}</p>
                            </h3>
                        )}
                    </>

                    <div className="Filter2">
                            {products?.map((item, index) => (
                                <Product key={index} handleClick={handleClick} product={item}/>
                            ))}
                    </div>
                </div>
            )}
        </>
    )  
    }  

export default ProductsList

