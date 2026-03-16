'use client';

import { useState } from 'react';
import type { WithChildren } from '@/src/shared/lib/types';
import DynamicBar from '@/src/shared/ui/dynamic-bar';
import ToggleGroup from '@/src/shared/ui/toggle/toggle-group';
import { css } from '@/styled-system/css';

interface SemanticChipToggleControllerProps {
  titleGroupSlot: React.ReactNode;
  variant: 'main' | 'search';
}

export default function SemanticChipToggleController({
  titleGroupSlot,
  variant,
  children,
}: WithChildren<SemanticChipToggleControllerProps>) {
  const [isToggleOn, setIsToggleOn] = useState(false);

  const handleToggle = () => {
    setIsToggleOn((prev) => !prev);
  };

  return (
    <div
      className={css({
        maxWidth: 'breakpoint-desktop',
        margin: '0 auto',
        '& .detail-chips': {
          display: isToggleOn ? 'flex' : 'none',
          visibility: isToggleOn ? 'visible' : 'hidden',
        },
      })}
    >
      <DynamicBar variant={variant}>
        {titleGroupSlot}
        <ToggleGroup
          isToggleOn={isToggleOn}
          handleToggle={handleToggle}
          value="자세히 보기"
        />
      </DynamicBar>
      {children}
    </div>
  );
}
