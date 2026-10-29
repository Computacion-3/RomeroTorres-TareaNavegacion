'use client';

import { useRoutines } from '../hooks/use-routines';
import { RoutineCard } from './RoutineCard';
import { RoutineForm } from './RoutineForm';

export function RoutinesView() {
    const { routines, isLoading, errorMessage, createRoutine } = useRoutines();

    return (
        <div className="flex flex-col gap-6">
            <RoutineForm onSubmit={createRoutine} isLoading={isLoading} />

            {errorMessage && (
                <div role="alert" className="alert alert-error text-sm">
                    <span>{errorMessage}</span>
                </div>
            )}

            <section className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold">Rutinas disponibles</h2>
                    <span className="badge badge-neutral">
                        {routines.length} {routines.length === 1 ? 'rutina' : 'rutinas'}
                    </span>
                </div>

                {isLoading && routines.length === 0 ? (
                    <div className="flex items-center justify-center gap-3 py-12 text-sm opacity-60">
                        <span className="loading loading-spinner loading-md"></span>
                        <span>Cargando rutinas...</span>
                    </div>
                ) : routines.length === 0 ? (
                    <div className="alert alert-info">
                        <span>No hay rutinas registradas aún.</span>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {routines.map((routine) => (
                            <RoutineCard key={routine.id} routine={routine} />
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
}