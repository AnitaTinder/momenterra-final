import "../globals.css";

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={params.locale}>
      <body className="bg-pearlGray text-jetBlack">
        {children}
      </body>
    </html>
  );
}
