import type { LoginCredentials, RegisterData } from '../entities/credentials';

export type ValidationErrors<T> = Partial<Record<keyof T, string>>;

const MIN_PASSWORD_LENGTH = 6;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const isBlank = (value: string) => value.trim().length === 0;

export function validateLogin({ email, password }: LoginCredentials): ValidationErrors<LoginCredentials> {
    const errors: ValidationErrors<LoginCredentials> = {};

    if (isBlank(email)) errors.email = 'Ingresa tu correo.';
    if (isBlank(password)) errors.password = 'Ingresa tu contraseña.';

    return errors;
}

export function validateRegister(data: RegisterData): ValidationErrors<RegisterData> {
    const errors: ValidationErrors<RegisterData> = {};

    if (isBlank(data.name)) errors.name = 'Ingresa tu nombre.';

    if (isBlank(data.email)) {
        errors.email = 'Ingresa tu correo.';
    } else if (!EMAIL_PATTERN.test(data.email.trim())) {
        errors.email = 'El correo no tiene un formato válido.';
    }

    if (isBlank(data.password)) {
        errors.password = 'Ingresa una contraseña.';
    } else if (data.password.length < MIN_PASSWORD_LENGTH) {
        errors.password = `Usa al menos ${MIN_PASSWORD_LENGTH} caracteres.`;
    }

    if (isBlank(data.confirmPassword)) {
        errors.confirmPassword = 'Confirma tu contraseña.';
    } else if (data.password !== data.confirmPassword) {
        errors.confirmPassword = 'Las contraseñas no coinciden.';
    }

    return errors;
}