import React, { Component } from "react";

import axios from "axios";
import "../style/main.scss";



class Adminform extends Component{

    state={
        image:" "
    }

    eventChange(e){
        console.log(e.target.files[0])
        this.setState({image:e.target.files[0]})
    }

    async onSubmitToDbase(e){
        e.preventDefault();

        
        const res = await axios.post("http://localhost:1337/products", {

            title: e.target.elements.title.value,
            description: e.target.elements.description.value,
            price: e.target.elements.price.value,
            
        })


      

        console.log(res)

        const data = new FormData();
        data.append('files', this.state.image) 
        data.append('ref', 'products') 
        data.append('refId', res.data.id)  
        data.append('field', 'image')

        const resPic = await axios.post("http://localhost:1337/upload", data)
        console.log(resPic)
        

    }

    render(){
        return(     
            <div>
                <form onSubmit={this.onSubmitToDbase.bind(this)}>

                    <input type={"text"} name={"title"} className={"feedback-input"} placeholder={"Title"}/><br/>
                    <input type={"text"} name={"description"} className={"feedback-input"} placeholder={"Description"}/><br/>
                    
                    <input type={"number"} name={"price"} className={"feedback-input"} placeholder={"price"}/><br/>
                    <input type={"file"} onChange={this.eventChange.bind(this)} name={"file"}/><br/>
                    <hr/>
                    
                    <button type={"submit"} className={"glow-on-hover"} >Spara</button>
                    
                </form>
            </div>
        )
    }

}

export default Adminform