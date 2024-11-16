import { Component } from '@angular/core';
import { routes } from '../app.routes';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-ecommerce',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, SidebarComponent],
  templateUrl: './ecommerce.component.html',
  styleUrl: './ecommerce.component.css'
})
export class EcommerceComponent {

}
