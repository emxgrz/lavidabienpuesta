export function PinterestSaveButton({ href }: { href: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex rounded-full border border-black/10 px-4 py-2 text-sm hover:bg-black/5">
      Guardar en Pinterest
    </a>
  );
}