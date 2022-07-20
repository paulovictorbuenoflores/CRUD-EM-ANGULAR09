import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {


  product!: Product; 
  constructor(  private productService: ProductService,
    private router: Router , 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id =this.route.snapshot.paramMap.get('id')
    // const id =JSON.parse( this.route.snapshot.paramMap.get('id')||'{}')
    this.productService.readById(id||"0").subscribe(product =>{
    this.product=product
console.log(product);
this.deleteProduct();

    });
  }
deleteProduct():void{
  this.productService.delete(this.product).subscribe(()=>{
    this.productService.showMessage('Produto deletado com sucesso!')
  
    this.router.navigate(['/products'])
  })
}
}
