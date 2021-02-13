import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})

export class SuscribeService {
    save(email: string){
        console.log(`Email ingresado correctamente: ${email}`);
    }
}