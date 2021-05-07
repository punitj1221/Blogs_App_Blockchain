import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import contract from './components/abi';
import web3 from './components/web3';

  const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));


export default function Header(props) {
  const classes = useStyles();
  const [address,setAddress] = React.useState('');

  const shoot = () => {
    window.location.href="recentblog";
 };

  const getAddress = async() => {
    let add = await web3.eth.getAccounts();
    setAddress(add[0]);
  }

  React.useEffect(() => {
    getAddress();
  });
  const { sections, title } = props;

  // const address = contract.options.address;

  // const getAddress = () => {
  //   web3
  // }
  
  const subscribe = async() => {
  
    
    // console.log(contract.methods);
   
  //  console.log(address[0]);
    // const address = getAddress;
    
    // const add = await web3.eth.getBalance(contract.options.address);
    // await contract.methods.addBlog("This is heading","ye hai content")
    // .send({from:address[0]}); 

    const blogCount = await contract.methods.blogCount().call();
    console.log(blogCount);

    // console.log(contract.methods)

    // await contract.methods.users('0').call();
    

    
  }

  const myRecentBlogs = async () => {

  }
 

  const addNewBlog = async () => {
    await contract.methods.addBlog("Benefits of Yoga","Yoga offers physical and mental health benefits for people of all ages. And, if you’re going through an illness, recovering from surgery or living with a chronic condition, yoga can become an integral part of your treatment and potentially hasten healing.\n\n\nA yoga therapist can work with patients and put together individualized plans that work together with their medical and surgical therapies. That way, yoga can support the healing process and help the person experience symptoms with more centeredness and less distress.")
    .send({from:address});

  }

  

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Button variant="outlined" size="medium" onClick={()=>window.location.href="/myRecentBlogs"}>My Recent Blogs</Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
          onClick={()=>{window.location.href = '/home'}}
        >
          {title}
        </Typography>
        {/* <IconButton>
          <SearchIcon />
        </IconButton> */}
        <Button variant="outlined"  size="medium" onClick={()=>window.location.href="/addNew"}>
          Add New Blog
        </Button>
      </Toolbar>
      {/* <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            className={classes.toolbarLink}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar> */}
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};
