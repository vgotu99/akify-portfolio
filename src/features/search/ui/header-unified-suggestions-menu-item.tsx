'use client';

import { useRouter } from 'next/navigation';
import {
  useSearchActions,
  useSearchState,
} from '@/src/features/search/model/context';
import type {
  BrandSuggestion,
  ModelSuggestion,
} from '@/src/features/search/model/types';
import IconSearch from '@/src/shared/ui/icons/icon-search';
import { css } from '@/styled-system/css';
import { flex } from '@/styled-system/patterns';

interface HeaderUnifiedSuggestionsMenuItemProps {
  value: BrandSuggestion | ModelSuggestion;
  variant: 'mobile' | 'desktop';
}

export default function HeaderUnifiedSuggestionsMenuItem({
  value,
  variant,
}: HeaderUnifiedSuggestionsMenuItemProps) {
  const router = useRouter();
  const { query } = useSearchState();
  const { setIsMobileSearchOpen } = useSearchActions();
  const formattedValue = foramtValue(value);
  const highlightedText = highlightText(formattedValue, query);
  const typeLabel = TYPE_MAP[value.type];

  const handleNavigation = () => {
    if (variant === 'mobile') {
      setIsMobileSearchOpen(false);
    }

    router.push(`/search?q=${encodeURIComponent(formattedValue)}`);
  };

  return (
    <a
      onMouseDown={() => {
        handleNavigation();
      }}
      className={flex({
        paddingY: ['15px', '4'],
        gap: ['8', '12'],
        alignItems: 'center',
        width: 'full',
        cursor: 'pointer',
      })}
    >
      <IconSearch
        size={20}
        className={css({
          display: ['block', 'none'],
          visibility: ['visible', 'hidden'],
          marginRight: '4',
          color: 'colors.icon.secondary',
        })}
      />
      <div
        className={css({
          flex: 1,
          textStyle: ['mobile.body.largeStrong', 'desktop.body.medium'],
          color: ['colors.text.tertiary', 'colors.text.primaryOnDark'],
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        })}
      >
        {highlightedText}
      </div>
      <div
        className={css({
          textStyle: 'mobile.caption.large',
          color: ['colors.text.tertiary', 'colors.text.tertiaryOnDark'],
        })}
      >
        {typeLabel}
      </div>
    </a>
  );
}

const foramtValue = (value: BrandSuggestion | ModelSuggestion) => {
  if (value.type === 'brand') return value.text;

  return `${value.brandName} ${value.text}`;
};

const highlightText = (text: string, highlight: string) => {
  const trimedHighlight = highlight.trim();

  if (!trimedHighlight) return text;

  const escaped = trimedHighlight.replace(/[.*+?^${}()|[\\]/g, '\\$&');
  const regex = new RegExp(`(${escaped})`, 'gi');
  const parts = text.split(regex);

  return parts.map((part, index) =>
    index % 2 === 1 ? (
      <span key={part} className={css({ color: 'colors.text.highlight' })}>
        {part}
      </span>
    ) : (
      part
    ),
  );
};

const TYPE_MAP = {
  brand: '브랜드',
  model: '모델',
};
