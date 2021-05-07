import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginTop: theme.spacing(6),
    marginRight: theme.spacing(45),
    backgroundImage: 'url(https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.wallpaperflare.com%2Faerial-background-beverage-blog-blogger-browsing-business-wallpaper-avbdn&psig=AOvVaw1wqyHP6YXGe-QiL6_1rJ0n&ust=1619613458782000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKDzg8q4nvACFQAAAAAdAAAAABAD)',
    height:"auto",
    marginBottom:100,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(22, 0, 54)',
    
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(5),
      paddingRight: 0,
    },
  },
}));

export default function MainFeaturedPost2(props) {

  const classes = useStyles();
  const { post } = props;

  

  return (
    <Paper className={classes.mainFeaturedPost} style={{ backgroundImage:'./public/blog-background.jpg'}}>
     
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={8}>
          <div className={classes.mainFeaturedPostContent}>
          <Typography component="h2" variant="h4" color="inherit" gutterBottom><strong> 
              {post.heading}</strong>
            </Typography> 
            <Typography variant="h6" color="inherit" paragraph >
              {post.content.slice(0,225)}{"..."}
            </Typography>
            
            <Typography variant="h7" color="inherit" paragraph style={{}}>
              {post.date}
            </Typography>
            <Link style={{color:'#00f2ff',}} variant="subtitle1" href={'/'+post.id}>
              {"Continue Reading"}
            </Link>
            
            
          </div>
          
        </Grid>
      </Grid>
    </Paper>
  );
}



MainFeaturedPost2.propTypes = {
  post: PropTypes.object,
};
