import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
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
      // Lógica para enviar el formulario
      console.log(this.formularioContacto.value);
    }
  }
}
