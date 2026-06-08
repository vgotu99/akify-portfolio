import { is404Error } from '@/src/shared/lib/soft-404';
import EmojiSadFace from '@/src/shared/ui/emojis/emoji-sad-face';
import LinkButton from '@/src/shared/ui/link-button';
import { css } from '@/styled-system/css';
import { flex } from '@/styled-system/patterns';

export default function NotFound() {
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

export function withSoft404<P extends object>(
  Component: (props: P) => Promise<React.JSX.Element> | React.JSX.Element,
) {
  return async function Soft404WrappedPage(props: P) {
    try {
      return await Component(props);
    } catch (error) {
      if (is404Error(error)) {
        return <NotFound />;
      }

      throw error;
    }
  };
}
