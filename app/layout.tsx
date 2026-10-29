import type { Metadata } from "next";
import "./globals.css";
import { StoreProvider } from "@/src/store/StoreProvider";
import { APP_NAME } from "@/src/shared/config/routes";

export const metadata: Metadata = {
    title: {
        default: APP_NAME,
        template: `%s · ${APP_NAME}`,
    },
    description: "Organiza tus rutinas de entrenamiento",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html lang="es" className="h-full antialiased">
            <body className="min-h-full flex flex-col">
                <StoreProvider>{children}</StoreProvider>
            </body>
        </html>
    );
}