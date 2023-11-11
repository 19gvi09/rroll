export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <video src={"/video.mp4"} width="100%" controls autoPlay={true} />
    </main>
  )
}
