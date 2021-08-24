import React, { Component } from 'react';
import axios from 'axios'

class main extends Component {
  clickButton(){
    console.log(axios.defaults.baseURL);
    // axios.get(`/main`)
    // .then((r) => {
    //   alert(r);
    // });    
  }
  render() {
    return (
      <div id="container">이거한번 해보셈
        <div className="contents-filter">
          <button onClick={this.clickButton}>버튼</button>
        </div>
      </div>
      
    );
  }
}
export default main;