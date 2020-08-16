import React  from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import Pagination from '@material-ui/lab/Pagination';
import TextField from '@material-ui/core/TextField';
import Carousel from '../slider/slider'
import Button from '@material-ui/core/Button'
import { Redirect } from 'react-router';
import ButtonBase from '@material-ui/core/ButtonBase';
// import Typography from '@material-ui/core/Typography';

import { withRouter , Link } from 'react-router-dom';
// import { makeStyles } from '@material-ui/core/styles';
const images =[
  {
    // url: '/static/images/grid-list/breakfast.jpg',
    url: 'https://wallup.net/wp-content/uploads/2016/01/138584-ladybugs-nature-plants.jpg',


    title: 'Add New Post',
    width: '10%',
    height: '5%'
  },
]
const useStyles = makeStyles((theme) => ({
  

  // root: {
  //   display: 'flex',
  //   flexWrap: 'wrap',
  //   minWidth: 300,
  //   width: '100%',
  // },
  // image: {
  //   position: 'relative',
  //   height: 200,
  //   [theme.breakpoints.down('xs')]: {
  //     width: '100% !important', // Overrides inline-style
  //     height: 100,
  //   },
  //   '&:hover, &$focusVisible': {
  //     zIndex: 1,
  //     '& $imageBackdrop': {
  //       opacity: 0.15,
  //     },
  //     '& $imageMarked': {
  //       opacity: 0,
  //     },
  //     '& $imageTitle': {
  //       border: '4px solid currentColor',
  //     },
  //   },
  // },
  // focusVisible: {},
  // imageButton: {
  //   position: 'absolute',
  //   left: 0,
  //   right: 0,
  //   top: 0,
  //   bottom: 0,
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   color: theme.palette.common.white,
  // },
  // imageSrc: {
  //   position: 'absolute',
  //   left: 0,
  //   right: 0,
  //   top: 0,
  //   bottom: 0,
  //   backgroundSize: 'cover',
  //   backgroundPosition: 'center 40%',
  // },
  // imageBackdrop: {
  //   position: 'absolute',
  //   left: 0,
  //   right: 0,
  //   top: 0,
  //   bottom: 0,
  //   backgroundColor: theme.palette.common.black,
  //   opacity: 0.4,
  //   transition: theme.transitions.create('opacity'),
  // },
  // imageTitle: {
  //   position: 'relative',
  //   padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  // },
  // imageMarked: {
  //   height: 3,
  //   width: 18,
  //   backgroundColor: theme.palette.common.white,
  //   position: 'absolute',
  //   bottom: -2,
  //   left: 'calc(50% - 9px)',
  //   transition: theme.transitions.create('opacity'),
  // },





//.................................................................................


  blogsContainer: {
    paddingTop: theme.spacing(3)
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3)
  },
  card: {
    maxWidth: "100%",
  },
  media: {
    height: 240
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between"
  },
  author: {
    display: "flex"
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center"
  },

  adjSearch: {
    float: 'right',
    width: '500px',
    fontSize: '30px',
    paddingTop: theme.spacing(3)

  },
 Btn1:{
   float:"rgiht"
 }
  // root: {
  //     '& .MuiTextField-root': {
  //       margin: theme.spacing(1),
  //       width: '25ch',
  //       float: 'right',
  //             width: '500px'
  //     },
  //   },

}));

 function MyAccount() {

  const classes = useStyles()

  return (<div>


    <Container maxWidth="lg" className={classes.blogsContainer}>
      <Typography variant="h4" className={classes.blogTitle}>
        My Account
        </Typography>
      <TextField id="filled-search" label="Search field" className={classes.adjSearch} type="search" variant="filled" />
    <Link to='/newpost'> 
      
    <Button  className={classes.Btn1} variant="contained" color="primary">
        Add New Post 
      </Button>

    </Link>
    {/* //................................................................................... */}






    {/* <div className={classes.root}>
      {images.map((image) => (
        <ButtonBase
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}
    </div> */}















      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={require('../font/card2.jpg')}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  React useContext
                  </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica
                  </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
              <Box className={classes.author}>
                <Avatar src={require('../font/card2.jpg')} />
                <Box ml={2}>
                  <Typography variant="subtitle2" component="p">
                    Guy Clemons
                    </Typography>
                  <Typography variant="subtitle2" color="textSecondary" component="p">
                    May 14, 2020
                    </Typography>
                </Box>
              </Box>
              <Box>
                <BookmarkBorderIcon />
              </Box>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={require('../font/card1.webp')}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  React Router
                  </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica
                  </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
              <Box className={classes.author}>
                <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80" />
                <Box ml={2}>
                  <Typography variant="subtitle2" component="p">
                    Guy Clemons
                    </Typography>
                  <Typography variant="subtitle2" color="textSecondary" component="p">
                    May 14, 2020
                    </Typography>
                </Box>
              </Box>
              <Box>
                <BookmarkBorderIcon />
              </Box>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={require('../font/pic2.jpg')}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  React useContext
                  </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica
                  </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
              <Box className={classes.author}>
                <Avatar src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                <Box ml={2}>
                  <Typography variant="subtitle2" component="p">
                    Guy Clemons
                    </Typography>
                  <Typography variant="subtitle2" color="textSecondary" component="p">
                    May 14, 2020
                    </Typography>
                </Box>
              </Box>
              <Box>
                <BookmarkBorderIcon />
              </Box>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={require('../font/pic2.jpg')}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  React useContext
                  </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica
                  </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
              <Box className={classes.author}>
                <Avatar src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                <Box ml={2}>
                  <Typography variant="subtitle2" component="p">
                    Guy Clemons
                    </Typography>
                  <Typography variant="subtitle2" color="textSecondary" component="p">
                    May 14, 2020
                    </Typography>
                </Box>
              </Box>
              <Box>
                <BookmarkBorderIcon />
              </Box>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={require('../font/pic2.jpg')}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  React useContext
                  </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica
                  </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
              <Box className={classes.author}>
                <Avatar src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                <Box ml={2}>
                  <Typography variant="subtitle2" component="p">
                    Guy Clemons
                    </Typography>
                  <Typography variant="subtitle2" color="textSecondary" component="p">
                    May 14, 2020
                    </Typography>
                </Box>
              </Box>
              <Box>
                <BookmarkBorderIcon />
              </Box>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={require('../font/pic3.jpg')}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  React useContext
                  </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica
                  </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
              <Box className={classes.author}>
                <Avatar src="https://images.unsplash.com/photo-1584999734482-0361aecad844?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80" />
                <Box ml={2}>
                  <Typography variant="subtitle2" component="p">
                    Guy Clemons
                    </Typography>
                  <Typography variant="subtitle2" color="textSecondary" component="p">
                    May 14, 2020
                    </Typography>
                </Box>
              </Box>
              <Box>
                <BookmarkBorderIcon />
              </Box>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <Box my={4} className={classes.paginationContainer}>
        <Pagination count={10} />
      </Box>
    </Container>

  </div>)
}
export default withRouter(MyAccount)