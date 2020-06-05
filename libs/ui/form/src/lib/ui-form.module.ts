import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap'

import { ConfigOption, FormlyModule } from '@ngx-formly/core'
import { UiFormComponent } from './ui-form.component'

import {
  emailValidator,
  emailValidatorMessage,
  maxlengthValidationMessage,
  maxValidationMessage,
  minlengthValidationMessage,
  minValidationMessage,
} from './validators'

const config: ConfigOption = {
  types: [],
  validationMessages: [
    { name: 'required', message: 'This field is required' },
    { name: 'minlength', message: minlengthValidationMessage },
    { name: 'maxlength', message: maxlengthValidationMessage },
    { name: 'min', message: minValidationMessage },
    { name: 'max', message: maxValidationMessage },
    { name: 'email', message: emailValidatorMessage },
  ],
  validators: [{ name: 'email', validation: emailValidator }],
}

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, FormlyModule.forRoot(config), FormlyBootstrapModule],
  exports: [FormsModule, ReactiveFormsModule, FormlyModule, FormlyBootstrapModule, UiFormComponent],
  declarations: [UiFormComponent],
})
export class UiFormModule {}
