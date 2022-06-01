import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminProductDetailComponent } from './admin-product-detail/admin-product-detail.component';
import { ChampComponent } from './champ/champ.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { ClientComponent } from './layouts/client/client.component';
import { AdminProductComponent } from './page/admin/admin-product/admin-product.component';
import { TestComponent } from './test/test.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  {path :'champ',
  component: TestComponent
  },
  
  {
    path:'',component:ClientComponent,
    children:[
      {
        path:'' , 
        component:TestComponent
      }
      ,{
        path:'product',
        component: UserComponent
      }
    ]

  },
  {
    path:"admin",
    component:AdminComponent,
    children:[
      {
        path:'',
        redirectTo:'user',
        pathMatch:'full'
      }
      ,{
        path:'user',
        component:UserFormComponent 
      },
      {
        path:'product',
        children:[{
          path:'',
        component:AdminProductComponent,
          
        },
        {
          path:':id/edit',
          component:AdminProductDetailComponent
        }]
      },
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
