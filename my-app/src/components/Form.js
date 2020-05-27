import React, { Component } from "react";
import "../style/main.scss";

class From extends Component{

    constructor(props){
        super(props);

        this.state={
            name:undefined,
            appointmentTime:undefined,
            mobile:undefined
        }

    }

    handleOnChangeName= (e)=>{
        this.setState({name:e.target.value})
    }
    handleOnChangeTime=(e) =>{
        this.setState({ appointmentTime: e.target.value })
    }
    handleOnChangeMobile=(e)=> {
        this.setState({ mobile: e.target.value })
    }
    handleOnSubmit(e) {
        e.preventDefault()
    }

    render() {
        return (
             <div class="contactForm">
                <form onSubmit={this.handleOnSubmit}>
                    <input type={"text"} className={"feedback-input"} placeholder={"ange ditt name"} onChange={this.handleOnChangeName}></input>
                    <br/>
                    <input type={"text"} className={"feedback-input"}  placeholder={"ange önskat datum"} onChange={this.handleOnChangeTime}></input>
                    <br/>
                    <input type={"number"} className={"feedback-input"}    placeholder={"ange telefon nummer"} onChange={this.handleOnChangeMobile}></input>
                    <br/>
                    <button type={"submit"} className={"glow-on-hover"} onSubmit={this.handleOnSubmit}>Bekräfta</button>
                </form>
            



                   
        
      
              

                <div>  {this.state.name}</div>
                <div>  {this.state.appointmentTime}</div>
                <div>  {this.state.mobile}</div>
            </div>
        )
    }


}

export default From;