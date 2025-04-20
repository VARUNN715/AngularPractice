import { Component } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  passwordValue: string = '';
  confirmPasswordValue: string = '';
  onSubmit(form: any): void {
    if (form.valid) {
      console.log('Form Submitted!', form.value);
    } else {
      console.log('Form is invalid. Please correct the errors.');
    }
  }

}
