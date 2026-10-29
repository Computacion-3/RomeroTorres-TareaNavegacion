'use client';

import { useState, type ChangeEvent, type FormEvent } from 'react';

export type FormErrors<T> = Partial<Record<keyof T, string>>;

export function useForm<T extends { [K in keyof T]: string }>(
    initialValues: T,
    validate: (values: T) => FormErrors<T>,
) {
    const [values, setValues] = useState<T>(initialValues);
    const [touched, setTouched] = useState<Partial<Record<keyof T, boolean>>>({});
    const [submitted, setSubmitted] = useState(false);

    const allErrors = validate(values);
    const errors: FormErrors<T> = {};
    for (const field of Object.keys(allErrors) as (keyof T)[]) {
        if (submitted || touched[field]) {
            errors[field] = allErrors[field];
        }
    }

    const getFieldProps = (field: keyof T) => ({
        name: String(field),
        value: values[field],
        onChange: (event: ChangeEvent<HTMLInputElement>) => {
            const { value } = event.target;
            setValues((prev) => ({ ...prev, [field]: value }));
        },
        onBlur: () => setTouched((prev) => ({ ...prev, [field]: true })),
    });

    const handleSubmit = (onValid: (values: T) => void) => (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmitted(true);
        if (Object.keys(allErrors).length === 0) {
            onValid(values);
        }
    };

    return { values, errors, getFieldProps, handleSubmit };
}