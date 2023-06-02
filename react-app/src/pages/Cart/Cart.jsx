// import { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

// import { useSelector, useDispatch } from 'react-redux';
import { Card, Typography, InputAdornment, IconButton } from '@mui/material';
import DeleteOutlineTwoToneIcon from '@mui/icons-material/DeleteOutlineTwoTone';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import IconBreadcrumbs from './Breadcrums';
import ProductCard from '../../components/ProductCard';
import './CartStyles.scss';
import {
  FormBox,
  FormTitle,
  FormTitlePromo,
  FormText,
  OrderButton,
  SaleBox,
  TotalBox,
  PromoBox,
  HeaderBox,
  TextFieldPromo
} from './Style';
// eslint-disable-next-line import/order
import { Box, Container } from '@mui/system';

const Cart = () => {
  const products = useSelector(state => state.itemCards.items);
  // const dispatch = useDispatch();

  // const handleRemoveItem = itemId => {
  //   dispatch(removeItem(itemId));
  // };

  // const [count, setCount] = useState(0);

  // const handleIncrement = () => {
  //   setCount(prevCount => prevCount + 1);
  // };

  // const handleDecrement = () => {
  //   if (count > 0) {
  //     setCount(prevCount => prevCount - 1);
  //   }
  // };

  return (
    <div>
      <IconBreadcrumbs />
      <HeaderBox>
        <Typography variant="h4" gutterBottom>
          Корзина
        </Typography>
        <IconButton>
          <DeleteOutlineTwoToneIcon sx={{ fill: 'rgba(130, 130, 130, 1)' }} />
          <Typography>Очистити корзину</Typography>
        </IconButton>
      </HeaderBox>
      <Container
        sx={{
          width: 1200,
          display: 'flex',
          flexDirection: 'row-reverse',
          fontFamily: 'Roboto'
        }}
      >
        <Box>
          <FormBox>
            <FormTitle>Ваше Замовлення</FormTitle>
            <SaleBox>
              <FormText>Знижка </FormText>
              <FormText>- 48грн</FormText>
            </SaleBox>
            <TotalBox>
              <FormText>Разом без доставки</FormText>
              <FormText> - 48грн</FormText>
            </TotalBox>
            <NavLink to="/orderprocess">
              <OrderButton>Оформити замовлення</OrderButton>
            </NavLink>

            <PromoBox mt={2}>
              <FormTitlePromo>Промокод</FormTitlePromo>
              <TextFieldPromo
                id="promo-code"
                label="Введіть промокод"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton>
                        <ExpandCircleDownIcon sx={{ fill: 'rgba(47, 211, 174, 1)', rotate: '-90deg' }} />
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            </PromoBox>
          </FormBox>
        </Box>
        <Container
          sx={{
            width: 830,
            display: 'flex',
            flexDirection: 'column',
            fontFamily: 'Roboto'
          }}
        >
          <Card style={{ marginBottom: '1rem' }}>
            {/* <CardContentStyled> */}
            {products.map(item => (
              <ProductCard key={item.id} productItem={item} />
            ))}
            {/* </CardContentStyled> */}
          </Card>
        </Container>
      </Container>
    </div>
  );
};

export default Cart;
