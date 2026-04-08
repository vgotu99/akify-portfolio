import { QRCodeSVG } from 'qrcode.react';
import AppIcon from '@/src/shared/ui/app-icon';
import { ModalDismissProvider } from '@/src/shared/ui/modal/context';
import ModalDismissButton from '@/src/shared/ui/modal/modal-dismiss-button';
import ModalDismissController from '@/src/shared/ui/modal/modal-dismiss-controller';
import { css } from '@/styled-system/css';
import { flex } from '@/styled-system/patterns';

interface InterceptedDownloadProps {
  searchParams: Promise<{ target: string }>;
}

export default async function InterceptedDownload({
  searchParams,
}: InterceptedDownloadProps) {
  const { target } = await searchParams;

  return (
    <ModalDismissProvider>
      <ModalDismissController>
        <div
          className={flex({
            paddingX: '24',
            paddingY: ['8', '12'],
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottomWidth: 'xlight',
            borderBottomColor: 'colors.border.light',
          })}
        >
          <div
            className={css({
              textStyle: ['mobile.title.medium', 'desktop.title.medium'],
              color: 'colors.text.primary',
            })}
          >
            앱에서 보기
          </div>
          <ModalDismissButton />
        </div>
        <div
          className={flex({
            flexDirection: 'column',
            alignItems: 'center',
            gap: '32',
            paddingTop: '24px',
            paddingBottom: ['56px', '48px'],
          })}
        >
          <div
            className={flex({
              gap: '8',
              alignItems: 'center',
            })}
          >
            <AppIcon size={16} />
            <div
              className={css({
                textStyle: 'desktop.body.medium',
                color: 'colors.text.secondary',
              })}
            >
              아키파이 앱에서 거래를 즐겨보세요!
            </div>
          </div>
          <QRCodeSVG
            value={`https://web.akify.io/download?target=${target}`}
            size={210}
            level="H"
          />
          <div
            className={css({
              textStyle: ['mobile.caption.medium', 'desktop.body.xsmall'],
              color: 'colors.text.secondary',
              textAlign: 'center',
            })}
          >
            <div>해당 QR 코드 인식은 모바일 기기로만 가능해요.</div>
            <div>휴대전화의 카메라로 QR 코드를 스캔해 주세요.</div>
          </div>
        </div>
      </ModalDismissController>
    </ModalDismissProvider>
  );
}
