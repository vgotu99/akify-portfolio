import BottomBarIconController from '@/src/app/layout/bottom-bar/bottom-bar-icon-controller';
import BottomBarButton from '@/src/features/download/ui/bottom-bar-button';
import AppIcon from '@/src/shared/ui/app-icon';
import IconUpload from '@/src/shared/ui/icons/icon-upload';
import { css } from '@/styled-system/css';
import { flex } from '@/styled-system/patterns';

export default function BottomBar() {
  return (
    <nav
      style={{ backdropFilter: 'blur(12px)' }}
      className={css({
        background: [
          'colors.surface.alphaWhiteStrong',
          'colors.surface.superDark',
        ],
        paddingX: ['16', '32'],
        paddingY: '8',
        width: '100%',
        position: 'fixed',
        bottom: 0,
        boxShadow: '0px -4px 24px rgba(0, 0, 0, 0.08)',
        zIndex: 100,
      })}
    >
      <div
        className={flex({
          justifyContent: 'space-between',
          marginX: 'auto',
          maxWidth: 'breakpoint-desktop',
        })}
      >
        <div
          className={flex({
            gap: '4',
            textStyle: ['mobile.label.xxsmall', 'desktop.body.xsmall'],
            color: ['colors.text.secondary', 'colors.text.secondaryOnDark'],
            alignItems: 'center',
          })}
        >
          <AppIcon
            size={24}
            className={css({
              display: ['none', 'block'],
              visibility: ['hidden', 'visible'],
            })}
          />
          <div>아키파이 앱에서 거래할 수 있어요!</div>
        </div>
        <div className={flex({ gap: '16', alignItems: 'center' })}>
          <BottomBarIconController>
            <IconUpload
              size={28}
              className={css({
                color: ['colors.icon.secondary', 'colors.icon.secondaryOnDark'],
              })}
            />
          </BottomBarIconController>
          <BottomBarButton />
        </div>
      </div>
    </nav>
  );
}
