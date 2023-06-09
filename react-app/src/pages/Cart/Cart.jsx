// import { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {
  Box
  // Container
} from '@mui/system';
import {
  // Card,
  Typography,
  InputAdornment,
  IconButton
} from '@mui/material';
import DeleteOutlineTwoToneIcon from '@mui/icons-material/DeleteOutlineTwoTone';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import IconBreadcrumbs from './Breadcrums';
import ProductCard from '../../components/ProductCard';
import './Style/CartStyles.scss';
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

const Cart = () => {
  const productItemCart = useSelector(state => state.itemCards.items);

  const isInCart = true;

  return (
    <Box>
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
      <ContainerBox>
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

            <OrderButton>
              <NavLink to="/orderprocess">Оформити замовлення</NavLink>
            </OrderButton>

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
        <CardBox>
          {productItemCart.map(item => (
            <ProductCard key={item.id} productItem={item} isInCart={isInCart} />
          ))}
        </CardBox>
      </ContainerBox>
    </Box>
  );
};

export default Cart;
