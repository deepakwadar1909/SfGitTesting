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

    }

    myFunction(x, y){
        return (x / y)
    }
}