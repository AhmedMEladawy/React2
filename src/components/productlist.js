import Product from './product'
import ProductsData from '../res/productsData'

const Productlist = () => {
    return (
        <div>
            <Product 
                Name={ProductsData[0].Name} 
                Source={ProductsData[0].Source} 
                Description={ProductsData[0].Description} 
                Price={ProductsData[0].Price}
            />
            <Product 
                Name={ProductsData[1].Name} 
                Source={ProductsData[1].Source} 
                Description={ProductsData[1].Description} 
                Price={ProductsData[1].Price}
            />
            <Product 
                Name={ProductsData[2].Name} 
                Source={ProductsData[2].Source} 
                Description={ProductsData[2].Description} 
                Price={ProductsData[2].Price}
            />
            <Product 
                Name={ProductsData[3].Name} 
                Source={ProductsData[3].Source} 
                Description={ProductsData[3].Description} 
                Price={ProductsData[3].Price}
            />
        </div>
    );
}

export default Productlist;
