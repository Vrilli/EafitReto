import { Component } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] 
})
export class LoginComponent {
  email: string;
  password: string;

  constructor(private router: Router) { 
    this.email = ''; 
    this.password = ''; 
  }

  onSubmit() {
    this.router.navigate(['/home']);
  }
}
