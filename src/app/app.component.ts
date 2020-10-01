import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inss: number = 0;
  irrf: number = 0;
  salarioComDesconto: number = 0;

  onKeyPress(event: any){
    let salario:number = event.target.value;
    let inssSubt:number = 0;
    let irrfSubt:number = 0;
    let result:number = 0;

    if(salario <= 1045 ){
      inssSubt = salario * 0.075
    }else if (salario >= 1045.01 && salario <= 2089.60	) {
      inssSubt = salario * 0.09
    }else if (salario >= 2089.61 && salario <= 3134.40) {
      inssSubt = salario * 0.12
    }else if (salario >= 3134.41 && salario >= 6101.06) {
      inssSubt = Math.round((salario * 0.14) * 100) / 100
    }

    if(salario <= 1903.98 ){
      irrfSubt = 0
    }else if (salario >= 1903.99 && salario <= 2826.65	) {
      irrfSubt = salario * 0.075
    }else if (salario >= 2826.66 && salario <= 3751.05) {
      irrfSubt = salario * 0.15
    }else if (salario >= 3751.06 && salario <= 4664.68) {
      irrfSubt = salario * 0.225
    }else if (salario >= 4664.69){
      irrfSubt = Math.round((salario * 0.275) * 100) / 100
    }

    result = salario - irrfSubt - inssSubt;
    this.inss = inssSubt;
    this.irrf = irrfSubt;
    this.salarioComDesconto = Math.round(result * 100) / 100
  }
}
