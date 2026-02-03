import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  currentPage = 'home';
  
  vagas = [
    { titulo: 'Desenvolvedor Frontend', local: 'Remoto', tipo: 'CLT', salario: 'R$ 8.000', desc: 'Experiência com Angular e CSS avançado.' },
    { titulo: 'Analista de RH', local: 'Porto Velho, RO', tipo: 'Híbrido', salario: 'R$ 4.500', desc: 'Gestão de talentos e processos de onboarding.' },
    { titulo: 'UX/UI Designer', local: 'São Paulo, SP', tipo: 'PJ', salario: 'R$ 10.000', desc: 'Criação de interfaces modernas e prototipagem.' },
    { titulo: 'Gerente de Projetos', local: 'Remoto', tipo: 'CLT', salario: 'R$ 12.000', desc: 'Liderança de times ágeis e controle de prazos.' }
  ];

  vagasFiltradas = [...this.vagas];

  setPage(page: string) {
    this.currentPage = page;
  }

  filtrar(busca: string) {
    this.vagasFiltradas = this.vagas.filter(v => 
      v.titulo.toLowerCase().includes(busca.toLowerCase())
    );
  }

  candidatar(vaga: string) {
    alert(`Sucesso! Sua candidatura para "${vaga}" foi enviada ao Departamento de RH.`);
  }
}