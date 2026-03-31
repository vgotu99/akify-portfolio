import { searchAction } from '@/src/features/search/model/actions';
import HeaderSearchBarInput from '@/src/features/search/ui/header-search-bar-input';
import IconSearch from '@/src/shared/ui/icons/icon-search';
import { css, cva, cx } from '@/styled-system/css';

export default function HeaderSearchBar({
  variant = 'desktop',
}: {
  variant?: 'desktop' | 'mobile';
}) {
  return (
    <form
      action={searchAction}
      className={cx(
        css({
          position: 'relative',
          flex: 1,
          paddingX: '12',
          paddingY: ['7', '5'],
          outlineStyle: ['none', 'solid'],
          outlineWidth: 'xlight',
          outlineColor: 'colors.border.alphaOnDarkXlight',
          borderRadius: 'lg',
          background: [
            'colors.surface.lightGray',
            'colors.surface.alphaWhiteXxlight',
          ],
          _focusWithin: {
            outline: 'none',
          },
          '&:has(input:invalid) button': {
            pointerEvents: 'none',
            opacity: 0.3,
            color: 'colors.icon.tertiaryOnDark',
          },
        }),
        styleVariant({ variant }),
      )}
    >
      <HeaderSearchBarInput />
      <button
        type="submit"
        className={css({
          position: 'absolute',
          right: '12px',
          top: 0,
          bottom: 0,
          marginY: 'auto',
          color: 'colors.icon.secondaryOnDark',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'none',
          border: 'none',
          padding: 0,
          outline: 'none',
        })}
      >
        <IconSearch
          size={20}
          className={css({
            color: ['colors.icon.lightest', 'colors.icon.secondaryOnDark'],
            width: ['20px', '16px'],
          })}
        />
      </button>
    </form>
  );
}

const styleVariant = cva({
  variants: {
    variant: {
      mobile: {
        display: ['flex', 'none'],
        visibility: ['visible', 'hidden'],
      },
      desktop: {
        display: ['none', 'flex'],
        visibility: ['hidden', 'visible'],
      },
    },
  },
});
