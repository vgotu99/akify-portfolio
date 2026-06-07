import EmojiSadFace from '@/src/shared/ui/emojis/emoji-sad-face';
import { css } from '@/styled-system/css';
import { flex } from '@/styled-system/patterns';

export default function NoResult() {
  return (
    <div
      className={flex({
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '96px',
        paddingBottom: '64',
      })}
    >
      <div
        className={flex({
          flexDirection: 'column',
          alignItems: 'center',
          gap: '4',
        })}
      >
        <EmojiSadFace size={28} />
        <p
          className={css({
            textStyle: 'mobile.body.mediumStrong',
            color: 'colors.text.secondary',
          })}
        >
          검색 결과가 없어요
        </p>
      </div>
    </div>
  );
}
