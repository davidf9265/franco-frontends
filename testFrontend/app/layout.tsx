import './global.css';

export const metadata = {
  title: 'test frontend',
  description: 'test front',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
