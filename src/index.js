import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ApolloClient, { InMemoryCache } from 'apollo-boost'; 
import { ApolloProvider } from '@apollo/react-hooks';
import './index.less';
import App from './App';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache({
    addTypename: false
  })
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
