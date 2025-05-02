import PackageJSON from "../../../../package.json";

export default function LayoutHeader() {
  return (
    <header className="w-full py-4 px-6 select-none flex">
      <div className="leading-tight hover:text-brand-primary transition-colors">
        <div className="font-100">SummersDay</div>
        <div>
          <span>Brisk Tab</span>
          <span className="ml-2 text-3 opacity-50">v{PackageJSON.version}</span>
        </div>
      </div>
    </header>
  );
}
