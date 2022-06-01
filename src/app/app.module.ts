import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChampComponent } from './champ/champ.component';
import { TableComponent } from './table/table.component';
import { NameComponent } from './name/name.component';
import { IdentityComponent } from './identity/identity.component';
import { TableAvatarComponent } from './table/table-avatar/table-avatar.component';
import { FormComponent } from './form/form.component';
// Import thư viện này để sử dụng Form
import { FormsModule } from '@angular/forms';
import { ShowValidateComponent } from './components/show-validate/show-validate.component';
import { ListComponent } from './list/list.component';
import { UserComponent } from './user/user.component';
import { UserFormComponent } from './user-form/user-form.component';
import { RouterModule, Routes } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { TestComponent } from './test/test.component';
import { ClientComponent } from './layouts/client/client.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { HomeComponent } from './home/home.component';
import { AdminProductComponent } from './page/admin/admin-product/admin-product.component';
// Đây là module cung cấp các phương thức để component sử dụng gọi API
import { HttpClientModule } from '@angular/common/http';
import { AdminProductDetailComponent } from './admin-product-detail/admin-product-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    ChampComponent,
    TableComponent,
    NameComponent,
    IdentityComponent,
    TableAvatarComponent,
    FormComponent,
    ShowValidateComponent,
    ListComponent,
    UserComponent,
    UserFormComponent,
    TestComponent,
    ClientComponent,
    AdminComponent,
    HomeComponent,
    AdminProductComponent,
    AdminProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule, // Đưa vào đây để FormComponent bên trên có thể dùng,
    RouterModule,
    HttpClientModule
  ],
  providers: [
   
  ],
  bootstrap: [AppComponent],
  exports: [ RouterModule ]
})
export class AppModule { }
