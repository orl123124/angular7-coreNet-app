import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';
@Component({
  // tslint:disable-next-line: component-selector
  selector: 'ngbd-datepicker-popup',
  templateUrl: './datepicker-popup.component.html'
})
// tslint:disable-next-line: component-class-suffix
export class NgbdDatepickerPopup {
  model: any;

  @Input() parentForm: FormGroup;
  @Input() formControlNameString: string;
  @Input() formLabel: string;
}



