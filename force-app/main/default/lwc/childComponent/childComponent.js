import { LightningElement ,api } from 'lwc';

export default class ChildComponent extends LightningElement {
    @api itemName = "Deepak Wadar";

    @api handleChangeValue(){
        this.itemName = "SF LWC Demo";
    }
}