import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {

    handleClick(){
        this.template.querySelector('document');
    }
}