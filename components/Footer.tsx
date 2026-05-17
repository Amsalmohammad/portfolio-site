export default function Footer() {
  return (
    <footer className="bg-ink border-t border-border py-12 px-6 md:px-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <p className="font-sans font-semibold text-lg text-paper">Amsal Nizamuddin</p>
          <p className="font-mono text-xs text-muted mt-1">
            {"// industrial engineer · penn state '26"}
          </p>
        </div>

        <div className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} — designed &amp; built from scratch
        </div>
      </div>
    </footer>
  );
}
