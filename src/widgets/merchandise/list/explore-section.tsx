import type { MerchandiseListPosts } from '@/src/entities/merchandise/list/model/types';
import GridLayout from '@/src/entities/merchandise/list/ui/grid-layout';
import MerchandiseCardVertical from '@/src/entities/merchandise/list/ui/merchandise-card-vertical';
import ShowMoreContainer from '@/src/entities/merchandise/list/ui/show-more-container';
import type { MerchandiseInfiniteScrollProps } from '@/src/entities/merchandise/list/ui/suspensed-infinite-merchandise-list';
import NoResult from '@/src/features/search/ui/no-result';
import { hasNextPage } from '@/src/shared/lib/utils';
import TitleGroup from '@/src/shared/ui/title-group';
import SemanticChipToggleController from '@/src/widgets/merchandise/list/semantic-chip-toggle-controller';
import { css, cva, cx } from '@/styled-system/css';

interface ExploreSectionProps extends MerchandiseInfiniteScrollProps {
  variant: 'main' | 'search';
  merchandiseListPosts: MerchandiseListPosts;
  q?: string;
}

export default function ExploreSection({
  variant,
  merchandiseListPosts,
  infiniteScroll,
  q,
}: ExploreSectionProps) {
  const isVariantSearch = variant === 'search';
  const searchTitle = isVariantSearch && q ? q : '';
  const title = isVariantSearch ? searchTitle : 'Explore';
  const subtitle = !isVariantSearch ? '다양한 악기 매물을 확인해보세요!' : '';
  const initialPageSize = isVariantSearch ? 16 : 32;
  const hasNext = hasNextPage(merchandiseListPosts.length, initialPageSize);
  const hasNoResult = merchandiseListPosts.length === 0;

  return (
    <section
      className={cx(
        css({
          borderTopRadius: [, '2xl'],
          position: [, 'relative'],
          background: 'colors.surface.white',
          paddingBottom: ['64px', '56px'],
        }),
        styleVariant({ sectionVariant: variant }),
      )}
    >
      <div
        className={cx(
          css({
            display: ['none', 'block'],
            visibility: ['hidden', 'visible'],
            position: 'absolute',
            width: 'full',
            height: '88px',
            top: '0',
            background:
              'linear-gradient(180deg, #CECECE 0%, rgba(255, 255, 255, 0) 100%)',
          }),
          styleVariant({ containerVariant: variant }),
        )}
      />
      <div
        className={cx(
          css({
            position: 'relative',
            zIndex: 1,
            boxShadow: [
              'none',
              '4px 4px 4px 0 rgba(255, 255, 255, 0.60) inset, -4px 4px 4px 0 rgba(255, 255, 255, 0.30) inset',
            ],
            borderTopRadius: [, '2xl'],
          }),
          styleVariant({ containerVariant: variant }),
        )}
      >
        <SemanticChipToggleController
          titleGroupSlot={
            <TitleGroup variant={variant} title={title} subtitle={subtitle} />
          }
          variant={variant}
        >
          {hasNoResult ? (
            <NoResult />
          ) : (
            <GridLayout>
              {merchandiseListPosts.map((post) => (
                <MerchandiseCardVertical key={post.id} merchandise={post} />
              ))}
              {hasNext && <ShowMoreContainer infiniteScroll={infiniteScroll} />}
            </GridLayout>
          )}
        </SemanticChipToggleController>
      </div>
    </section>
  );
}

const styleVariant = cva({
  variants: {
    sectionVariant: {
      main: {
        marginTop: [, '644px', '764px'],
        borderTopRadius: [, '2xl'],
      },
      search: {
        paddingTop: ['0px', '84px'],
      },
    },
    containerVariant: {
      main: { borderTopRadius: [, '2xl'] },
      search: {},
    },
  },
});
