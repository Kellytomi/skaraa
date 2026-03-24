interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  // TODO: implement footer with links, social, copyright
  return (
    <footer className={className}>
      <div className="flex items-center justify-center p-4 text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Skaraa. All rights reserved.
      </div>
    </footer>
  );
}
