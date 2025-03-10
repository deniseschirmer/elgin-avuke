import type { Metadata } from "next";
import localFont from "next/font/local"; 
import "./globals.css";
import "./fonts.css";



// Defina as fontes Visby CF
const visbyCF = localFont({
  src: [
    {
      path: "../../public/fonts/VisbyCFRegular.otf", 
      weight: "400",
      style: "normal",
    },
    
  ],
  variable: "--font-visby", 
});

export const metadata: Metadata = {
  title: "Elgin",
  description: "Programa de incentivos e benefícios exclusivos do Clube Elgin",
  icons: {
    icon: "/assets/images/favicon.ico", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`
         ${visbyCF.variable}
         antialiased font-VisbyCF`}>
        {children}
      </body>
    </html>
  );
}
