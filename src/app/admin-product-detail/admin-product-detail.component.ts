import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../types/Product';

@Component({
  selector: 'app-admin-product-detail',
  templateUrl: './admin-product-detail.component.html',
  styleUrls: ['./admin-product-detail.component.css']
})
export class AdminProductDetailComponent implements OnInit {
  id:string;
  product:Product
  constructor(private activateRoute: ActivatedRoute,private productService:ProductService) {

    this.id="";
    this.product={
      _id:0,
      name:''

    }

   }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];
    this.productService.getProduct(this.id).subscribe((data)=>{
      this.product = data
      console.log(this.product)

    })
  }

}
