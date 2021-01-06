import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component'; 
import { AdminComponent } from './admin/admin.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ShowProductsComponent } from './show-products/show-products.component';
import { ShowUsersComponent } from './show-users/show-users.component';
import { ProductsComponent } from './products/products.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { UserComponent } from './user/user.component';
import { ProductDetailsComponent } from './product-details/product-details.component';



const routes: Routes = [
  {path:'',redirectTo: 'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'contact', component:ContactComponent},
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'admin',component:AdminComponent},
  {path:'user', component:UserComponent},
  {path:'AddProduct',component:AddProductComponent},
  {path: 'ShowProducts',component:ShowProductsComponent},
  {path:'ShowUsers',component:ShowUsersComponent},
  {path:'products',component:ProductsComponent},
  {path:'editProduct/:id',component:EditProductComponent},
  {path:'viewProduct/:id',component:ProductDetailsComponent}

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }