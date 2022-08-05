import React from 'react'

const cc = require('cryptocompare')
cc.setApiKey('427a751f660e56e70af19732b49a44c1e63935324d3f1a0e7350215a3c199009')

export const AppContext = React.createContext();

export class AppProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'dashboard',
      ...this.savedSettings(),
      setPage: this.setPage,
      confirmFavorites: this.confirmFavorites
    }
  }

  componentDidMount = () => {
    this.fetchCoins();
  }

  fetchCoins = async () => {
    let coinList = (await cc.coinList()).Data;
    this.setState({coinList});
  }

  confirmFavorites = () => {
    this.setState({
      firstVisit: false,
      page: 'dashboard'
    });
    localStorage.setItem('cryptoData', JSON.stringify({
      test: 'hello'
    }))
  }

  savedSettings(){
    let cryptoDataData = JSON.parse(localStorage.getItem('cryptoData'));
    if(!cryptoDataData){
      return {page: 'settings', firstVisit: true}
    }
    return {};
  }

  setPage = page => this.setState({page})

  render(){
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}