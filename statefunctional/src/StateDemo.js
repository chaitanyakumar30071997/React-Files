import React from 'react';

class statedemo extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            stuName: "shiva",
            stuNum:"510045557",
            stuMail:"shiva@gmail.com"
        }
    }
    updateStu(){
        this.setState = {
            stuName:'pav',
            stuNum:'94898747',
            stuMail:'pravae@gmail.com',
        }
    }

      rendder() {
        <div>
            <h1>Display Student details </h1>
            <p>{this.state.stuName}</p>
            <p>{this.state.stuNum}</p>
            <p>{this.state.stuMail}</p>
            <button onClick={()=>this.updateStu()}>updateDateStu </button>


        </div>
      }  
}
export default statedemo;