export function Section() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0 z-10 flex items-center justify-center" />
      <div className="relative w-full h-0 pb-[56.25%] container">
        <iframe
          src="https://streamable.com/e/tdcc0h?autoplay=1&muted=1&nocontrols=1"
          allow="fullscreen; autoplay"
          width="100%"
          height="100%"
          allowFullScreen
          className="border-none size-full absolute left-0 top-0 overflow-hidden"
        />
        <div className="absolute top-0 left-0 size-full bg-black opacity-80" />
      </div>
    </section>
  );
}
