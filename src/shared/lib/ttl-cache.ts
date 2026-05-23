export interface TTLCache<T> {
  get: (key: string) => T | undefined;
  set: (key: string, value: T) => void;
}

const TTL = 1000 * 60 * 5;

export const createTTLCache = <T>(): TTLCache<T> => {
  const cache = new Map<string, { value: T; updatedAt: number }>();

  const isExpired = (updatedAt: number): boolean =>
    Date.now() - updatedAt > TTL;

  const get = (key: string): T | undefined => {
    const entry = cache.get(key);
    const expired = entry && isExpired(entry.updatedAt);

    expired && cache.delete(key);

    return entry && !expired ? entry.value : undefined;
  };

  const set = (key: string, value: T): void => {
    cache.set(key, { value, updatedAt: Date.now() });
  };

  return { get, set };
};
