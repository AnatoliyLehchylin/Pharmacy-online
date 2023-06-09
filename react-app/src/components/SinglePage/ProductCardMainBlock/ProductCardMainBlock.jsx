import * as React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Typography, Stack, Button, Box, Grid, Rating, ButtonBase } from '@mui/material';

import Checkbox from '@mui/material/Checkbox';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { addToFavouriteLocalStor } from '../../../utils/addToFavouriteLocalStor';

import { addToFavouriteItems, deleteFromFavouriteItems } from '../../../redux/slice/favouriteItems';
import { removeFromFavouriteLocalStor } from '../../../utils/removeFromFavouriteLocalStor';
import VerticalImgTabPanel from '../VerticalImgTabPanel';
import s from './ProductCardMainBlock.module.scss';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const ProductCardMainBlock = ({ productItem }) => {
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);
  const [value, setValue] = useState(2);

  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = event => {
    event.preventDefault();
    setIsFavorite(!isFavorite);

    if (!isFavorite) {
      addToFavouriteLocalStor(productItem);
      dispatch(addToFavouriteItems(productItem));
    } else {
      removeFromFavouriteLocalStor(productItem);
      dispatch(deleteFromFavouriteItems(productItem.id));
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <Grid container>
      <Grid item lg={5}>
        <VerticalImgTabPanel productItem={productItem} />
      </Grid>

      <Grid item lg={7}>
        <Grid container sx={{ justifyContent: 'space-around' }}>
          <Grid item lg={7} sx={{ padding: '0 10px' }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: '36px'
              }}
            >
              <Box
                sx={{
                  '& > legend': { mt: 2 }
                }}
              >
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                  sx={{ fontSize: '18px' }}
                />
              </Box>
              <Typography sx={{ fontSize: '14px', color: '#2FD3AE' }}>
                {productItem?.quantity > 0 ? 'Є в наявності' : 'Товар відсутній'}
              </Typography>

              <Box sx={{ display: 'flex', gap: '3px' }}>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '14px',
                    color: '#7B818C',
                    lineHeight: '16px'
                  }}
                >
                  Артикул:
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '14px',
                    color: '#333333',
                    lineHeight: '16px'
                  }}
                >
                  {productItem?.article}
                </Typography>
              </Box>
            </Box>

            <Box sx={{ width: '100%' }}>
              <Typography
                variant="h4"
                sx={{
                  fontSize: '14px',
                  color: '#333333',
                  lineHeight: '16px',
                  textTransform: 'uppercase',
                  letterSpacing: 2,
                  fontWeight: 700,
                  mb: '30px'
                }}
              >
                Характеристики
              </Typography>
              <Box>
                <Stack direction="column">
                  <Stack
                    direction="row"
                    alignItems="center"
                    sx={{ width: '100%', backgroundColor: '#F7FAFB' }}
                  >
                    <span className={s.bullet} />
                    <span className={s.brandTitle}> Виробник: </span>
                    <span className={s.brandValue}>{productItem?.manufacturer}</span>
                  </Stack>
                  <Stack direction="row" alignItems="center" sx={{ width: '100%' }}>
                    <span className={s.bullet} />
                    <span className={s.brandTitle}>Діюча речовина:</span>
                    <span className={s.brandValue}>{productItem.instruction.activeSubstance.value}</span>
                  </Stack>
                  <Stack
                    direction="row"
                    alignItems="center"
                    sx={{ width: '100%', backgroundColor: '#F7FAFB' }}
                  >
                    <span className={s.bullet} />
                    <span className={s.brandTitle}>Термін придатності:</span>
                    <span className={s.brandValue}>{productItem.instruction.bestBeforeDate.value}</span>
                  </Stack>
                </Stack>
              </Box>
            </Box>
          </Grid>

          <Grid item lg={5} sx={{ border: '1px solid #E7E9EB', width: '100%' }}>
            <Grid
              container
              sx={{
                paddingLeft: '30px',
                backgroundColor: '#F7FAFB',
                paddingTop: '65px',
                mb: '10px'
              }}
            >
              <Grid item lg={9} sx={{ paddingLeft: '0px' }}>
                <Typography variant="h5" gutterBottom sx={{ paddingLeft: '0px' }}>
                  {productItem.discount > 0
                    ? `${productItem.price * ((100 - productItem.discount) / 100)} ГРН.`
                    : `${productItem.price} ГРН.`}
                </Typography>
              </Grid>
              <Grid item lg={3}>
                <Box onClick={handleFavoriteClick}>
                  <Checkbox
                    {...label}
                    icon={<FavoriteBorderOutlinedIcon />}
                    checkedIcon={<FavoriteIcon sx={{ color: 'red' }} />}
                    checked={isFavorite}
                  />
                </Box>
              </Grid>

              <Box sx={{ position: 'relative', mb: '14px' }}>
                <ButtonBase
                  sx={{
                    width: '20px',
                    padding: '0',
                    height: '14px',
                    position: 'absolute',
                    top: '10px',
                    left: '-5px',
                    backgroundColor: '#2FD3AE',
                    fontSize: '18px',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50px',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: '"Roboto", "san-serif"'
                  }}
                  onClick={handleDecrement}
                >
                  -
                </ButtonBase>
                <Box
                  sx={{
                    padding: '4px 20px',
                    borderRadius: '50px',
                    backgroundColor: '#ffffff',
                    // height:'32px',
                    textAlign: 'center',
                    fontFamily: '"Roboto", "san-serif"'
                  }}
                >
                  {quantity}
                </Box>
                <ButtonBase
                  onClick={handleIncrement}
                  sx={{
                    position: 'absolute',
                    width: '20px',
                    height: '14px',
                    top: '10px',
                    right: '-5px',
                    padding: 0,
                    margin: 0,
                    backgroundColor: '#DD8888',
                    fontSize: '18px',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50px',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  +
                </ButtonBase>
              </Box>
            </Grid>

            <Typography
              variant="h4"
              sx={{
                paddingLeft: '30px',
                fontSize: '14px',
                color: '828282',
                textDecoration: 'line-through'
              }}
            >
              Актуальна ціна
            </Typography>
            <Typography
              variant="body2"
              sx={{
                paddingLeft: '30px',
                fontSize: '14px',
                fontWeight: 700,
                color: '#DD8888',
                textDecoration: 'line-through'
              }}
            >
              {productItem.price} ГРН.
            </Typography>

            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={2}
              sx={{ mb: '12px' }}
            >
              <Button
                variant="outlined"
                onClick={handleDecrement}
                sx={{
                  margin: '25px 0 17px',
                  color: '#525A68',
                  borderRadius: '50px',
                  width: '240px'
                }}
              >
                Купити в один клік
              </Button>
              <Button
                variant="outlined"
                onClick={handleDecrement}
                sx={{
                  width: '158px',
                  color: '#ffffff',
                  borderRadius: '50px',
                  border: 'none',
                  backgroundColor: '#2FD3AE',
                  '&:hover': {
                    color: '#2FD3AE'
                  }
                }}
              >
                До корзини
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProductCardMainBlock;
