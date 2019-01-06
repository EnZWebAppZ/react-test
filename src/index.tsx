import * as React from 'react';
import { render } from 'react-dom';

import Hello from './containers/Hello';
import Grider from './containers/Grid';
import States from './containers/States';
import { combineReducers,  createStore } from 'redux';
import { Provider }  from 'react-redux';
//import { Action } from '../models/action-model';
//const action = new Action('changeState', new Date('2018-12-30'));
const dateReducer = (state: Date = new Date('1900-01-10'), action: any): Date => {
 return state;
};

const stringReducer = (state: string = '', action: any): string => {
switch(action.type){
  case 'updateString': {
  return action.payLoad.newState;
  }
  default: {
    return state;
  }
 }
};

const allReducers = combineReducers({
 dates: dateReducer,
 str: stringReducer
});

const store = createStore(
  allReducers, 
  {
    dates : new Date(),
    str: 'Base'
  },
  (window as any).devToolsExtension && (window as any).devToolsExtension()
  );

console.log(store.getState());

const updateUserAction = {
  type : 'updateString',
  payLoad : {
    newState : 'New'
  }
};

store.dispatch(updateUserAction);

console.log(store.getState());

class App extends React.Component {
  render() {
    return (
      <div className="row">
      <div className="container">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">EnZ First React App</h5>
            <p className="card-text">Welcome!</p>
          </div>
          <div className="card-body">
            <Hello name={8} />
          </div>
          <div className="card-body">
            <Grider namer="HOHOHO" />
          </div>
          <div className="card-body">
            <States date={new Date()} />
          </div>
        </div>
      </div>
    </div>
    );
  }
}

render(  
  (
  <Provider store={store}>
    <App />
  </Provider>
  ), 
  document.getElementById('root'));
