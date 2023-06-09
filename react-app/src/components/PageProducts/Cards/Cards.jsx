import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { Box } from '@mui/material';
import ProductCard from '../../ProductCard';
import { cardsWrapperStyled, cardWrapperStyled } from './style';

function Cards() {
  const location = useLocation();
  const currentCategory = location.pathname;

  const { products } = useSelector(state => state.products);
  const filteredProducts = products.filter(product => product.mainCategory === currentCategory);

  const { numPage } = useSelector(state => state.numPage);
  const isInCart = false;

  return (
    <Box id="cardsWrapper" sx={cardsWrapperStyled}>
      {filteredProducts.slice((numPage - 1) * 4, (numPage - 1) * 4 + 4).map(item => (
        <Box id="cardWrapper" key={item.id} sx={cardWrapperStyled}>
          <ProductCard productItem={item} isInCart={isInCart} />
        </Box>
      ))}
    </Box>
  );
}

export default Cards;