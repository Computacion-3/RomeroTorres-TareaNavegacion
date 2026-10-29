'use client';

import { usePathname } from 'next/navigation';
import { NAV_ITEMS } from '@/src/shared/config/navigation';
import { NavLinks, isActivePath } from './NavLinks';

export function AppNavbar() {
    const pathname = usePathname();
    const current = NAV_ITEMS.find((item) => isActivePath(pathname, item.href));

    const closeMobileMenu = () => {
        if (document.activeElement instanceof HTMLElement) {
            document.activeElement.blur();
        }
    };

    return (
        <nav aria-label="Secciones" className="border-b border-base-300 bg-base-100">
            <div className="mx-auto flex max-w-6xl items-center px-2 py-1 md:px-4">
                {/* Móvil */}
                <div className="dropdown md:hidden">
                    <div tabIndex={0} role="button" aria-label="Abrir menú de secciones" className="btn btn-ghost gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            aria-hidden="true"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        {current?.label ?? 'Menú'}
                    </div>
                    <NavLinks
                        items={NAV_ITEMS}
                        pathname={pathname}
                        onNavigate={closeMobileMenu}
                        className="menu dropdown-content z-20 mt-2 w-56 gap-1 rounded-box bg-base-100 p-2 shadow-lg"
                    />
                </div>

                {/* Escritorio */}
                <NavLinks
                    items={NAV_ITEMS}
                    pathname={pathname}
                    className="menu menu-horizontal hidden gap-2 text-base md:flex"
                />
            </div>
        </nav>
    );
}