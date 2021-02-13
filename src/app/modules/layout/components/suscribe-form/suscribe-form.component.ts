import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { SuscribeService } from '../../services/suscribe.service';

@Component({
  selector: 'app-suscribe-form',
  templateUrl: './suscribe-form.component.html',
  styleUrls: ['./suscribe-form.component.scss']
})
export class SuscribeFormComponent implements OnInit {
  
  suscribeForm: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private suscribeService: SuscribeService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.suscribeForm = this.fb.group({
      email: [null, Validators.email]  
    });

  }

  toSuscribe(suscribeForm) : void {
    console.log("El email es: " + suscribeForm.get('email').value);
    this.suscribeService.save( suscribeForm.get('email').value );
    if(this.suscribeForm.valid){
      //this.suscribeService.save( 'miemail@gmail.com' );
      console.log("El email es: " + suscribeForm.get('email').value);
      //this.suscribeService.save( suscribeForm.get('email').value );
    }
    
  }
}
