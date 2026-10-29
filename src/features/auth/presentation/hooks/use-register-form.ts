'use client';

import { useState } from 'react';
import { useForm } from '@/src/shared/hooks/use-form';
import { validateRegister } from '../../domain/validators/auth.validators';
import type { RegisterData } from '../../domain/entities/credentials';

const EMPTY_REGISTER: RegisterData = { name: '', email: '', password: '', confirmPassword: '' };

export function useRegisterForm() {
    const [isRegistered, setIsRegistered] = useState(false);
    const { values, errors, getFieldProps, handleSubmit } = useForm(EMPTY_REGISTER, validateRegister);

    const onSubmit = handleSubmit(() => setIsRegistered(true));

    return { name: values.name, errors, getFieldProps, onSubmit, isRegistered };
}