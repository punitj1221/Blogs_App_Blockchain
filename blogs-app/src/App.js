import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Header from './Header';
import Main from './Main';
import Sidebar from './Sidebar';
import web3 from './components/web3';
import contract from './components/abi';
import {BigNumber} from 'bignumber.js';
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddBlog from './addblog';
import RecentBlogs from './recentblog';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));








function Blog() {

  const [address,setAddress] = React.useState('');
  const [blog,setBlog] = React.useState({});
  const [recents,setRecents] = React.useState([]);
  const [myRecents,setMyRecents] = React.useState([]);
  const [archives,setArchives] = React.useState([]);
  const [call,setCall] = React.useState(false);

  const classes = useStyles();

  React.useEffect(async() => {
    let add = await web3.eth.getAccounts();
    setAddress(add[0]);
    const location = window.location.pathname;
    console.log(location);
    if(location != '/'){
      await getBlog(location);
    }
  },[call]);

 

  const getBlog = async(val) => {

    let v = val[1];

    const count = await contract.methods.blogCount().call();
  
    const blogData = await contract.methods.blogs(BigNumber(v)).call();

    let heading = blogData.heading;
    let content = blogData.content;
    let owner = blogData.owner;
    let id = blogData.id;
  
    setBlog({heading,content,owner,id});

    getRecents();

  
  }
  console.log(blog);

  const getRecents = async() => {
    const count = await contract.methods.blogCount().call();
    let rec = [];
    if(count>=1)
      rec[0] = await contract.methods.blogs(count).call();
    if(count >= 2)
      rec[1] = await contract.methods.blogs(count-1).call();
    if(count >= 3)
      rec[2] = await contract.methods.blogs(count-2).call();
    setRecents(rec);

    setCall(true);

    if(call){
      let arch =  [
        { key: 0 ,title:  count >= 1 ? recents[0].heading : '', url: '/'+recents[0].id },
        { key: 1,title:  count>= 2 ? recents[1].heading: '', url: '/'+recents[1].id },
        { key:2,title:  count>= 3 ? recents[2].heading: '', url: '/'+recents[2].id },
      ];

      setArchives(arch);
    }
  }

  const sidebar = {
    title: 'Author',
    description:blog.owner ? blog.owner : null,
    
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Crypto Blogs" />
        <main>
          
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title={blog.heading} content={blog.content} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={archives} 
            />
          </Grid>
        </main>
      </Container>
    </React.Fragment>
  );
}

export default function Nav(){
  return(
    <Router>
      <Switch>
         
          <Route path="/myRecentBlogs">
            <RecentBlogs />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path="/addNew">
            <AddBlog />
          </Route>
           <Route path="/">
            <Blog />
          </Route> 
          
       </Switch>
    </Router>
  )
}
