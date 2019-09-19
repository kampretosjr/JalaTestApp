import {combineReducers} from 'redux';


// you can customize here
import INshrimpPrice from './shrimpPrice';
import ReDuCeerExPTwo from './reducer2Example';

const appReducer = combineReducers({
  INshrimpPrice,
  ReDuCeerExPTwo
});

export default appReducer;
