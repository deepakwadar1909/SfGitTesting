import { LightningElement, wire, track } from 'lwc';
import getTopicList 

const columns = [
    { label : 'Name', field : "Name"},
    { label : 'SF Topic ID', field : "ID"},
];
export default class WireDemo extends LightningElement {

    @track columns = columns;
}