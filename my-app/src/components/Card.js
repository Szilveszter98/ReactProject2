import React from "react";
import "../style/main.scss";
import firebase from "./FirebaseConfig";
//import {Link} from 'react-router-dom'

class Card extends  React.Component{
    
    onClickDatabase(){ 
        const db = firebase.firestore();
        const docRef = db.collection("bookings").doc("info")
        //alt
        const docRef2 = firebase.firestore().collection("bookings").doc("info2")
    //läser data from firebase
        docRef.get().then(bookings => {
            if (bookings.exists) {
                console.log("document data: ", bookings.data())
            }
            else {
                console.log("error")
            }
        })
    
    // skriva data i firebase
          docRef.set({
              item:this.props.title,
              price:this.props.price,
          })
    

    }


   

render(){
return(
    <div className={"Cardmain"}>

   


<ul className={"cards"}>
        <li className={"cards_item"}>
            <div className={"card"}>
                <img src={this.props.image} className={"card_image"} alt={"PICTURE ERROR!"}/>
                <div className={"card_content"}>
                    <h2 className={"card_title"}>{this.props.title}</h2><br/>
                    <p className={"card_text"}>{this.props.description}</p>
                    <p className={"card_price"}>{this.props.price}:-</p>          
                    <button onClick={this.onClickDatabase.bind(this)} className={"btn card_btn"}>Take this time!</button>
                </div>
            </div>
        </li>
    </ul>
</div>

    )
}

}





export default Card;
