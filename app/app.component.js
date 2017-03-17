"use strict";
var core_1 = require("@angular/core");
var phone = require("nativescript-phone");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.callNumber = function () {
        phone.dial(String(this.phoneNumber), true);
    };
    AppComponent.prototype.textNumber = function () {
        /*
          As we have an array of phone numbers, we could add a second one here
          phone.sms(['1234','5678'...], message)
        */
        phone.sms([String(this.phoneNumber)], this.message).then(function (result) {
            //Returns a promise, do what you want here
            console.log(result);
        });
    };
    //Set user choice (text or phone)
    AppComponent.prototype.setPhoneType = function (val) {
        this.phoneType = val;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        template: "\n    <ActionBar class=\"action-bar\" title=\"NativeScript SMS Application\"></ActionBar>\n    <StackLayout class=\"p-20\">\n\n      <Label text=\"Select either TEXT or PHONE to continue.\"></Label>\n\n      <FlexboxLayout>\n        <Button class=\"phone-button\" (tap)=\"setPhoneType(0)\" text=\"PHONE\"></Button>\n        <Button class=\"text-button\"(tap)=\"setPhoneType(1)\" text=\"Text\"></Button>\n      </FlexboxLayout>\n\n      <StackLayout *ngIf=\"phoneType === 0\">\n        <TextField keyboardType=\"phone\" hint=\"Enter Phone Number...\" [(ngModel)]=\"phoneNumber\"></TextField>\n        <Button (tap)=\"callNumber()\" *ngIf=\"phoneNumber\" class=\"phone-button\" [text]=\"'Call ' + phoneNumber\"></Button>    \n      </StackLayout>\n\n      <StackLayout *ngIf=\"phoneType === 1\">\n        <TextField keyboardType=\"phone\" hint=\"Enter Phone Number...\" [(ngModel)]=\"phoneNumber\"></TextField>\n        <TextField keyboardType=\"text\" hint=\"Enter Message...\" [(ngModel)]=\"message\"></TextField>\n        <Button (tap)=\"textNumber()\" *ngIf=\"phoneNumber && message\" class=\"text-button\" [text]=\"'Text ' + phoneNumber\"></Button>    \n      </StackLayout>\n\n    </StackLayout>\n  "
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUEwQztBQUMxQywwQ0FBNEM7QUE0QjVDLElBQWEsWUFBWTtJQUF6QjtJQThCQSxDQUFDO0lBdEJDLGlDQUFVLEdBQVY7UUFDRSxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDNUMsQ0FBQztJQUdELGlDQUFVLEdBQVY7UUFDRTs7O1VBR0U7UUFDRixLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFNO1lBQzlELDBDQUEwQztZQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELGlDQUFpQztJQUNqQyxtQ0FBWSxHQUFaLFVBQWEsR0FBRztRQUNkLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO0lBQ3ZCLENBQUM7SUFHSCxtQkFBQztBQUFELENBQUMsQUE5QkQsSUE4QkM7QUE5QlksWUFBWTtJQTNCeEIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFFBQVEsRUFBRSxxckNBdUJUO0tBQ0YsQ0FBQztHQUNXLFlBQVksQ0E4QnhCO0FBOUJZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIHBob25lIGZyb20gJ25hdGl2ZXNjcmlwdC1waG9uZSc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXG4gIHRlbXBsYXRlOiBgXG4gICAgPEFjdGlvbkJhciBjbGFzcz1cImFjdGlvbi1iYXJcIiB0aXRsZT1cIk5hdGl2ZVNjcmlwdCBTTVMgQXBwbGljYXRpb25cIj48L0FjdGlvbkJhcj5cbiAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJwLTIwXCI+XG5cbiAgICAgIDxMYWJlbCB0ZXh0PVwiU2VsZWN0IGVpdGhlciBURVhUIG9yIFBIT05FIHRvIGNvbnRpbnVlLlwiPjwvTGFiZWw+XG5cbiAgICAgIDxGbGV4Ym94TGF5b3V0PlxuICAgICAgICA8QnV0dG9uIGNsYXNzPVwicGhvbmUtYnV0dG9uXCIgKHRhcCk9XCJzZXRQaG9uZVR5cGUoMClcIiB0ZXh0PVwiUEhPTkVcIj48L0J1dHRvbj5cbiAgICAgICAgPEJ1dHRvbiBjbGFzcz1cInRleHQtYnV0dG9uXCIodGFwKT1cInNldFBob25lVHlwZSgxKVwiIHRleHQ9XCJUZXh0XCI+PC9CdXR0b24+XG4gICAgICA8L0ZsZXhib3hMYXlvdXQ+XG5cbiAgICAgIDxTdGFja0xheW91dCAqbmdJZj1cInBob25lVHlwZSA9PT0gMFwiPlxuICAgICAgICA8VGV4dEZpZWxkIGtleWJvYXJkVHlwZT1cInBob25lXCIgaGludD1cIkVudGVyIFBob25lIE51bWJlci4uLlwiIFsobmdNb2RlbCldPVwicGhvbmVOdW1iZXJcIj48L1RleHRGaWVsZD5cbiAgICAgICAgPEJ1dHRvbiAodGFwKT1cImNhbGxOdW1iZXIoKVwiICpuZ0lmPVwicGhvbmVOdW1iZXJcIiBjbGFzcz1cInBob25lLWJ1dHRvblwiIFt0ZXh0XT1cIidDYWxsICcgKyBwaG9uZU51bWJlclwiPjwvQnV0dG9uPiAgICBcbiAgICAgIDwvU3RhY2tMYXlvdXQ+XG5cbiAgICAgIDxTdGFja0xheW91dCAqbmdJZj1cInBob25lVHlwZSA9PT0gMVwiPlxuICAgICAgICA8VGV4dEZpZWxkIGtleWJvYXJkVHlwZT1cInBob25lXCIgaGludD1cIkVudGVyIFBob25lIE51bWJlci4uLlwiIFsobmdNb2RlbCldPVwicGhvbmVOdW1iZXJcIj48L1RleHRGaWVsZD5cbiAgICAgICAgPFRleHRGaWVsZCBrZXlib2FyZFR5cGU9XCJ0ZXh0XCIgaGludD1cIkVudGVyIE1lc3NhZ2UuLi5cIiBbKG5nTW9kZWwpXT1cIm1lc3NhZ2VcIj48L1RleHRGaWVsZD5cbiAgICAgICAgPEJ1dHRvbiAodGFwKT1cInRleHROdW1iZXIoKVwiICpuZ0lmPVwicGhvbmVOdW1iZXIgJiYgbWVzc2FnZVwiIGNsYXNzPVwidGV4dC1idXR0b25cIiBbdGV4dF09XCInVGV4dCAnICsgcGhvbmVOdW1iZXJcIj48L0J1dHRvbj4gICAgXG4gICAgICA8L1N0YWNrTGF5b3V0PlxuXG4gICAgPC9TdGFja0xheW91dD5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICAvL1ZhcmlhYmxlc1xuICBwaG9uZU51bWJlcjogbnVtYmVyO1xuICBtZXNzYWdlOiBzdHJpbmc7XG5cbiAgLy9Vc2VkIHRvIGRldGVybWluZSB3aGljaCBjaG9pY2UgdXNlciBoYXMgc2VsZWN0ZWRcbiAgcGhvbmVUeXBlOiBudW1iZXI7XG5cbiAgY2FsbE51bWJlcigpIHtcbiAgICBwaG9uZS5kaWFsKFN0cmluZyh0aGlzLnBob25lTnVtYmVyKSwgdHJ1ZSlcbiAgfVxuXG5cbiAgdGV4dE51bWJlcigpIHtcbiAgICAvKiBcbiAgICAgIEFzIHdlIGhhdmUgYW4gYXJyYXkgb2YgcGhvbmUgbnVtYmVycywgd2UgY291bGQgYWRkIGEgc2Vjb25kIG9uZSBoZXJlXG4gICAgICBwaG9uZS5zbXMoWycxMjM0JywnNTY3OCcuLi5dLCBtZXNzYWdlKVxuICAgICovXG4gICAgcGhvbmUuc21zKFtTdHJpbmcodGhpcy5waG9uZU51bWJlcildLCB0aGlzLm1lc3NhZ2UpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgLy9SZXR1cm5zIGEgcHJvbWlzZSwgZG8gd2hhdCB5b3Ugd2FudCBoZXJlXG4gICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgIH0pXG4gIH1cblxuICAvL1NldCB1c2VyIGNob2ljZSAodGV4dCBvciBwaG9uZSlcbiAgc2V0UGhvbmVUeXBlKHZhbCkge1xuICAgIHRoaXMucGhvbmVUeXBlID0gdmFsO1xuICB9XG5cblxufVxuIl19