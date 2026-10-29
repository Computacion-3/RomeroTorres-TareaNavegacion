'use client';

import { useRouter } from 'next/navigation';
import { useForm } from '@/src/shared/hooks/use-form';
import { ROUTES } from '@/src/shared/config/routes';
import { validateLogin } from '../../domain/validators/auth.validators';
import type { LoginCredentials } from '../../domain/entities/credentials';

const EMPTY_LOGIN: LoginCredentials = { email: '', password: '' };

export function useLoginForm() {
    const router = useRouter();
    const { errors, getFieldProps, handleSubmit } = useForm(EMPTY_LOGIN, validateLogin);

    const onSubmit = handleSubmit(() => {
        router.replace(ROUTES.routines);
    });

    return { errors, getFieldProps, onSubmit };
}