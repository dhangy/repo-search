import React from 'react';
import logo from './logo.svg';
import { RepoTable } from './table.js';
import './App.css';

export class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      repos: [],
    }
  }

  hitApi = async () => {
    const api_address = 'https://api.github.com/search/repositories?q=stars:%3E25000+language:javascript&sort=stars&order=desc';
    const api_call = await fetch(api_address);
    const response = await api_call.json();
    let repos = (response.items).map((item )=> [item.full_name, item.stargazers_count, item.html_url]);
    console.log(repos);
    this.setState({ repos: repos })
  }

  getRepos = () => {
    this.hitApi();
  }

  render = () => (
    <div>
      <h1>Hello</h1>
      <button onClick={ this.getRepos }>CLICK MEH!</button>
      <RepoTable arr={ this.state.repos } / > 
    </div>
  );
}

export default App;


//the github api call 
//https://api.github.com/search/repositories?q=stars:%3E25000+language:javascript&sort=stars&order=desc

// name is full_name
// stargazers_count
