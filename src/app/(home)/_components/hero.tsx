export function Hero() {
  return (
    <main className="sticky top-0 min-h-screen">
      <video
        className="absolute w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      <div className="grid place-items-center relative z-10 min-h-screen">
        <h1 className="heading-3 text-white">Future, Present</h1>
      </div>
    </main>
  );
}
