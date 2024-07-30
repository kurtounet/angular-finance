import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  router = inject(Router);
 email:string ="";
 pwd:string ="";
 dateEmail:string ="admin@gmail.com";
 dataPwd:string ="1234";

  onSubmit() {
    if (this.email == this.dateEmail && this.pwd == this.dataPwd) {
      this.router.navigate(['dashboard']);
    }     
  }
}
