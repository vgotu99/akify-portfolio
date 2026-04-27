import type { Metadata } from 'next';
import EmojiSadFace from '@/src/shared/ui/emojis/emoji-sad-face';
import LinkButton from '@/src/shared/ui/link-button';
import { css } from '@/styled-system/css';
import { flex } from '@/styled-system/patterns';

export const metadata: Metadata = {
  title: '404',
  robots: {
    index: false,
    follow: false,
  },
};

export default function CatchAllNotFound() {
  return (
    <div
      className={flex({
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        gap: '28',
      })}
    >
      <div
        className={flex({
          flexDirection: 'column',
          alignItems: 'center',
        })}
      >
        <div
          className={css({
            textStyle: 'desktop.hero.xlarge',
          })}
        >
          404
        </div>
        <div
          className={flex({
            textStyle: 'desktop.title.medium',
            gap: '8',
          })}
        >
          <EmojiSadFace size={28} />
          <p>요청하신 페이지를 찾을 수 없습니다.</p>
        </div>
      </div>
      <LinkButton href="/">홈으로 가기</LinkButton>
    </div>
  );
}
