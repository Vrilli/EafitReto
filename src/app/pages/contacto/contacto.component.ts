import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
  imports: [ReactiveFormsModule]
})
export class ContactoComponent implements OnInit {
  
  formularioContacto: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formularioContacto = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  enviarFormulario() {
    if (this.formularioContacto.valid) {
      console.log(this.formularioContacto.value);
      alert("Mensaje enviado satisfactoriamente");
      localStorage.setItem('mensajeContacto', JSON.stringify(this.formularioContacto.value));
      window.location.reload();
    }
  }
}
