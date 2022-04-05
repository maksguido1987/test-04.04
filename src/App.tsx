import { GlobalStyle, StyledApp } from './global-styles';
import { useEffect, useState } from 'react';
import { Header, Products } from './components';

function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getProducts = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('https://artisant.io/api/products');
      const data = await res.json();
      setProducts(data.data.products);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <StyledApp>
      <GlobalStyle />
      <Header>
        <div className='header-explore'>Explore</div>
        <div className='header-slogan'>
          Buy and sell digital fashion NFT art
        </div>
      </Header>
      <Products products={products} isLoading={isLoading} isError={isError} />
    </StyledApp>
  );
}

export default App;
