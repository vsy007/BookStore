import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { CartComponent } from './cart/cart.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { RegisterComponent } from './register/register.component';
import { BookFilterPipe } from './book-filter.pipe';
import { BestSellersComponent } from './best-sellers/best-sellers.component';
import { NewReleaseComponent } from './new-release/new-release.component';
import { OrdersComponent } from './orders/orders.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AddressComponent } from './address/address.component';



@NgModule({
  declarations: [
    AppComponent,
    // TopBarComponent,           
    BooksComponent,
    BookDetailsComponent,
    CartComponent,
    TopBarComponent,
    RegisterComponent,
    BookFilterPipe,
    BestSellersComponent,
    NewReleaseComponent,
    OrdersComponent,
    SignUpComponent,
    AddressComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
