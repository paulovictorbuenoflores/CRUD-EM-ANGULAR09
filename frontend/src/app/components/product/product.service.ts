import { Product } from './product.model';
import { Injectable } from '@angular/core';
import {MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({//ta dizendo que essa classe pode ser injetada dentro de outras classes 
  providedIn: 'root'// quando dizemos que esse service vai ser provido apartir do root, ou seja, no nivel da aplicacao, dizemos que ele é um singleton- singleton é uma classe que tem apenas uma unica instancia 
})
export class ProductService {

  baseUrl ="http://localhost:3001/products";//poderia chamar de baseAPI também

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {//temos aqui uma injecao de dependecia, o angular vai injetar o snackBar 

  }

  showMessage(msg: string):void{

    this.snackBar.open(msg,'x',{
      duration:3000,
      horizontalPosition:"right",
      verticalPosition:"top"
    

    })
  }


  //semantica do rest CRUD
/*
atualizacao -Put
criacao -Post
leitura - Get

*/

  //funcao responsavel por inserir no backend um novo produto
  create(product: Product):Observable<Product>{


    //requisicao http para o backend
    return this.http.post<Product>(this.baseUrl, product);//esse post vai retornar um observer
  }
//responsavel por ler os produtos cadatrados no backend
//observer vai ter uma lista de produtos
  read(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl)

  }



readById(id: string): Observable<Product>{

  const url=`${this.baseUrl}/${id}`
  return this.http.get<Product>(url)
}



update(product: Product): Observable<Product>{
  const url=`${this.baseUrl}/${product.id}`
return this.http.put<Product>(url, product)

}
/*delete(id: string):Observable<Product>{
const url =`${this.baseUrl}/${id}`
return this.http.delete<Product>(url)
}*/
delete(product: Product):Observable<Product>{
  const url =`${this.baseUrl}/${product.id}`
  return this.http.delete<Product>(url)
  }

}
