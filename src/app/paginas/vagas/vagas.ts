import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // IMPORTANTE

@Component({
  selector: 'app-vagas',
  standalone: true,
  imports: [CommonModule], // Adicione aqui
  templateUrl: './vagas.html',
  styleUrl: './vagas.css'
})
export class Vagas {
  // Exemplo de como a variável deve estar para receber os dados do JSON
  vagas = [
    { id: 1, titulo: "Desenvolvedor Front-End", empresa: "Tech Solutions", local: "Remoto", salario: "R$ 4.000" },
    { id: 2, titulo: "Analista de Sistemas", empresa: "InovaTI", local: "São Paulo", salario: "R$ 5.500" },
    { id: 3, titulo: "Suporte Técnico", empresa: "HelpDesk Pro", local: "Porto Velho", salario: "R$ 2.500" }
  ];
}