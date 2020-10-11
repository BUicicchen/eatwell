import React from 'react'
import ReactDOM from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import * as ui from '@material-ui/core'
import * as firebase from "firebase/app";
firebase.initializeApp();
require("firebase/auth")

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <img src="/assets/eatwell.png" width="75%"/>

        <h2 className={styles.title}>
          Welcome to EatWell!
        </h2>

        <Grid/>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.state = {login: false};
  }

  handleLoginClick() {
    this.setState({login: true});
  }

  render() {
    if(this.state.login) {
      return <Login/>
    }
    else {
      return (
        <ui.Grid container direction="row" justify="center" alignItems="center">
            
            <ui.Button variant="outlined" onClick={this.handleLoginClick}>
              Login
            </ui.Button>
        
            <ui.Button variant="outlined" href={"home"} m={10}>
              Home
            </ui.Button>
  
            <ui.Button variant="outlined" href={"profile/userProfile"}>
              User Profile
            </ui.Button>
          
            <ui.Button variant="outlined" href={"recipe/recipeList"}>
              Recipe List
            </ui.Button>
  
            <ui.Button variant="outlined" href={"recipe/viewRecipe"}>
              View Recipe
            </ui.Button>
  
            <ui.Button variant="outlined" href={"mealkit/mealkitList"}>
              Meal Kit List
            </ui.Button>
  
            <ui.Button variant="outlined" href={"mealkit/orderHistory"}>
              Order History
            </ui.Button>
  
          </ui.Grid>
      );
    }
  }
}

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {"first": '', "last": ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(type, event) {
    var j = {};
    j[type] =  event.target.value;
    this.setState(j);
  }
  handleSubmit(event) {
    firebase.auth().signInWithEmailAndPassword(this.state["first"], this.state["last"]).catch(function(error) {
      console.log(error.message)
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
    alert('A name was submitted: ' + this.state["first"] + " " + this.state["last"]);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ui.Grid container direction="column" justify="center" alignItems="center">
          <ui.TextField id="standard-basic" label="First Name" onChange={(e) => this.handleChange("first", e)}/>
          <ui.TextField id="standard-basic" label="Last Name" onChange={(e) => this.handleChange("last", e)}/>
        </ui.Grid>
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}