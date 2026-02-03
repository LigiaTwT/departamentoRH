import { Routes } from '@angular/router';
import { Home} from './paginas/home/home';
import { Vagas } from './paginas/vagas/vagas';

export const routes: Routes = [
  { 
    path: '', 
    component: Home,
    title: 'Home - Sistema RH' 
  },
  { 
    path: 'vagas', 
    component: Vagas,
    title: 'Vagas Disponíveis' 
  },
  // Rota de fallback (redireciona se a URL não existir)
  { path: '**', redirectTo: '' }
];