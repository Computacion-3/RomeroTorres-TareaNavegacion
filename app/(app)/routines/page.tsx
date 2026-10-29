import type { Metadata } from 'next';
import { PageHeader } from '@/src/shared/components/ui/PageHeader';
import { RoutinesView } from '@/src/features/routines/presentation/components/RoutinesView';

export const metadata: Metadata = { title: 'Rutinas' };

export default function RoutinesPage() {
    return (
        <>
            <PageHeader title="Mis rutinas" description="Crea y administra tus rutinas de entrenamiento." />
            <RoutinesView />
        </>
    );
}