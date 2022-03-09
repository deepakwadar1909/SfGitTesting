import { LightningElement, track } from 'lwc';

export default class TrackDemo extends LightningElement {

    @track fullName = {firstName: "", lastName: ""};

    handleChange(event){
        const field = event.target.name;

        if(field === 'firstName'){
            this.firstName
        }
    }
}