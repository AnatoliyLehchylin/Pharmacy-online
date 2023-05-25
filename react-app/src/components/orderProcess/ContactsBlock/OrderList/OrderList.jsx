import {
  List, ListItem, ListItemIcon, ListItemText, Typography, Container, Grid
} from '@mui/material';

const OrderList = () => (
  <Container>
    <Typography
      sx={{
        margin: '40px 0 20px 0',
        fontFamily: 'Raleway, sans-serif',
        color: '#4F4F4F',
        fontWeight: '700',
        fontSize: '24px',
        width: '100%'
      }}
    >
      Ваше замовлення
    </Typography>
    <Grid container sx={{ overflowY: 'auto', maxHeight: '300px' }}>
      {[1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4].map(id => (
        <Grid container key={id}>
          <Grid item md={3}>
            <img src={`./orderprocessTest/${id}.png`} alt="" />
          </Grid>
          <Grid item md={6}>
            <Typography sx={{ textAlign: 'left' }}>
              Велсон таблетки 30 шт.
            </Typography>
          </Grid>
          <Grid item md={3}>
            <Typography sx={{ textAlign: 'left' }}>
              108 грн.
            </Typography>
          </Grid>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default OrderList;

{ /* <List
      sx={{
        // width: '100%',
        // maxWidth: 500,
        // bgcolor: 'background.paper',
        // position: 'relative',
        overflow: 'auto',
        maxHeight: 300,
        '& ul': { padding: 0 }
      }}
    >
      {[0, 1, 2].map(sectionId => (
        <li key={`section-${sectionId}`}>
          <ul>
            {[0, 1].map(item => (
              <ListItem key={`item-${sectionId}-${item}`}>
                <ListItemIcon>
                  <img src="./orderprocessTest/3.png" alt="" />
                </ListItemIcon>
                <ListItemText primary="Велсон таблетки 30 шт." />
                <ListItemText primary="108 грн." />
              </ListItem>
            ))}
          </ul>
        </li>
      ))}
    </List> */ }
