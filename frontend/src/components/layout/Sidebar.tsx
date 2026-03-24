"use client";

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  // TODO: implement sidebar with navigation for authenticated app
  return (
    <aside className={className}>
      <nav className="flex flex-col gap-2 p-4">
        <span className="text-sm font-medium text-muted-foreground">Navigation</span>
        {/* TODO: sidebar nav items */}
      </nav>
    </aside>
  );
}
