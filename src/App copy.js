import React,{Component,Fragment} from 'react';
import './App.css';


class App extends Component {

  foo = () => 'Bars';
  render()
  {
    const name = 'Jhon Doe';
    const loading = false;
    const showName = true;
    //const foo = () => 'Bar';
/* 
    if( loading) {
      return <h4>loading----</h4>;
    } */

    return (
    <div className='App'>
      {loading ? (<h4>loading----</h4>) : (<h1>hello { showName ? name : null }</h1> ) }
      {loading ? (<h4>loading----</h4>) : (<h1>hello { showName && name }</h1> ) }
      {/* <h1 className="mt-5">HELLO GITHUB FINDER {this.foo()}</h1> */}
    </div>
    /* <Fragment>
       <h1 className="mt-5">HELLO GITHUB FINDER</h1>
       <h2>Goodbye</h2>
    </Fragment> */
  );
}
}

export default App;
