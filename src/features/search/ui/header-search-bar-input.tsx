'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense, useRef } from 'react';
import { useSearchActions } from '@/src/features/search/model/context';
import { css } from '@/styled-system/css';

function HeaderSearchInputInner() {
  const searchParams = useSearchParams();
  const defaultValue = searchParams.get('q') || '';
  const { setQuery, setIsFocused } = useSearchActions();
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      setQuery(value.replace(/\s+/g, ' ').trim());
    }, 300);
  };

  return (
    <input
      name="q"
      key={defaultValue}
      defaultValue={defaultValue}
      required
      pattern=".*\S.*"
      placeholder="어떤 악기를 찾고 있나요?"
      autoComplete="off"
      onChange={handleChange}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      className={css({
        width: 'full',
        background: 'transparent',
        color: ['colors.text.primary', 'colors.text.primaryOnDark'],
        outline: 'none',
        _placeholder: {
          textStyle: '',
          color: ['colors.text.lightest', 'colors.text.tertiaryOnDark'],
        },
      })}
    />
  );
}

export default function HeaderSearchBarInput() {
  return (
    <Suspense
      fallback={<div className={css({ width: 'full', height: '24px' })} />}
    >
      <HeaderSearchInputInner />
    </Suspense>
  );
}
