import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-suscription-inline-form',
  templateUrl: './suscription-inline-form.component.html',
  styleUrls: ['./suscription-inline-form.component.scss']
})
export class SuscriptionInlineFormComponent implements OnInit {
  email : FormControl;
  constructor() { }

  ngOnInit(): void {
    this.initForm();
    /*evento escuchando para ver la reactividad -> FormControl es un elemento reactivo 
    Nosotros controlamos el Form
    */ 
    this.email.valueChanges.subscribe(
      value => console.log(value)
    )
  }

  initForm(): void{
    this.email = new FormControl(
      null,
      [
        Validators.required,
        Validators.email,
        Validators.pattern(/^[a-z0-9]+@nh.com.pe$/),
      ]

    );

  }

  suscribe(){
    console.log(this.email.valid);
    console.log(this.email.errors);
  }

}
