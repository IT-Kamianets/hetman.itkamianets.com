import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./pages/landing/landing.component').then((m) => m.LandingComponent),
    },
    {
        path: 'rooms',
        loadComponent: () => import('./pages/rooms/rooms.component').then((m) => m.RoomsComponent),
    },
    {
        path: 'gallery',
        loadComponent: () =>
            import('./pages/gallery/gallery.component').then((m) => m.GalleryComponent),
    },
    {
        path: 'socials',
        loadComponent: () =>
            import('./pages/socials/socials.component').then((m) => m.SocialsComponent),
    },
    {
        path: '**',
        redirectTo: '/',
    },
];