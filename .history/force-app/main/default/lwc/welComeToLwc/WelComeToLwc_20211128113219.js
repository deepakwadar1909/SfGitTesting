import { LightningElement } from 'lwc';

export default class WelComeToLwc extends LightningElement {
    myTitle = "Hello LWC World";

    // connectedCallback(){
    //     var name = "Hello Wel-Come To LWC";
    //     window.alert("Name " + name);
    // }       //functional scop

    handleClick(){
        window.alert("Hello Deepak");
    }

    

    connectedCallback(){
        let callMyFun = this.myFunction(10, 2);
        window.alert("Result = " + callMyFun);
    }

    // Regular function
    // myFunction(x, y){
    //     return (x / y);
    // }

    // Arrow Function
    
}