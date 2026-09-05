import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        loadComponent: () =>
            import('./features/inicio/inicio')
        .then((m) => m.Inicio),
    },
    {
        path:'inicio',
        loadComponent: () =>
            import('./features/inicio/inicio')
        .then((m) => m.Inicio),
    },
    {
        path:'sobre-mim',
        loadComponent: () =>
            import('./features/sobre-mim/sobre-mim')
        .then((m) => m.SobreMim),
    },
    {
        path:'objetivo-profissional',
        loadComponent: () =>
            import('./features/objetivo-profissional/objetivo-profissional')
        .then((m) => m.ObjetivoProfissional),
    },
    {
        path: 'formacao-academica',
        loadComponent: () =>
            import('./features/formacao-academica/formacao-academica')
        .then((m) => m.FormacaoAcademica),
    },
    {
        path:'**',
        redirectTo: 'inicio',
    },
];