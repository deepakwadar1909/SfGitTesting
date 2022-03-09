import { LightningElement, wire, track } from 'lwc';
import getTopicList from '@salesforce/apex/wireDemoClass.getTopicList';

const columns = [
    { label : 'Name', field : "Name"},
    { label : 'SF Topic ID', field : "ID"},
];
export default class WireDemo extends LightningElement {

    @track columns = columns;
    @track data = [];

    @wire(getTopicList)
    wireSfTopic({data,error}){
        if(data){
            this.data = data;
        }
        else if(error){
            console.log("Error Occurred..");
        }
    }
}