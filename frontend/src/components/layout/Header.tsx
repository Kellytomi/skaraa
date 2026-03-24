"use client";

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  // TODO: implement header with logo, nav links, auth buttons
  return (
    <header className={className}>
      <nav className="flex items-center justify-between p-4">
        <span className="text-xl font-bold">Skaraa</span>
        {/* TODO: nav links and auth buttons */}
      </nav>
    </header>
  );
}
