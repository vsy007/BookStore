import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookDetailsComponent } from './book-details/book-details.component';
import { CartComponent } from './cart/cart.component';
import { BooksComponent } from './books/books.component';
import { BestSellersComponent } from './best-sellers/best-sellers.component';
import { NewReleaseComponent } from './new-release/new-release.component'
import { OrdersComponent } from './orders/orders.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RegisterComponent } from './register/register.component';
import { AddressComponent} from './address/address.component'


const routes: Routes = [
  { path: 'address', component:AddressComponent},
  { path: 'login', component: SignUpComponent},
  { path: 'register' , component: RegisterComponent},
  { path: 'orders', component: OrdersComponent},
  { path: 'best-sellers', component: BestSellersComponent },
  { path: 'new-release', component: NewReleaseComponent},
  { path: 'cart', component: CartComponent },
  { path: '', redirectTo: 'book-list', pathMatch: 'full' },
  { path : 'book-list', component: BooksComponent },
  { path : 'details/:id', component: BookDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
