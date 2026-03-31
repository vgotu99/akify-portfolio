'use client';

import { useState } from 'react';
import ShowMoreButton from '@/src/entities/merchandise/list/ui/show-more-button';
import SuspensedInfiniteMerchandiseList from '@/src/entities/merchandise/list/ui/suspensed-infinite-merchandise-list';
import { flex } from '@/styled-system/patterns';

export default function ShowMoreContainer() {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(true);
  };

  if (!showMore)
    return (
      <div
        className={flex({
          justifyContent: 'center',
          gridColumn: '1 / -1',
        })}
      >
        <ShowMoreButton onClick={handleShowMore} />
      </div>
    );

  return <SuspensedInfiniteMerchandiseList />;
}
