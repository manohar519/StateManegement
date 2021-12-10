import './App.css';
import{connect} from "react-redux"
import { Increment } from './Actions/actions';
import { Decrement } from './Actions/actions';

const App =({local_variable,Increment,Decrement})=> {
  return (
    <div className="App">
      <h1>{local_variable}</h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
    </div>
  );
}
const mapStateToProps= state =>({
  local_variable:state

})
//const mapDispatchToProps= dispatch=>({
// onClick

//})

export default connect(mapStateToProps,{Increment,Decrement})(App);
