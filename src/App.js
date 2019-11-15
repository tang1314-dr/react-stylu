import React,{Component} from 'react';
import './App.css';
// import Blog from './compoments/blog/blog'
// import Clock from './compoments/clock/clock'
// import State from './compoments/state/state'
// import Parent from './compoments/parent/parent'
import From from './compoments/form/from'
class App extends Component {
  // state={
  //   isShow:true
  // }
  isShow=true
  changeShow(){    
    // this.setState({
    //   isShow:!this.state.isShow
    // })
    this.isShow=!this.isShow
    this.setState({})
  }
  render(h) {
    return(
      (
        <div className="App">
          {/* <Blog></Blog> */}
          {/* <button onClick={()=>this.changeShow()}>点击切换</button>
          {
            this.isShow?<Clock></Clock>:null
          }
           */}
          {/* <State></State> */}
          {/* <Parent></Parent> */}
          <From></From>
        </div>
      )
    )
  }
}

export default App;
