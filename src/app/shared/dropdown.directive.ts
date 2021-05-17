import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
  @HostBinding('class.blue-color') blueColor = false;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
    this.blueColor = !this.blueColor;
  }

  constructor() { }

}
