import Link from 'next/link';
import { APP_NAME, ROUTES } from '@/src/shared/config/routes';

export default function HomePage() {
    return (
        <main className="hero min-h-screen bg-base-200 px-4">
            <div className="hero-content flex-col text-center">
                <h1 className="text-4xl font-bold md:text-5xl">{APP_NAME}</h1>
                <p className="max-w-md text-base-content/70">
                    Organiza tus rutinas, ejercicios y progreso en un solo lugar.
                </p>
                <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                    <Link href={ROUTES.login} className="btn btn-primary">
                        Iniciar sesión
                    </Link>
                    <Link href={ROUTES.register} className="btn btn-outline">
                        Crear cuenta
                    </Link>
                </div>
            </div>
        </main>
    );
}