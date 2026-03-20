export const metadata = {
  title: "DJLOTECH SOCIETY",
  description: "Solutions digitales innovantes au Bénin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
