import Link from 'next/link';
import type { NavItem } from '@/src/shared/config/navigation';

export const isActivePath = (pathname: string, href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

interface NavLinksProps {
    items: readonly NavItem[];
    pathname: string;
    className?: string;
    onNavigate?: () => void;
}


export function NavLinks({ items, pathname, className = '', onNavigate }: NavLinksProps) {
    return (
        <ul className={className}>
            {items.map(({ label, href }) => {
                const isActive = isActivePath(pathname, href);

                return (
                    <li key={href}>
                        <Link
                            href={href}
                            onClick={onNavigate}
                            aria-current={isActive ? 'page' : undefined}
                            className={isActive ? 'menu-active' : undefined}
                        >
                            {label}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}