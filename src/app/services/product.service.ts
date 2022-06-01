import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Product } from '../types/Product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  

  constructor(private http: HttpClient) { }

  // Observable sẽ cung cấp kiểu xử lý bất đồng bộ để phía component lắng nghe dữ liệu
  getProducts(): Observable<Product[]>  {
    return this.http.get<Product[]>(environment.products);
  }
  getProduct(id:string):Observable<Product>{
    return this.http.get<Product>(`${environment.products}/${id}`)
  }
  removeProduct(id:string):Observable<Product>{
    return this.http.delete<Product>(`${environment.products}/${id}`)
  }
}
