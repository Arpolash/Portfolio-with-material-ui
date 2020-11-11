import React from 'react';
import {Typography,Avatar,Grid,Box} from '@material-ui/core';
import avatar from '../images/avatar.png';
import ReactTyped from 'react-typed';
import {makeStyles} from '@material-ui/core/styles';

//css styles
const useStyles = makeStyles(theme =>({
    avatar : {
        width : theme.spacing(15),
        height : theme.spacing(15),
        margin : theme.spacing(1)
    },
    title : {
        color : 'tomato'
    },
    subtitle : {
        color : 'tan',
        marginBottom : '3rem'
    },
    typedContainer : {
        position : 'absolute',
        top : "50%",
        left : '50%',
        transform : "translate(-50%, -50%)",
        textAlign : 'center',
        zIndex : 1
    }
}))

const Header = () => {
    const classes = useStyles()
    return (
       <Box className={classes.typedContainer}>
           <Grid container justify="center">
           <Avatar className={classes.avatar} src={avatar} alt="ar polas"/>
           </Grid>
           <Typography className={classes.title} variant="h4">
            <ReactTyped strings={['AR POLAS']} typeSpeed={40}/>
           </Typography>
           <br/>
           <Typography className={classes.subtitle} variant="h5">
            <ReactTyped strings={['Front end Developer','React Developer','Mern Stack Developer']} 
            typeSpeed={40}
            backSpeed={50}
            loop
            />
           </Typography>
          
          
       </Box>
    );
};

export default Header;