import type { InputHTMLAttributes } from 'react';

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    id: string;
    label: string;
    error?: string;
}

export function FormField({ id, label, error, className = '', ...inputProps }: FormFieldProps) {
    const errorId = `${id}-error`;

    return (
        <fieldset className="fieldset">
            <label htmlFor={id} className="fieldset-legend text-sm">
                {label}
            </label>
            <input
                id={id}
                className={`input w-full ${error ? 'input-error' : ''} ${className}`}
                aria-invalid={Boolean(error)}
                aria-describedby={error ? errorId : undefined}
                {...inputProps}
            />
            {error && (
                <p id={errorId} className="text-sm text-error">
                    {error}
                </p>
            )}
        </fieldset>
    );
}