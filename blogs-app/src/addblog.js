import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Header from './Header';
import CssBaseline from '@material-ui/core/CssBaseline';
import contract from './components/abi';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import web3 from './components/web3';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  root1: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function MultilineTextFields() {
  const classes = useStyles();
  const [value, setValue] = React.useState('Controlled');

  const [heading,setHeading] = React.useState('');
  const [address,setAddress] = React.useState('');
  const [content,setContent] = React.useState('');

  const getAddress = async() => {
    let add = await web3.eth.getAccounts();
    setAddress(add[0]);
  }

  React.useEffect(() => {
    getAddress();
  });

  
  const addNewBlog = async () => {
    
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    await contract.methods.addBlog(heading,content,today)
    .send({from:address});

  }

  return (
    
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="lg">
            <Header title="Add New Blog" />
          </Container>
        </React.Fragment>
      </div>
      <div>
       
      </div>
      <div><center>
        <Typography style={{textAlign:'left', marginLeft:270, marginTop:'70px',}}>Address: {address}</Typography>
        <TextField
         style={{width:'60%', marginTop:'20px',}}
          id="outlined-multiline-flexible"
          label="Title"
          multiline
          rowsMax={1}
          value={heading}
          onChange={(e)=>setHeading(e.target.value)}
          variant="outlined"
        />
        <TextField
        style={{ width:'60%', marginTop:'20px',}}
          id="outlined-multiline-static"
          label="New Blog"
          multiline
          rows={28}
          value={content}
          onChange={(e)=>{setContent(e.target.value)}}
          variant="outlined"
        />
        
        </center>
      </div>
      <Button variant="contained" color="primary" onClick={addNewBlog} style={{marginLeft:"25%",marginTop:20,marginBottom:20,alignItems:"center",justifyContent:"center",width:"50%"}}>
        Submit
      </Button>
    </form>
  );
}
