import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { AuthProvider } from "@/contexts/AuthContext";

export const metadata: Metadata = {
  title: "EduFlow - School Management",
  description: "Modern multilingual school management system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <AuthProvider>
          <LanguageProvider>
            <div className="gradient-bg min-h-screen w-full">
              {children}
            </div>
            <Toaster richColors position="top-right" />
          </LanguageProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
