import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class WelComeToLwc extends LightningElement {
    myTitle = "Hello LWC World";

    // connectedCallback(){
    //     var name = "Hello Wel-Come To LWC";
    //     window.alert("Name " + name);
    // }       //functional scop

    // handleClick(){
    //     window.alert("Hello Deepak");
    // }

    // connectedCallback(){
    //     let callMyFun = this.myFunction(10, 2);
    //     window.alert("Result By Arrow Fun= " + callMyFun);
    // }

    // Regular function
    // myFunction(x, y){
    //     return (x / y);
    // }

    //  Arrow Function
    // myFunction = (x, y) => {
    //     return (x / y);
    // }

    // Toast Example
    // 1st Function
    handleClick(){

    }

    //2nd function
    const event = new ShowToastEvent
}