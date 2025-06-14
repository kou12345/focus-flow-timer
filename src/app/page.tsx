export default function Home() {
  const spotifyApiClientId = process.env.SPOTIFY_API_CLIENT_ID;
  const spotifyApiClientSecret = process.env.SPOTIFY_API_CLIENT_SECRET;

  return (
    <div>
      <h1>Spotify API</h1>
      <p>Client ID: {spotifyApiClientId}</p>
      <p>Client Secret: {spotifyApiClientSecret}</p>
    </div>
  );
}
