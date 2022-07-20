import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[] = [];
  displayedColumns =['id','name','price','action']


  constructor(private productService: ProductService) { }

  ngOnInit(): void {//metodo chamado quando o componente é inicializado
    this.productService.read().subscribe(products =>{/*Subscribe. Este método é como conectamos um observer(observador) a um Observable*/
    //quando chegar a resposta eu vou ter como resposta aminha requisicao os produtos
    this.products=products//aqui eu passo a lista de produto recebida pelo observer para minha lista de produtos
      console.log(products)//depois mostro no console para ver se esta tudo funcionando
    })
  }

  

}
