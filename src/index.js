import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./styles/index.css";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk'; 
import rootReducer from './reducers';
import { getUsers } from './actions/users.actions';
import { getBooks } from './actions/book.actions';
import { getAuthors } from './actions/author.actions';
// dev tools
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(
  rootReducer, composeWithDevTools(applyMiddleware(thunk))
)

store.dispatch(getUsers());
store.dispatch(getBooks());
store.dispatch(getAuthors());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    
  document.getElementById('root')
);

