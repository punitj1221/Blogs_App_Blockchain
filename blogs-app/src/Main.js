import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
}));

export default function Main(props) {

  const { content, title } = props;

  return (
    <Grid item xs={12} md={8}>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      <Divider />
      
        <Typography style={{marginTop:"5%"}}>
          {content}
        </Typography>
    </Grid>
  );
}

Main.propTypes = {
  posts: PropTypes.array,
  title: PropTypes.string,
};
