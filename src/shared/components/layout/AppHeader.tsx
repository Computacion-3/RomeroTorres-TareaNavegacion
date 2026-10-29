import Link from 'next/link';
import { APP_NAME, ROUTES } from '@/src/shared/config/routes';
import { UserMenu } from './UserMenu';

export function AppHeader() {
    return (
        <header className="border-b border-base-300 bg-base-100">
            <div className="navbar mx-auto max-w-6xl px-4 md:px-6">
                <div className="navbar-start">
                    <Link href={ROUTES.routines} className="text-xl font-bold md:text-2xl">
                        {APP_NAME}
                    </Link>
                </div>
                <div className="navbar-end">
                    <UserMenu />
                </div>
            </div>
        </header>
    );
}