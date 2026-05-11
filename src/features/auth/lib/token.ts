import { issueAnonToken } from '@/src/features/auth/model/apis';

const SERVER_WORKER_UUID = crypto.randomUUID();

const createTokenManager = () => {
  const state: {
    value: string | null;
    expiresAt: number;
    pendingPromise: Promise<string | null> | null;
  } = {
    value: null,
    expiresAt: 0,
    pendingPromise: null,
  };

  return async (forceRefresh = false): Promise<string | null> => {
    const now = Date.now();

    if (!forceRefresh && state.value && now < state.expiresAt) {
      return state.value;
    }

    if (state.pendingPromise) {
      return state.pendingPromise;
    }

    state.pendingPromise = (async () => {
      try {
        const token = await issueAnonToken(SERVER_WORKER_UUID);

        state.value = token;
        state.expiresAt = now + 4 * 60 * 1000;

        return state.value;
      } catch (error) {
        console.error('[getAnonToken] 토큰 발급 실패:', error);

        return null;
      } finally {
        state.pendingPromise = null;
      }
    })();

    return state.pendingPromise;
  };
};

export const getAnonToken = createTokenManager();
