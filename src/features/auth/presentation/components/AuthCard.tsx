import type { ReactNode } from 'react';

interface AuthCardProps {
    title: string;
    subtitle?: string;
    footer?: ReactNode;
    children: ReactNode;
}

export function AuthCard({ title, subtitle, footer, children }: AuthCardProps) {
    return (
        <section className="card w-full max-w-md bg-base-100 shadow-xl">
            <div className="card-body gap-6 p-6 sm:p-8">
                <header className="flex flex-col items-center gap-1 text-center">
                    <h1 className="text-2xl font-bold md:text-3xl">{title}</h1>
                    {subtitle && <p className="text-base-content/70">{subtitle}</p>}
                </header>

                {children}

                {footer && <p className="text-center text-sm">{footer}</p>}
            </div>
        </section>
    );
}