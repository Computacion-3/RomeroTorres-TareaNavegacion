interface ComingSoonProps {
    message: string;
}

export function ComingSoon({ message }: ComingSoonProps) {
    return (
        <div className="card border border-dashed border-base-300 bg-base-100">
            <div className="card-body items-center py-12 text-center">
                <span className="badge badge-outline badge-primary">Próximamente</span>
                <p className="max-w-md text-base-content/70">{message}</p>
            </div>
        </div>
    );
}