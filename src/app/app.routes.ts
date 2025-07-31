import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './Components/about/about.component';
import { ContactComponent } from './Components/contact/contact.component';
import { HomeComponent } from './Components/home/home.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { CartComponent } from './Components/cart/cart.component';

export const routes: Routes = [
    {path: '' , component: HomeComponent },
    {path:"about", component:AboutComponent},
    {path:"contact", component:ContactComponent},
    {path:"details/:id",component:ProductDetailsComponent},
    {path:"cart", component:CartComponent },

];
