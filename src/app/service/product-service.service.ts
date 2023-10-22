import { Injectable } from '@angular/core';
import { Product } from '../product-module/product.module';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  products:Product[]=[
    { id: 1, code: 127,libelle: "PC", prixunitaire : 2000, tauxTva :10}, { id: 8, code: 1000,libelle: "PC", prixunitaire : 2000, tauxTva :10},
    { id: 2, code: 128,libelle: "TV", prixunitaire : 1000, tauxTva :20},
    { id: 3, code: 128,libelle: "Table", prixunitaire : 200, tauxTva :30},
  ]
  getAllProducts():Product[]{
    return this.products
  }
  getNbProductsByLibelle(libelle:string){
    let count=0

    for(let p of this.products){
      if (p.libelle==libelle)
        count++
    }
    return count
  }

  constructor() { }
}