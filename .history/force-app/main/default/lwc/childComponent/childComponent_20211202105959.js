import { LightningElement ,api } from 'lwc';

export default class ChildComponent extends LightningElement {
    @api itemName = "Deepak Wadar";

    handleChangeValue(){
        this.itemName
    }
}