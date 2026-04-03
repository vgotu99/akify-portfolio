const TIME_UNITS = [
  { unit: '달', seconds: 60 * 60 * 24 * 30 },
  { unit: '일', seconds: 60 * 60 * 24 },
  { unit: '시간', seconds: 60 * 60 },
  { unit: '분', seconds: 60 },
  { unit: '초', seconds: 1 },
] as const;

const MINIMUM_BUMP_GAP_MS = 5 * 60 * 1000;

export const calculateRelativeTime = (createdAt: string): string => {
  const now = new Date();
  const date = new Date(createdAt);
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  const foundUnit = TIME_UNITS.find((u) => diffInSeconds >= u.seconds);

  if (!foundUnit) return '방금';

  return `${Math.floor(diffInSeconds / foundUnit.seconds)}${foundUnit.unit} 전`;
};

export const formatNumberWithComma = (price: string | number): string => {
  const num = typeof price === 'number' ? price : Number(price);

  if (isNaN(num)) return '0';

  return num.toLocaleString();
};

export const isMerchandiseBumped = (createdAt: string, bumpedAt: string) => {
  const diff = Date.parse(bumpedAt) - Date.parse(createdAt);

  return diff > MINIMUM_BUMP_GAP_MS;
};
