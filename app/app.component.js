"use strict";
var core_1 = require("@angular/core");
var phone = require("nativescript-phone");
var AppComponent = (function () {
    function AppComponent() {
    }
    //Set user choice (text or phone)
    AppComponent.prototype.setPhoneType = function (val) {
        this.phoneType = val;
    };
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
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        template: "\n    <ActionBar class=\"action-bar\" title=\"NativeScript SMS Application\"></ActionBar>\n    <StackLayout class=\"p-20\">\n\n      <Label text=\"Select either TEXT or PHONE to continue.\"></Label>\n\n      <FlexboxLayout>\n        <Button class=\"phone-button\" (tap)=\"setPhoneType(0)\" text=\"PHONE\"></Button>\n        <Button class=\"text-button\"(tap)=\"setPhoneType(1)\" text=\"Text\"></Button>\n      </FlexboxLayout>\n\n      <StackLayout *ngIf=\"phoneType === 0\">\n        <TextField keyboardType=\"phone\" hint=\"Enter Phone Number...\" [(ngModel)]=\"phoneNumber\"></TextField>\n        <Button (tap)=\"callNumber()\" *ngIf=\"phoneNumber\" class=\"phone-button\" [text]=\"'Call ' + phoneNumber\"></Button>    \n      </StackLayout>\n\n      <StackLayout *ngIf=\"phoneType === 1\">\n        <TextField keyboardType=\"phone\" hint=\"Enter Phone Number...\" [(ngModel)]=\"phoneNumber\"></TextField>\n        <TextField keyboardType=\"text\" hint=\"Enter Message...\" [(ngModel)]=\"message\"></TextField>\n        <Button (tap)=\"textNumber()\" *ngIf=\"phoneNumber && message\" class=\"text-button\" [text]=\"'Text ' + phoneNumber\"></Button>    \n      </StackLayout>\n\n    </StackLayout>\n  "
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUEwQztBQUMxQywwQ0FBNEM7QUE0QjVDLElBQWEsWUFBWTtJQUF6QjtJQTJCQSxDQUFDO0lBbkJDLGlDQUFpQztJQUNqQyxtQ0FBWSxHQUFaLFVBQWEsR0FBRztRQUNkLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxpQ0FBVSxHQUFWO1FBQ0UsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQzVDLENBQUM7SUFFRCxpQ0FBVSxHQUFWO1FBQ0U7OztVQUdFO1FBQ0YsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsTUFBTTtZQUM5RCwwQ0FBMEM7WUFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0QixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDSCxtQkFBQztBQUFELENBQUMsQUEzQkQsSUEyQkM7QUEzQlksWUFBWTtJQTNCeEIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFFBQVEsRUFBRSxxckNBdUJUO0tBQ0YsQ0FBQztHQUNXLFlBQVksQ0EyQnhCO0FBM0JZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIHBob25lIGZyb20gJ25hdGl2ZXNjcmlwdC1waG9uZSc7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXG4gIHRlbXBsYXRlOiBgXG4gICAgPEFjdGlvbkJhciBjbGFzcz1cImFjdGlvbi1iYXJcIiB0aXRsZT1cIk5hdGl2ZVNjcmlwdCBTTVMgQXBwbGljYXRpb25cIj48L0FjdGlvbkJhcj5cbiAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XCJwLTIwXCI+XG5cbiAgICAgIDxMYWJlbCB0ZXh0PVwiU2VsZWN0IGVpdGhlciBURVhUIG9yIFBIT05FIHRvIGNvbnRpbnVlLlwiPjwvTGFiZWw+XG5cbiAgICAgIDxGbGV4Ym94TGF5b3V0PlxuICAgICAgICA8QnV0dG9uIGNsYXNzPVwicGhvbmUtYnV0dG9uXCIgKHRhcCk9XCJzZXRQaG9uZVR5cGUoMClcIiB0ZXh0PVwiUEhPTkVcIj48L0J1dHRvbj5cbiAgICAgICAgPEJ1dHRvbiBjbGFzcz1cInRleHQtYnV0dG9uXCIodGFwKT1cInNldFBob25lVHlwZSgxKVwiIHRleHQ9XCJUZXh0XCI+PC9CdXR0b24+XG4gICAgICA8L0ZsZXhib3hMYXlvdXQ+XG5cbiAgICAgIDxTdGFja0xheW91dCAqbmdJZj1cInBob25lVHlwZSA9PT0gMFwiPlxuICAgICAgICA8VGV4dEZpZWxkIGtleWJvYXJkVHlwZT1cInBob25lXCIgaGludD1cIkVudGVyIFBob25lIE51bWJlci4uLlwiIFsobmdNb2RlbCldPVwicGhvbmVOdW1iZXJcIj48L1RleHRGaWVsZD5cbiAgICAgICAgPEJ1dHRvbiAodGFwKT1cImNhbGxOdW1iZXIoKVwiICpuZ0lmPVwicGhvbmVOdW1iZXJcIiBjbGFzcz1cInBob25lLWJ1dHRvblwiIFt0ZXh0XT1cIidDYWxsICcgKyBwaG9uZU51bWJlclwiPjwvQnV0dG9uPiAgICBcbiAgICAgIDwvU3RhY2tMYXlvdXQ+XG5cbiAgICAgIDxTdGFja0xheW91dCAqbmdJZj1cInBob25lVHlwZSA9PT0gMVwiPlxuICAgICAgICA8VGV4dEZpZWxkIGtleWJvYXJkVHlwZT1cInBob25lXCIgaGludD1cIkVudGVyIFBob25lIE51bWJlci4uLlwiIFsobmdNb2RlbCldPVwicGhvbmVOdW1iZXJcIj48L1RleHRGaWVsZD5cbiAgICAgICAgPFRleHRGaWVsZCBrZXlib2FyZFR5cGU9XCJ0ZXh0XCIgaGludD1cIkVudGVyIE1lc3NhZ2UuLi5cIiBbKG5nTW9kZWwpXT1cIm1lc3NhZ2VcIj48L1RleHRGaWVsZD5cbiAgICAgICAgPEJ1dHRvbiAodGFwKT1cInRleHROdW1iZXIoKVwiICpuZ0lmPVwicGhvbmVOdW1iZXIgJiYgbWVzc2FnZVwiIGNsYXNzPVwidGV4dC1idXR0b25cIiBbdGV4dF09XCInVGV4dCAnICsgcGhvbmVOdW1iZXJcIj48L0J1dHRvbj4gICAgXG4gICAgICA8L1N0YWNrTGF5b3V0PlxuXG4gICAgPC9TdGFja0xheW91dD5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICAvL1ZhcmlhYmxlc1xuICBwaG9uZU51bWJlcjogbnVtYmVyO1xuICBtZXNzYWdlOiBzdHJpbmc7XG5cbiAgLy9Vc2VkIHRvIGRldGVybWluZSB3aGljaCBjaG9pY2UgdXNlciBoYXMgc2VsZWN0ZWRcbiAgcGhvbmVUeXBlOiBudW1iZXI7XG5cbiAgLy9TZXQgdXNlciBjaG9pY2UgKHRleHQgb3IgcGhvbmUpXG4gIHNldFBob25lVHlwZSh2YWwpIHtcbiAgICB0aGlzLnBob25lVHlwZSA9IHZhbDtcbiAgfVxuXG4gIGNhbGxOdW1iZXIoKSB7XG4gICAgcGhvbmUuZGlhbChTdHJpbmcodGhpcy5waG9uZU51bWJlciksIHRydWUpXG4gIH1cblxuICB0ZXh0TnVtYmVyKCkge1xuICAgIC8qIFxuICAgICAgQXMgd2UgaGF2ZSBhbiBhcnJheSBvZiBwaG9uZSBudW1iZXJzLCB3ZSBjb3VsZCBhZGQgYSBzZWNvbmQgb25lIGhlcmVcbiAgICAgIHBob25lLnNtcyhbJzEyMzQnLCc1Njc4Jy4uLl0sIG1lc3NhZ2UpXG4gICAgKi9cbiAgICBwaG9uZS5zbXMoW1N0cmluZyh0aGlzLnBob25lTnVtYmVyKV0sIHRoaXMubWVzc2FnZSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAvL1JldHVybnMgYSBwcm9taXNlLCBkbyB3aGF0IHlvdSB3YW50IGhlcmVcbiAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgfSlcbiAgfVxufVxuIl19