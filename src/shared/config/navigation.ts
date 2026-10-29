import { ROUTES } from './routes';

export interface NavItem {
    readonly label: string;
    readonly href: string;
}

export const NAV_ITEMS: readonly NavItem[] = [
    { label: 'Rutinas', href: ROUTES.routines },
    { label: 'Ejercicios', href: ROUTES.exercises },
    { label: 'Progreso', href: ROUTES.progress },
];

export const DEMO_USER = {
    name: 'Ana Pérez',
    email: 'ana@correo.com',
} as const;