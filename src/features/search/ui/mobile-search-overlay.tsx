import HeaderSearchBar from '@/src/features/search/ui/header-search-bar';
import MobileSearchOverlayCloseButton from '@/src/features/search/ui/mobile-search-overlay-close-button';
import MobileSearchOverlayController from '@/src/features/search/ui/mobile-search-overlay-controller';
import { css } from '@/styled-system/css';
import { flex } from '@/styled-system/patterns';
import HeaderUnifiedSuggestionsMenu from './header-unified-suggestions-menu';

export default function MobileSearchOverlay() {
  return (
    <MobileSearchOverlayController>
      <div
        style={{ backdropFilter: 'blur(25px)' }}
        className={css({
          display: ['block', 'none'],
          visibility: ['visible', 'hidden'],
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100dvw',
          height: '100dvh',
          zIndex: 100,
          background: 'colors.surface.alphaWhiteStrong',
          paddingTop: '8',
        })}
      >
        <div
          className={flex({
            flexDirection: 'column',
            alignItems: 'center',
            width: 'full',
            paddingX: '16',
          })}
        >
          <div
            className={flex({
              width: 'full',
              alignItems: 'center',
              gap: '8',
              paddingY: '8',
            })}
          >
            <HeaderSearchBar variant="mobile" />
            <MobileSearchOverlayCloseButton />
          </div>
          <HeaderUnifiedSuggestionsMenu variant="mobile" />
        </div>
      </div>
    </MobileSearchOverlayController>
  );
}
