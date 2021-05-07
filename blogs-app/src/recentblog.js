import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from './Header';
import MainFeaturedPost2 from './MainFeaturedPost2';
import Main from './Main';
import contract from './components/abi';
import web3 from './components/web3';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));













export default function Blog() {

  const [myRecents,setMyRecents] = React.useState([]);
  const [address,setAddress] = React.useState('');
  const [call,setCall] = React.useState(false);

  React.useEffect(() => {
    getMyBlogs();
  });
  const list = [];
  const getMyBlogs = async() => {
    let add = await web3.eth.getAccounts();
    setAddress(add[0]);
    if(address){
      let count = await contract.methods.blogCount().call();
      let myRec = [];
      for(let i = 0; i < count; i++){
        let val = await contract.methods.blogs(count-i).call();
        if(val.owner === address){
          myRec.push(val);
        }
      }
      setMyRecents(myRec);
      
      
  }
}

if(myRecents){
  myRecents.forEach(element => {
    list.push(<MainFeaturedPost2 post={element} />)
  }); 
}

  
  
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" >
        <Header title="Recent Blogs" />
        <main>
          

          {list}
          
        </main>
        
      </Container>
      
    </React.Fragment>
  );
}


