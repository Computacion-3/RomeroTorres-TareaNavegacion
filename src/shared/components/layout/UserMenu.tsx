import Link from 'next/link';
import { ROUTES } from '@/src/shared/config/routes';
import { DEMO_USER } from '@/src/shared/config/navigation';

const getInitials = (fullName: string) =>
    fullName
        .split(' ')
        .filter(Boolean)
        .slice(0, 2)
        .map((word) => word[0].toUpperCase())
        .join('');

export function UserMenu() {
    return (
        <div className="dropdown dropdown-end">
            <div
                tabIndex={0}
                role="button"
                aria-label="Abrir menú de usuario"
                className="btn btn-circle btn-ghost avatar avatar-placeholder"
            >
                <div className="w-10 rounded-full bg-primary text-primary-content">
                    <span className="font-semibold">{getInitials(DEMO_USER.name)}</span>
                </div>
            </div>

            <ul tabIndex={-1} className="menu dropdown-content z-20 mt-3 w-60 rounded-box bg-base-100 p-2 shadow-lg">
                <li className="menu-title">
                    <span className="text-base-content">{DEMO_USER.name}</span>
                    <span className="font-normal">{DEMO_USER.email}</span>
                </li>
                <li>
                    <Link href={ROUTES.login}>Cerrar sesión</Link>
                </li>
            </ul>
        </div>
    );
}