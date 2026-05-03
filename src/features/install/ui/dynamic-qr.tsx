'use client';

import { QRCodeSVG } from 'qrcode.react';
import { use, useState } from 'react';
import { getBridgeUrl } from '@/src/entities/install/lib/utils';

interface DynamicQRProps {
  targetPath: string;
}

export default function DynamicQR({ targetPath }: DynamicQRProps) {
  const [urlPromise] = useState(() => getBridgeUrl(targetPath));
  const qrValue = use(urlPromise);

  return <QRCodeSVG value={qrValue} size={210} level="H" />;
}
