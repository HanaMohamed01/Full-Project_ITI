import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from "./Components/navbar/navbar.component";
import { ProductComponent } from "./Components/product/product.component";
import { CategoryComponent } from "./Components/category/category.component";
import { FooterComponent } from "./Components/footer/footer.component";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, NavbarComponent, ProductComponent, CategoryComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

}
