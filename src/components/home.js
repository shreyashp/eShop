import React from 'react';
import Product from './Product';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


export default function Home(props) {
  const { products, onAdd } = props;

  const productList = products.map((product) => {

    return (
      <Product key={product.id} product={product} onAdd={onAdd}></Product>
    );

  });
  const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundImage: "url('https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/2/18/7f32fb05-d9f9-4a94-b28e-836282fa28ed1613665054920-Banner_1920x504.jpg')",
      //padding: theme.spacing(8, 0, 6),
      height: '50vh',
      //display: 'flex',
      alignContent: "center",
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
      backgroundColor: '#f2f2f2',
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: ''

    },
    cardMedia: {
      paddingTop: '56.25%',
      height: '25vh'// 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    addButton: {
      margin: 'auto',
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
    background: {
      backgroundColor: '#f2f2f2',
    }
    ,
    price: {
      color: '#FF0000',
      paddingTop: '5%'
    }

  }));


  const classes = useStyles();

  return (

    <main className={classes.background}>
      <div className={classes.heroContent}>
        <Container maxWidth="sm" >
        </Container>
      </div>


      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.cardMedia}
                    image={product.Url}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom color="" variant="h5" component="h2">
                      {product.Brand}
                    </Typography>
                    <Typography>
                      {product.Name}
                    </Typography>
                    <Typography className={classes.price}>
                    ₹{product.Price}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button className={classes.addButton} size="large" color="primary" onClick={() => onAdd(product)}>
                    Add to Cart
                    </Button >
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

    </main>
  );
  {/*<main className="block-products col-2">
            <h2>Products</h2>
            <div >
                {productList}
            </div>
    </main>*/}
}
