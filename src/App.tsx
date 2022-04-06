import { GlobalStyle, StyledApp } from './global-styles';
import { useEffect, useState } from 'react';
import { FilteredProducts, Header, Products } from './components';
import { IProduct } from './types';

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFilter, setIsFilter] = useState(false);

  const getProducts = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('https://artisant.io/api/products');
      const data = await res.json();
      setProducts(data.data.products);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const onSetFilter = () => {
    setIsFilter((state) => !state);
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    const filterProduct = products.filter(
      (product) => product.quantity_available > 0
    );
    setFilteredProducts(filterProduct);
  }, [isFilter, products]);

  return (
    <StyledApp>
      <GlobalStyle />
      <Header>
        <div className='header-content'>
          <div>
            <div className='header-explore'>Explore</div>
            <div className='header-slogan'>
              Buy and sell digital fashion NFT art
            </div>
          </div>
          <FilteredProducts isFilter={isFilter} setIsFilter={onSetFilter} />
        </div>
      </Header>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <Products products={isFilter ? filteredProducts : products} />
      )}
    </StyledApp>
  );
}

export default App;
