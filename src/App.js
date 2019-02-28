import React, { Component,Fragment } from 'react';
import style from "./App.module.css"
import { Row, Col,Input,Button } from 'antd';
import axios from 'axios'
const { TextArea } = Input;

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      textdata:"",
      response:""
    };
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleTextChange(e){
    let newstate = {
      textdata:JSON.stringify(e.target.value)
    } 
    this.setState(
      newstate)
  }

  handleTab(e){
    if(e.keyCode === 9){
      e.preventDefault();
      e.target.value= e.target.value + "   ";
    }
  }

  handleSubmit(){
     console.log("submit") 
    let data = JSON.parse(this.state.textdata)
    console.log(data) 
    axios({
      method: 'POST',
      url: 'http://localhost:4000/graphql',
      data:{query:`${data}`}
    }).then((res)=>{
      console.log(res)
      this.setState({
        response: JSON.stringify(res.data.data,null,4)
      })
    }).catch((err)=>{
      console.log(err.response.data.errors[0])
      this.setState({
        response: JSON.stringify(err.response.data.errors[0],null,4)
      })
    })
  }

  render() {
    const res = this.state.response;
    return (
      <Fragment>
        <Row className={style.title}>
            GraphQL Practise Site
        </Row>
        <Row>
            <Col span={12}>
              <div className={style.inputWrapper}>
                <TextArea rows={10} onChange={(e)=>this.handleTextChange(e)} 
                className={style.input}
                onKeyDown={(e)=>this.handleTab(e)}
                />
                <Button type="primary" size="large" className={style.button} onClick={this.handleSubmit}>Submit</Button>
              </div>
            </Col>
            <Col span={12}>
              <div  className={style.responseWrapper}>
                <div  className={style.response}>
                  { res } 
                </div>
              </div>
            </Col>
        </Row>
      </Fragment>
    );
  }
}

export default App;
