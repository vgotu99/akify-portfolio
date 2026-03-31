import { css, cx } from '@/styled-system/css';

export default function SemanticChipGroupSkeleton() {
  return (
    <div
      className={cx(
        'detail-chips',
        css({
          flexWrap: 'wrap',
          gap: '4',
        }),
      )}
    >
      <div
        className={css({
          width: '60px',
          height: ['24px', '28px'],
          backgroundColor: 'colors.surface.lightGray',
          borderRadius: 'md',
          animation: 'custom-pulse',
        })}
      />
      <div
        className={css({
          width: '40px',
          height: ['24px', '28px'],
          backgroundColor: 'colors.surface.lightGray',
          borderRadius: 'md',
          animation: 'custom-pulse',
        })}
      />
      <div
        className={css({
          width: '100px',
          height: ['24px', '28px'],
          backgroundColor: 'colors.surface.lightGray',
          borderRadius: 'md',
          animation: 'custom-pulse',
        })}
      />
      <div
        className={css({
          width: '80px',
          height: ['24px', '28px'],
          backgroundColor: 'colors.surface.lightGray',
          borderRadius: 'md',
          animation: 'custom-pulse',
        })}
      />
    </div>
  );
}
