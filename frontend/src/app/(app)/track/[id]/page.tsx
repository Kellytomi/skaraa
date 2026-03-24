interface TrackPageProps {
  params: { id: string };
}

export default function TrackPage({ params }: TrackPageProps) {
  return (
    <main className="flex min-h-screen flex-col p-8">
      <h1 className="text-3xl font-bold">Track Results</h1>
      <p className="mt-2 text-muted-foreground">Track ID: {params.id}</p>
      {/* TODO: implement waveform viewer, stem controls, download buttons */}
    </main>
  );
}
