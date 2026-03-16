import { css } from '@/styled-system/css';

export default function MerchandiseDetailImage() {
  return (
    <div
      className={css({
        width: '524px',
        height: '524px',
        borderRadius: 'lg',
        backgroundColor: 'colors.surface.alphaBlackMedium',
      })}
    ></div>
  );
}
