import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Router } from '@angular/router'; 
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  imports: [ReactiveFormsModule, RouterLink, RouterLinkActive],
  styleUrls: ['./login.component.css'] 
})
export class LoginComponent {
  private apiUser = inject(UserService)
  private navega = inject(Router);

  emailC = new FormControl('')
  contrasenaC = new FormControl('')


  dataUsuario: any = {};

  resgistrarUsuario() {
    this.dataUsuario = {
      "email": this.emailC.value,
      "password": this.contrasenaC.value
    }

    this.apiUser.authUser(this.dataUsuario).subscribe(
      data =>{
        console.log(data);
        alert("Bienvenido(a)");
       localStorage.setItem('tokenUserprueba' , data.access_token)
       this.navega.navigate(['/inicio']);
        
      },(error) =>{                          //error callback
        console.error('error de autenticacion', error)
        if(error.status == 401){
          alert("Error en sus credenciales, intenta nuevamente");
          this.navega.navigate(['/login']);
        }
      }
    )
  }
}
