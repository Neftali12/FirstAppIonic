import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nombreC: string;
  email: string;
  telefono: number;
  notas: string;
  personas : Array<any>;
  focoEncendido:boolean;
  mostrarNotas: boolean;
  
  constructor(public alertController: AlertController) {
    this.focoEncendido = false;
    
    this.personas = [
      {telefono: 4491842426,
      nombreC: 'Bernardo Paredes',
      notas: 'Programador Jr',
      email:'berna@gmail.com'}
    ]
  }


  apagarEncender(encendido:true){
    this.focoEncendido = encendido;
    console.log(this.focoEncendido);
}


  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Exito',
      // subHeader: "<ion-card-header><ion-card-subtitle>{{this.email}}</ion-card-subtitle><ion-card-title>{{this.nombreC}}</ion-card-title></ion-card-header><ion-card-content>{{this.telefono}}</ion-card-content><ion-card-content>{{this.notas}}</ion-card-content><ion-button (click)='delete()' color='danger'><ion-icon name='close-outline'></ion-icon></ion-button>",
      message: 'se agrego  '+ this.nombreC,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Se presiono cancelar');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Se presiono OK');
          }
        }
      ]
    });
    if (this.nombreC == null) {
      console.log('no hay nada');
    }else      
    await alert.present();
    
    let newPersona = {
      nombreC: this.nombreC, 
      email: this.email,
      telefono: this.telefono,
      notas: this.notas
    }
    this.personas.push(newPersona);
    console.log(this.personas);
    
    console.log(this.personas[1].nombreC);
    console.log(this.personas[1].telefono);
    console.log(this.personas[1].email);
    console.log(this.personas[1].notas);
  }

  
  async borrar(i) {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Eliminar contacto',
        subHeader: '',
        message: 'Desea eliminar a '+this.personas[i].nombreC+'?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              console.log('Se presiono cancelar');
            }
          }, {
            text: 'Okay',
            handler: () => {
              console.log('Se presiono OK');
              this.personas.splice(i,1);
              console.log(this.personas.splice(i,1));
              
            }
          }
        ]
      });
      await alert.present();
      }

      mostrarNo(toggle:boolean){
        this.mostrarNotas = toggle;
      }
}