import { Suspense } from 'react';
import DynamicQR from '@/src/features/install/ui/dynamic-qr';
import AppIcon from '@/src/shared/ui/app-icon';
import { ModalDismissProvider } from '@/src/shared/ui/modal/context';
import ModalDismissButton from '@/src/shared/ui/modal/modal-dismiss-button';
import ModalDismissController from '@/src/shared/ui/modal/modal-dismiss-controller';
import { css } from '@/styled-system/css';
import { flex } from '@/styled-system/patterns';

interface InterceptedInstallProps {
  searchParams: Promise<{ target: string }>;
}

export default async function InterceptedInstall({
  searchParams,
}: InterceptedInstallProps) {
  const { target } = await searchParams;
  const targetPath = decodeURIComponent(target);

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
          <Suspense
            fallback={
              <div
                className={css({
                  width: '210px',
                  height: '210px',
                  backgroundColor: 'colors.background.secondary',
                  borderRadius: '12px',
                })} // 임시
              />
            }
          >
            <DynamicQR targetPath={targetPath} />
          </Suspense>
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
