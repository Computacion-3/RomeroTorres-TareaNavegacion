import type { ReactNode } from 'react';
import { AppHeader } from '@/src/shared/components/layout/AppHeader';
import { AppNavbar } from '@/src/shared/components/layout/AppNavbar';

export default function AppLayout({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <div className="flex min-h-screen flex-col bg-base-200">
            <AppHeader />
            <AppNavbar />
            <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-6 md:px-6 lg:py-8">{children}</main>
        </div>
    );
}