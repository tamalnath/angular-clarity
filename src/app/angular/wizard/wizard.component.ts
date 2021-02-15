import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  ValidationErrors,
  AbstractControl
} from '@angular/forms';
import { CITY_STATES, UtilityService } from '../../utility.service';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent implements OnInit {

  cityStates = CITY_STATES;
  open: boolean = false;
  form1: FormGroup;
  form2: FormGroup;

  name: string = '';
  dateOfBirth: string = '';
  today = new Date();
  age: number = 0;
  address: string = '';
  city: string = '';
  state: string = '';
  permanent: boolean = false;

  constructor(private utility: UtilityService, private formBuilder: FormBuilder) {
    this.form1 = this.formBuilder.group({
      name: new FormControl('', []),
      dateOfBirth: new FormControl('', []),
    });
    this.form2 = this.formBuilder.group({
      address: new FormControl('', []),
      city: new FormControl('', []),
      permanent: new FormControl('', []),
    });
  }

  ngOnInit(): void {
  }

  getFormErrorMessage(validationField: string): string {
    let control: AbstractControl|null = this.form1.get(validationField);
    if (control == null) {
      control = this.form2.get(validationField);
    }
    if (control == null) {
      return "";
    }

    if (control.errors) {
      if (control.errors.required) {
        return validationField + " required";
      } else if (control.errors.maxlength) {
        return validationField + " too big";
      } else if (control.errors.minlength) {
        return validationField + " too small";
      } else {
        return "Invalid " + validationField;
      }
    }
    return "";
  }

  save(): void {
    this.open = !this.utility.save(this.name, this.dateOfBirth, this.address, this.city, this.permanent);
    this.state = this.utility.getState();
    this.age = this.utility.getAge();
  }
  
}
