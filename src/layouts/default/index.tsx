import LayoutHeader from "./components/layout-header";

export default function DefaultLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="flex flex-col h-screen">
      <LayoutHeader />
      <main className="flex-1 overflow-hidden">{children}</main>
    </section>
  );
}
