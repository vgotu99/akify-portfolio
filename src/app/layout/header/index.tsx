import Link from 'next/link';
import HeaderButton from '@/src/app/layout/header/header-button';
import HeaderInteractionController from '@/src/app/layout/header/header-interaction-controller';
import { SearchProvider } from '@/src/features/search/model/context';
import HeaderSearchBar from '@/src/features/search/ui/header-search-bar';
import HeaderUnifiedSuggestionsMenu from '@/src/features/search/ui/header-unified-suggestions-menu';
import MobileSearchButton from '@/src/features/search/ui/mobile-search-button';
import MobileSearchOverlay from '@/src/features/search/ui/mobile-search-overlay';
import IconMenu2 from '@/src/shared/ui/icons/icon-menu2';
import Logo from '@/src/shared/ui/logo';
import { css } from '@/styled-system/css';
import { flex } from '@/styled-system/patterns';

export default function Header() {
  return (
    <SearchProvider>
      <HeaderInteractionController>
        <div
          className={flex({
            flexDirection: 'column',
            alignItems: 'center',
            width: 'full',
            position: [, 'fixed'],
            top: '24px',
            zIndex: 10,
            pointerEvents: 'none',
          })}
        >
          <header
            style={{ backdropFilter: 'blur(6px)' }}
            className={flex({
              justifyContent: 'space-between',
              alignItems: 'center',
              width: ['full', '640px'],
              paddingLeft: ['16', '20'],
              paddingRight: ['16', '8'],
              paddingY: ['10', '8'],
              gap: [, '16'],
              outlineStyle: ['none', 'solid'],
              outlineWidth: 'xlight',
              outlineColor: 'colors.border.alphaOnDarkLight',
              borderRadius: ['none', 'full'],
              background: ['colors.header.default', 'colors.header.stylish'],
              marginX: ['none', 'auto'],
              pointerEvents: 'auto',
              transition: [
                'none',
                'width 0.3s ease-in-out, border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
              ],
              '.header-interaction-group[data-interacted="true"] &': {
                width: ['full', '480px'],
              },
            })}
          >
            <Link href="/">
              <Logo
                className={css({
                  color: 'colors.icon.primaryOnDark',
                  width: ['113px', '76px'],
                })}
              />
            </Link>
            <div
              className={flex({
                flex: [, 1],
                alignItems: 'center',
                gap: ['16', '12'],
              })}
            >
              <HeaderSearchBar variant="desktop" />
              <MobileSearchButton />
              <IconMenu2
                size={20}
                className={css({ color: 'colors.icon.tertiaryOnDark' })}
              />
              <HeaderButton />
            </div>
          </header>
          <HeaderUnifiedSuggestionsMenu variant="desktop" />
        </div>
      </HeaderInteractionController>
      <MobileSearchOverlay />
    </SearchProvider>
  );
}
