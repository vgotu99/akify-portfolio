import Logo from '@/src/shared/ui/logo';
import { css } from '@/styled-system/css';
import { flex } from '@/styled-system/patterns';

export default function Footer() {
  return (
    <footer
      className={css({
        background: 'colors.surface.lightGray',
        paddingTop: '32',
        paddingX: ['16', '32'],
        paddingBottom: ['56px', '100px'],
        position: 'relative',
        zIndex: 10,
      })}
    >
      <div
        className={flex({
          flexDirection: 'column',
          gap: '12',
          color: 'colors.text.tertiary',
          textStyle: ['mobile.caption.small', 'desktop.caption.small'],
          marginX: 'auto',
          maxWidth: 'breakpoint-desktop',
        })}
      >
        <Logo
          className={css({
            color: 'colors.icon.lightest',
            width: ['66px', '94px'],
          })}
        />
        <section>
          <p>
            잼머링 | 대표 : 정해진 | 소재지 : 서울특별시 강남구 역삼로 180, 2층
            | 사업자등록번호 : 850-41-01498{' '}
            <a
              href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=8504101498"
              target="_blank"
              rel="noopener noreferrer"
              className={css({ textDecoration: 'underline' })}
            >
              사업자정보확인
            </a>
            {' | '}통신판매업신고 : 2025-서울강남-04380
          </p>
          <p>고객센터 : 070-7666-9282 | 대표 이메일: info@jammering.com</p>
        </section>
        <section>
          <p>2025 Jammering™ All rights reserved.</p>
        </section>
        <section>
          <p>
            잼머링은 통신판매중개자로서 거래 당사자가 아닙니다. 상품, 상품정보,
            거래에 관한 의무와 책임은 각 판매자에게 있으므로 잼머링은 판매
            회원과 구매 회원 간의 거래에 대해 책임을 지지 않습니다. 본사에서
            직접 판매하는 상품에 대한 책임은 잼머링에 있습니다.
          </p>
        </section>
      </div>
    </footer>
  );
}
