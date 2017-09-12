import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import getWeb3 from './util/web3/getWeb3'

// Layouts
import App from './App'
import Home from './layouts/home/Home'
import Dashboard from './layouts/dashboard/Dashboard'
import Crowdsale from './layouts/crowdsale/Crowdsale'
import TovarCoin from './layouts/tovarCoin/TovarCoin'

// Style
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Redux Store
import store from './store'

// Initialize react-router-redux.
const history = syncHistoryWithStore(browserHistory, store)

// Initialize web3 and set in Redux.
getWeb3
.then(results => {
  console.log('Web3 initialized!')
})
.catch(() => {
  console.log('Error in web3 initialization.')
})

ReactDOM.render((
  <MuiThemeProvider>
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="dashboard" component={Dashboard} />
          <Route path="crowdsale" component={Crowdsale} />
          <Route path="tovarCoin" component={TovarCoin} />
        </Route>
      </Router>
    </Provider>
  </MuiThemeProvider>

  ),
  document.getElementById('root')
)
