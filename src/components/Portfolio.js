import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Navbar from './Navbar';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
      margin :'50px',
    maxWidth: 345,
  },
  media: {
    height: 170,
  },
});

export default function Portfolio() {
  const classes = useStyles();

  return (
      <>
      <Navbar></Navbar>
    <Grid container>
        <Grid item md={4} xs={12}>
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://i.ibb.co/S6ddYNV/project2.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           Creative Agency
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <a href="https://github.com/Arpolash/creative-agency-client">  <Button size="small" color="primary">
          Github
        </Button></a>
        <a href="https://creative-agency-197d4.web.app/">  <Button size="small" color="primary">
         Live Site
        </Button></a>
      </CardActions>
    </Card>
        </Grid>
        <Grid item md={4} xs={12}>
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://i.ibb.co/s1DdjPf/project1.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
         Travel Guru
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <a href="https://github.com/Arpolash/Travel-guru">  <Button size="small" color="primary">
          Github
        </Button></a>
        <a href="https://travel-guru-cc5c0.web.app/">  <Button size="small" color="primary">
         Live Site
        </Button></a>
      </CardActions>
    </Card>
        </Grid>
        <Grid item md={4} xs={12}>
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://i.ibb.co/JR2XTGW/project6.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          E-School
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <a href="https://github.com/Arpolash/E-School-Website">  <Button size="small" color="primary">
          Github
        </Button></a>
        <a href="https://arpolash.github.io/E-School-Website/">  <Button size="small" color="primary">
         Live Site
        </Button></a>
      </CardActions>
    </Card>
        </Grid>
        <Grid item md={4} xs={12}>
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://i.ibb.co/2jWCn36/project5.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           Pin Matcher
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <a href="https://github.com/Arpolash/Pin-Matcher">  <Button size="small" color="primary">
          Github
        </Button></a>
        <a href="https://arpolash.github.io/Pin-Matcher/">  <Button size="small" color="primary">
         Live Site
        </Button></a>
      </CardActions>
    </Card>
        </Grid>
        <Grid item md={4} xs={12}>
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://i.ibb.co/TkRZ6bH/project3.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Volunteer Networks
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <a href="https://github.com/Arpolash/creative-agency-client">  <Button size="small" color="primary">
          Github
        </Button></a>
        <a href="https://creative-agency-197d4.web.app/">  <Button size="small" color="primary">
         Live Site
        </Button></a>
      </CardActions>
    </Card>
        </Grid>
        <Grid item md={4} xs={12}>
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://i.ibb.co/CK7kKDv/project4.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           Lyrics World
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <a href="https://github.com/Arpolash/Hard-Rock-Api">  <Button size="small" color="primary">
          Github
        </Button></a>
        <a href="https://arpolash.github.io/Hard-Rock-Api/">  <Button size="small" color="primary">
         Live Site
        </Button></a>
      </CardActions>
    </Card>
        </Grid>
    </Grid>
    </>
  );
}
