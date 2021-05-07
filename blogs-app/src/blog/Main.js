import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Markdown from './Markdown';

const useStyles = makeStyles((theme) => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
}));

export default function Main(props) {
  const classes = useStyles();
  const [post1,setPost1] = React.useState('');
  const [post2,setPost2] = React.useState('');
  const [post3,setPost3] = React.useState('');

  const { posts, title } = props;

  React.useEffect(() => {
    fetch(posts[0])
      .then(res => res.text())
      .then(md => { setPost1(md) })
      fetch(posts[1])
      .then(res => res.text())
      .then(md => { setPost2(md) })
      fetch(posts[2])
      .then(res => res.text())
      .then(md => { setPost3(md) })
  })

  return (
    <Grid item xs={12} md={8}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      
        <Markdown className={classes.markdown} key={post3.substring(0, 40)}>
          {post3}
        </Markdown>
    </Grid>
  );
}

Main.propTypes = {
  posts: PropTypes.array,
  title: PropTypes.string,
};
