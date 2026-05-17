export default function Footer() {
  return (
    <footer className="bg-ink text-paper py-12 px-6 md:px-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <p className="font-serif text-2xl italic">Amsal Nizamuddin</p>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-paper/50 mt-1">
            Industrial Engineer · Penn State '26
          </p>
        </div>

        <div className="font-mono text-xs uppercase tracking-wider text-paper/50">
          © {new Date().getFullYear()} — Designed & built from scratch
        </div>
      </div>
    </footer>
  );
}
