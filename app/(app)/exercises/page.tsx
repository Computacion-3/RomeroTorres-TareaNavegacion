import type { Metadata } from 'next';
import { PageHeader } from '@/src/shared/components/ui/PageHeader';
import { ComingSoon } from '@/src/shared/components/ui/ComingSoon';

export const metadata: Metadata = { title: 'Ejercicios' };

export default function ExercisesPage() {
    return (
        <>
            <PageHeader title="Ejercicios" description="Catálogo de ejercicios para armar tus rutinas." />
            <ComingSoon message="Aquí verás los ejercicios disponibles, agrupados por músculo." />
        </>
    );
}