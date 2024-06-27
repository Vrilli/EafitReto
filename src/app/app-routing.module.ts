import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestimonioComponent } from './pages/testimonio/testimonio.component';
import { CommonModule } from '@angular/common';


const routes: Routes = [
    { path: '', redirectTo: '/inicio', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'inicio', component: InicioComponent },
    { path: 'nosotros', component: NosotrosComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'testimonios', component: TestimonioComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes), ReactiveFormsModule, FormsModule, CommonModule],
    exports: [RouterModule],
})
export class AppRoutingModule { }

export { routes };
