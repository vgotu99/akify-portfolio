export default function ImageServerPreconnector() {
  if (!IMAGE_SERVERS) return null;

  return <link rel="preconnect" href={IMAGE_SERVERS} />;
}

const IMAGE_SERVERS = process.env.NEXT_PUBLIC_IMAGE_PROXY_URL;
