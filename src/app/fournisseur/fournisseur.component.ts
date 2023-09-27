import { Component } from '@angular/core';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent {
  idFournisseur?: number = 105;
  code?: string = 'A104B89';
  libelle?: string = 'MyTeck';
  hide: boolean = false;
  CacherAfficher?: string = 'Cacher';



  Hide() {
    this.hide = !this.hide;
    if (this.hide == true)
      this.CacherAfficher = 'Afficher';
    else
      this.CacherAfficher = 'Cacher';
    console.log('hide:', this.hide);
  }
}


