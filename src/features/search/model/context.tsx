'use client';

import { createContext, useContext, useMemo, useState } from 'react';
import type { WithChildren } from '@/src/shared/lib/types';

interface SearchState {
  query: string;
  isFocused: boolean;
  isMobileSearchOpen: boolean;
}

interface SearchActions {
  setQuery: (query: string) => void;
  setIsFocused: (isFocused: boolean) => void;
  setIsMobileSearchOpen: (isOpen: boolean) => void;
}

const SearchStateContext = createContext<SearchState | null>(null);
const SearchActionsContext = createContext<SearchActions | null>(null);

export const useSearchState = () => {
  const context = useContext(SearchStateContext);

  if (!context) throw new Error('SearchProvider 내부에서만 사용 가능');

  return context;
};

export const useSearchActions = () => {
  const context = useContext(SearchActionsContext);

  if (!context) throw new Error('SearchProvider 내부에서만 사용 가능');

  return context;
};

export const SearchProvider = ({ children }: WithChildren) => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  const actions = useMemo(
    () => ({
      setQuery,
      setIsFocused,
      setIsMobileSearchOpen,
    }),
    [],
  );

  return (
    <SearchActionsContext.Provider value={actions}>
      <SearchStateContext.Provider
        value={{ query, isFocused, isMobileSearchOpen }}
      >
        {children}
      </SearchStateContext.Provider>
    </SearchActionsContext.Provider>
  );
};
