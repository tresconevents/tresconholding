export function Background() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-[#00A5A3]/10 to-transparent blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-[#00A5A3]/10 to-transparent blur-3xl" />
    </div>
  );
}