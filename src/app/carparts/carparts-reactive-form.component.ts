import {Component, OnInit} from '@angular/core';
import {FormControl,  FormGroup, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-car-part-reactive-form',
  templateUrl: 'carparts-reactive-form.component.html'
})
export class CarPartsReactiveFormComponent implements OnInit {

  carPartForm: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.carPartForm = new FormGroup({
      id: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      price: new FormControl('', Validators.compose([Validators.required,
        Validators.min(500), Validators.max(5000)])),
      quantity: new FormControl('', Validators.compose([Validators.required,
        Validators.pattern('[0-9]') ]))
    });

  }

  onSubmit() {
    alert(this.carPartForm.controls['id'].value + ' ' + this.carPartForm.controls['name'].value);

  }

}
