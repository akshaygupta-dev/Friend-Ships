import { LightningElement, api, wire } from 'lwc';

export default class BoatSearch extends LightningElement {
    @api isLoading = false;
    
    // Handles loading event
    handleLoading() { }
    
    // Handles done loading event
    handleDoneLoading() { this.isLoading != this.isLoading}
    
    // Handles search boat event
    // This custom event comes from the form
    searchBoats(event) { }
    
    createNewBoat(event) { }
}