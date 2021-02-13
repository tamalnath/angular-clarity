import { Component, OnInit } from '@angular/core';
import { CITY_STATES } from '../../utility.service';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent implements OnInit {

  cityStates = CITY_STATES;
  open: boolean = false;

  name: string = '';
  dateOfBirth: string = '';
  address: string = '';
  city: string = '';
  state: string = '';
  permanent: boolean = false;
  form = { name: "", dateOfBirth: "", address: "", city: "", permanent: false };

  constructor() { }

  ngOnInit(): void {
  }

  save(): void {
    this.name = this.form.name;
    this.address = this.form.address;
    this.city = this.form.city;
    this.state = this.cityStates[this.city];
    this.permanent = this.form.permanent;
    this.dateOfBirth = this.form.dateOfBirth;
    this.open = false;
  }
  
}
