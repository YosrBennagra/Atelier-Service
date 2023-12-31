import { Component, OnInit } from '@angular/core';
import { Produit } from './produit.model';
import { Product } from '../product-module/product.module';
import {ProductServiceService} from '../service/product-service.service'
@Component({
  selector: 'app-list-produits',
  templateUrl: './list-produits.component.html',
  styleUrls: ['./list-produits.component.css']
})
export class ListProduitsComponent implements OnInit {
  constructor(private productService: ProductServiceService) { }
  ListProduct:Produit[]=[]
  number : number=0; number9 : number=0;

  afficheProduct:Product[]=[]
  productCount: { [libelle: string]: number } = {};
  ngOnInit(): void {

    this.afficheProduct=this.productService.getAllProducts()
    this.number=this.productService.getNbProductsByLibelle("PC")

}
codeR!: string;
idProduit!: number;
code!: string;
libelle!: string;
prixUnitaire!: number;
tauxTVA!: number;



protected readonly Number = Number;
index: Number | undefined;
  calculerProduit(libelle: string,i: Number) {
    this.index=i;

    this.number9=this.productService.getNbProductsByLibelle(libelle)

  }

  produits: Produit[] = 
[
{idProduit:1,code:"P147852P",libelle:"Produit1", prixUnitaire:12.5, tauxTVA:0.02,},
{idProduit:2,code:"P147552P",libelle:"Produit1", prixUnitaire:30, tauxTVA:0.1980},
{idProduit:3,code:"D14785CC",libelle:"Produit1", prixUnitaire:20, tauxTVA:0.1980},
{idProduit:4,code:"E147852P",libelle:"Produit1", prixUnitaire:50, tauxTVA:0.1980},
{idProduit:5,code:"F147852P",libelle:"Produit1", prixUnitaire:70, tauxTVA:0.02},
  ];

  newProduct: any = {
    code: '',
    libelle: '',
    prixUnitaire: 0,
    tauxTVA: 0
  };

  rechercheCode: string = '';
  filteredProduits: any[] = this.produits;
  rechercheProducts() {
    if (this.rechercheCode.trim() === '') {
      this.filteredProduits = this.produits;
    } else {
      this.filteredProduits = this.produits.filter(produit =>
        produit.code !== undefined && produit.code.startsWith(this.rechercheCode)
      );
    }
  }
  

  toggleTVA(produit: any) {
    if (produit.tauxTVA !== 0.02) {
      produit.tauxTVA = 0.02;
      produit.showTVA = true;
    } else {
      produit.showTVA = !produit.showTVA;
    }
  }
  

  addProduct() {
    this.produits.push(this.newProduct);
    this.newProduct = {
      code: '',
      libelle: '',
      prixUnitaire: 0,
      tauxTVA: 0
    };
  }
}
