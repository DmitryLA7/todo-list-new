import localFont from "next/font/local";

const Muller = localFont({
  src: "../assets/fonts/Muller.ttf",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={Muller.className}>{children}</body>
    </html>
  );
}
