export function Background() {
  return (
    <div className="absolute inset-0 -z-10">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-[#00A5A3]/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-[#00A5A3]/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
    </div>
  );
}