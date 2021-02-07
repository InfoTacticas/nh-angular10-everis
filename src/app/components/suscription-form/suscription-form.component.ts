import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suscription-form',
  templateUrl: './suscription-form.component.html',
  styleUrls: ['./suscription-form.component.scss']
})
export class SuscriptionFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(suscriptionform){
    console.log(suscriptionform.value);
  }

}
