'use client';

import Link from 'next/link';
import { FormField } from '@/src/shared/components/ui/FormField';
import { ROUTES } from '@/src/shared/config/routes';
import { AuthCard } from './AuthCard';
import { useRegisterForm } from '../hooks/use-register-form';

export function RegisterForm() {
    const { name, errors, getFieldProps, onSubmit, isRegistered } = useRegisterForm();

    return (
        <AuthCard
            title="Crea tu cuenta"
            footer={
                <>
                    ¿Ya tienes cuenta?{' '}
                    <Link href={ROUTES.login} className="link link-primary">
                        Inicia sesión
                    </Link>
                </>
            }
        >
            {isRegistered && (
                <div role="status" className="alert alert-success alert-soft">
                    <span>¡Listo, {name.trim()}! Tu cuenta fue creada. Ya puedes iniciar sesión.</span>
                </div>
            )}

            <form onSubmit={onSubmit} noValidate className="flex flex-col gap-2">
                <FormField
                    id="name"
                    label="Nombre"
                    placeholder="Ana Pérez"
                    autoComplete="name"
                    error={errors.name}
                    {...getFieldProps('name')}
                />
                <FormField
                    id="email"
                    type="email"
                    label="Correo"
                    placeholder="ana@correo.com"
                    autoComplete="email"
                    error={errors.email}
                    {...getFieldProps('email')}
                />
                <FormField
                    id="password"
                    type="password"
                    label="Contraseña"
                    placeholder="********"
                    autoComplete="new-password"
                    error={errors.password}
                    {...getFieldProps('password')}
                />
                <FormField
                    id="confirmPassword"
                    type="password"
                    label="Confirmar contraseña"
                    placeholder="********"
                    autoComplete="new-password"
                    error={errors.confirmPassword}
                    {...getFieldProps('confirmPassword')}
                />
                <button type="submit" className="btn btn-primary mt-4 w-full">
                    Crear cuenta
                </button>
            </form>
        </AuthCard>
    );
}