export const DEVICE_SIZES = [
  360, 375, 390, 432, 524, 640, 720, 750, 782, 860, 982,
] as const;

export const IMAGE_SIZES = [
  48, 64, 96, 128, 144, 192, 216, 256, 320, 384,
] as const;

export const IMAGE_QUALITIES = [40, 50, 75] as const;

export const ALL_IMAGE_SIZES = Array.from(
  new Set([...IMAGE_SIZES, ...DEVICE_SIZES]),
).sort((a, b) => a - b);
