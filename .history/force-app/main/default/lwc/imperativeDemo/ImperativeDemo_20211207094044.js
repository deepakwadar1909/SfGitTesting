import { LightningElement, track } from 'lwc';

const columns =[
    {label: 'SF Topic Id', fieldName: 'Id'},
    {label: 'SF Topic Name', fieldName: 'Name'},
]
export default class ImperativeDemo extends LightningElement {

    @track columns
}