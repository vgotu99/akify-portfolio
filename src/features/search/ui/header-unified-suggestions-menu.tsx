'use client';

import { startTransition, useActionState, useEffect } from 'react';
import { fetchUnifiedSuggestionsAction } from '@/src/features/search/model/actions';
import { useSearchState } from '@/src/features/search/model/context';
import HeaderUnifiedSuggestionsMenuItem from '@/src/features/search/ui/header-unified-suggestions-menu-item';
import { css, cva, cx } from '@/styled-system/css';

interface HeaderUnifiedSuggestionsMenuProps {
  variant: 'mobile' | 'desktop';
}

export default function HeaderUnifiedSuggestionsMenu({
  variant,
}: HeaderUnifiedSuggestionsMenuProps) {
  const isVariantDesktop = variant === 'desktop';
  const { query, isFocused } = useSearchState();
  const [suggestions, dispatch] = useActionState(
    fetchUnifiedSuggestionsAction,
    null,
  );
  const showUnifiedSuggestions =
    !suggestions?.brandSuggestions?.length &&
    !suggestions?.modelSuggestions?.length;

  useEffect(() => {
    startTransition(() => dispatch(query));
  }, [query, dispatch]);

  if (showUnifiedSuggestions) return null;

  if (isVariantDesktop && !isFocused) return null;

  return (
    <div
      style={{ backdropFilter: isVariantDesktop ? 'blur(12px)' : 'none' }}
      className={cx(
        css({
          position: [, 'relative'],
          top: [, '-5px'],
          left: [, '3px'],
          width: ['full', '420px'],
          paddingY: [, '8'],
          paddingX: [, '12'],
          borderWidth: ['none', 'xlight'],
          borderColor: [, 'colors.border.alphaOnDarkLight'],
          borderRadius: [, 'lg'],
          background: ['none', 'colors.surface.alphaBlackStrong'],
          boxShadow: [, '0 0 12px 0 rgba(255, 255, 255, 0.1)'],
          pointerEvents: 'auto',
          transition: [
            'none',
            'width 0.3s ease-in-out, border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
          ],
          '.header-scroll-group[data-scrolled="true"] &': {
            width: '260px',
          },
        }),
        styleVariant({ variant }),
      )}
    >
      <div
        className={css({
          display: ['block', 'none'],
          visibility: ['visible', 'hidden'],
          paddingY: '15px',
          gap: '8',
          alignItems: 'center',
          width: 'full',
          textStyle: 'mobile.label.small',
          color: 'colors.text.tertiary',
        })}
      >
        추천 검색어
      </div>
      {suggestions.brandSuggestions.map((brand) => (
        <HeaderUnifiedSuggestionsMenuItem
          key={brand.id}
          value={brand}
          variant={variant}
        />
      ))}
      {suggestions.modelSuggestions.map((model) => (
        <HeaderUnifiedSuggestionsMenuItem
          key={model.id}
          value={model}
          variant={variant}
        />
      ))}
    </div>
  );
}

const styleVariant = cva({
  variants: {
    variant: {
      mobile: {
        display: ['block', 'none'],
        visibility: ['visible', 'hidden'],
      },
      desktop: {
        display: ['none', 'block'],
        visibility: ['hidden', 'visible'],
      },
    },
  },
});
