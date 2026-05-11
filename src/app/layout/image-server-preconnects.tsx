export default function ImageServerPreconnects() {
  return IMAGE_SERVERS.map((server) => (
    <link key={server} rel="preconnect" href={`https://${server}`} />
  ));
}

const IMAGE_SERVERS = [
  process.env.IMAGE_STORAGE_URL,
  process.env.ASSETS_IMAGE_STORAGE_URL,
  process.env.DEV_IMAGE_STORAGE_URL,
].filter(Boolean);
