import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Calculadora Angular';
  //Propiedades de clase para almacenar los numeros a operar y el resultado
  //Estas propiedades las voy a enlazar con un binding bidireccional
  num1: number = 0;
  num2: number = 0;
  result: number = 0;
  error: string = '';

  //*** MÉTODOS ***
  //Método de sumar
  sumar(): void {
    this.error = ''; //Reseteamos el mensaje de error en caso de que se haya dado previamente
    this.result = this.num1 + this.num2;
    // (<HTMLInputElement>ev.target).classList.add("bg-secondary");
  }

  //Método de restar
  restar(): void {
    this.error = ''; //Reseteamos el mensaje de error en caso de que se haya dado previamente
    this.result = this.num1 - this.num2;
  }

  //Método de multiplicar
  multiplicar(): void {
    this.error = ''; //Reseteamos el mensaje de error en caso de que se haya dado previamente
    this.result = this.num1 * this.num2;
  }

  //Método de dividir
  dividir(): void {
    if (this.num2 === 0) {
      //Si el divisor es 0 no se podrá realizar la operación y aparecerá un error
      this.error = '** ERROR: El divisor no puede ser 0 **';
      this.result = 0; //Reseteamos el resultado
    } else {
      this.error = ''; //Reseteamos el mensaje de error en caso de que se haya dado previamente
      this.result = this.num1 / this.num2;
    }
  }

  //Método de multiplicar
  potencia(): void {
    this.error = ''; //Reseteamos el mensaje de error en caso de que se haya dado previamente
    this.result = this.num1 ** this.num2;
  }

  //Método de multiplicar
  porcentaje(): void {
    this.error = ''; //Reseteamos el mensaje de error en caso de que se haya dado previamente
    this.result = this.num1 * (this.num2/100);
  }

  //Método de resetear los inputs
  reset(ev: Event) {
    (<HTMLInputElement>ev.target).value = '';
  }
}
