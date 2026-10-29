import type { Metadata } from 'next';
import { PageHeader } from '@/src/shared/components/ui/PageHeader';
import { ComingSoon } from '@/src/shared/components/ui/ComingSoon';

export const metadata: Metadata = { title: 'Progreso' };

export default function ProgressPage() {
    return (
        <>
            <PageHeader title="Progreso" description="Seguimiento de tus entrenamientos." />
            <ComingSoon message="Aquí verás tu historial y la evolución de tus marcas." />
        </>
    );
}