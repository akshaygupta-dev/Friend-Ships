import { LightningElement, api, wire } from 'lwc';
import getBoats from '@salesforce/apex/BoatDataService.getBoats';
import updateBoatList from '@salesforce/apex/BoatDataService.updateBoatList';

const SUCCESS_TITLE = 'Success';
const MESSAGE_SHIP_IT = 'Ship it!';
const SUCCESS_VARIANT = 'success';
const ERROR_TITLE   = 'Error';
const ERROR_VARIANT = 'error';
const columns = [
    { label: 'Name', fieldName: 'Name', editable: true, type:'text' },
    { label: 'Length', fieldName: 'Length__c', type: 'number', editable: true },
    { label: 'Price', fieldName: 'Pice__c', type: 'currency', typeAttributes: { currencyCode: 'USD' }, editable: true },
    { label: 'Description', fieldName: 'Description__c', editable: true, type:'text' } 
];

export default class BoatSearchResults extends LightningElement {

    columns=columns;
    selectedBoatId;
    columns = [];
    boatTypeId = '';
    boats;
    isLoading = false;    

    @wire(getBoats, {boatTypeId: '$boatTypeId'})
    wiredBoats({error, data}) { 
        if (data) {
            this.boats = data;
        } else if (error) {

        }      
    }
    
    // wired message context
    messageContext;
    // wired getBoats method 
    wiredBoats(result) { }
    
    // public function that updates the existing boatTypeId property
    // uses notifyLoading
    searchBoats(boatTypeId) { }
    
    // this public function must refresh the boats asynchronously
    // uses notifyLoading
    refresh() { }
    
    // this function must update selectedBoatId and call sendMessageService
    updateSelectedTile() { }
    
    // Publishes the selected boat Id on the BoatMC.
    sendMessageService(boatId) { 
      // explicitly pass boatId to the parameter recordId
    }
    
    // The handleSave method must save the changes in the Boat Editor
    // passing the updated fields from draftValues to the 
    // Apex method updateBoatList(Object data).
    // Show a toast message with the title
    // clear lightning-datatable draft values
    handleSave(event) {
      // notify loading
      const updatedFields = event.detail.draftValues;
      // Update the records via Apex
      updateBoatList({data: updatedFields})
      .then(() => {})
      .catch(error => {})
      .finally(() => {});
    }
    // Check the current value of isLoading before dispatching the doneloading or loading custom event
    notifyLoading(isLoading) { }
  
}