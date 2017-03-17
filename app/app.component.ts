import { Component } from "@angular/core";
import * as phone from 'nativescript-phone';
@Component({
  selector: "my-app",
  template: `
    <ActionBar class="action-bar" title="NativeScript SMS Application"></ActionBar>
    <StackLayout class="p-20">

      <Label text="Select either TEXT or PHONE to continue."></Label>

      <FlexboxLayout>
        <Button class="phone-button" (tap)="setPhoneType(0)" text="PHONE"></Button>
        <Button class="text-button"(tap)="setPhoneType(1)" text="Text"></Button>
      </FlexboxLayout>

      <StackLayout *ngIf="phoneType === 0">
        <TextField keyboardType="phone" hint="Enter Phone Number..." [(ngModel)]="phoneNumber"></TextField>
        <Button (tap)="callNumber()" *ngIf="phoneNumber" class="phone-button" [text]="'Call ' + phoneNumber"></Button>    
      </StackLayout>

      <StackLayout *ngIf="phoneType === 1">
        <TextField keyboardType="phone" hint="Enter Phone Number..." [(ngModel)]="phoneNumber"></TextField>
        <TextField keyboardType="text" hint="Enter Message..." [(ngModel)]="message"></TextField>
        <Button (tap)="textNumber()" *ngIf="phoneNumber && message" class="text-button" [text]="'Text ' + phoneNumber"></Button>    
      </StackLayout>

    </StackLayout>
  `
})
export class AppComponent {
  //Variables
  phoneNumber: number;
  message: string;

  //Used to determine which choice user has selected
  phoneType: number;

  //Set user choice (text or phone)
  setPhoneType(val) {
    this.phoneType = val;
  }

  callNumber() {
    phone.dial(String(this.phoneNumber), true)
  }

  textNumber() {
    /* 
      As we have an array of phone numbers, we could add a second one here
      phone.sms(['1234','5678'...], message)
    */
    phone.sms([String(this.phoneNumber)], this.message).then((result) => {
      //Returns a promise, do what you want here
      console.log(result);
    })
  }
}
