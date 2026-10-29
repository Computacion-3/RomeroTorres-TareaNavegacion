'use client';

import Link from 'next/link';
import { FormField } from '@/src/shared/components/ui/FormField';
import { APP_NAME, ROUTES } from '@/src/shared/config/routes';
import { AuthCard } from './AuthCard';
import { useLoginForm } from '../hooks/use-login-form';

export function LoginForm() {
    const { errors, getFieldProps, onSubmit } = useLoginForm();

    return (
        <AuthCard
            title={APP_NAME}
            subtitle="Inicia sesión para ver tus rutinas"
            footer={
                <>
                    ¿No tienes cuenta?{' '}
                    <Link href={ROUTES.register} className="link link-primary">
                        Regístrate
                    </Link>
                </>
            }
        >
            <form onSubmit={onSubmit} noValidate className="flex flex-col gap-2">
                <FormField
                    id="email"
                    type="email"
                    label="Correo"
                    placeholder="tu@correo.com"
                    autoComplete="email"
                    error={errors.email}
                    {...getFieldProps('email')}
                />
                <FormField
                    id="password"
                    type="password"
                    label="Contraseña"
                    placeholder="********"
                    autoComplete="current-password"
                    error={errors.password}
                    {...getFieldProps('password')}
                />
                <button type="submit" className="btn btn-primary mt-4 w-full">
                    Iniciar sesión
                </button>
            </form>
        </AuthCard>
    );
}