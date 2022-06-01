import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../types/Product';
@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit {

  products: Product[];
  constructor(private productService: ProductService) {
    this.products = [];
  }
  ngOnInit(): void {
    this.getList();
  
}
getList(){
  this.productService.getProducts().subscribe((data) => {
    this.products = data;
  });
}
onRemove(id:any){
  const Remive = confirm("xoa ");
  if(Remive &&id){
    this.productService.removeProduct(id).subscribe(()=>{
      this.getList()
    })
  }
}
}
