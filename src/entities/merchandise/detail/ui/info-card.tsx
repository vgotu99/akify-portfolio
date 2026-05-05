import CategoryGroup from '@/src/entities/merchandise/detail/ui/category-group';
import BrandName from '@/src/entities/merchandise/shared/ui/brand-name';
import MerchandiseTitle from '@/src/entities/merchandise/shared/ui/merchandise-title';
import { formatBaseAlt } from '@/src/shared/lib/formats';
import IconChevronRight from '@/src/shared/ui/icons/icon-chevron-right';
import ResponsiveImage from '@/src/shared/ui/responsive-image';
import { css, cva } from '@/styled-system/css';
import { flex } from '@/styled-system/patterns';

export interface UserVariantValue {
  profileImageUrl: string;
  nickname: string;
}

export interface ModelVariantValue {
  modelImageUrl: string | null;
  brandName: string;
  modelName: string;
  subCategoryKorName: string;
}

type InfoCardProps =
  | { variant: 'user'; value: UserVariantValue }
  | { variant: 'model'; value: ModelVariantValue };

export default function InfoCard(props: InfoCardProps) {
  const { variant } = props;

  const { image, alt, info } = formatProps(props);

  return (
    <div
      className={flex({
        paddingY: '16',
        paddingX: '16',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'colors.surface.lightGray',
        borderRadius: 'lg',
      })}
    >
      <div className={flex({ gap: '8', alignItems: 'center' })}>
        {image && (
          <ResponsiveImage
            src={image}
            alt={alt}
            sizes="48px"
            aspectRatio={ASPECT_RATIO_MAP[variant]}
            objectFit="contain"
            className={styleVariant({ imageVariant: variant })}
          />
        )}
        <div
          className={css({
            textStyle: 'desktop.title.small',
          })}
        >
          {info}
        </div>
      </div>
      <IconChevronRight size={24} className={styleVariant({ variant })} />
    </div>
  );
}

const formatProps = (props: InfoCardProps) => {
  const { variant, value } = props;

  if (variant === 'user') {
    const { profileImageUrl, nickname } = value;

    return {
      image: profileImageUrl,
      alt: nickname,
      info: <div>{nickname}</div>,
    };
  }

  const { modelImageUrl, brandName, modelName, subCategoryKorName } = value;
  const baseAlt = formatBaseAlt(brandName, modelName);

  return {
    image: modelImageUrl,
    alt: baseAlt,
    info: (
      <div
        className={flex({
          gap: '4',
          flexDirection: 'column',
        })}
      >
        <BrandName variant="card" value={brandName} />
        <MerchandiseTitle variant="card" value={modelName} />
        <CategoryGroup variant="card" value={subCategoryKorName} />
      </div>
    ),
  };
};

const ASPECT_RATIO_MAP = {
  user: 1 / 1,
  model: 27 / 35,
};

const styleVariant = cva({
  variants: {
    variant: {
      user: {
        color: 'colors.text.lightest',
      },
      model: {
        color: 'colors.text.primary',
      },
    },
    imageVariant: {
      user: {
        width: '48px',
        height: '48px',
        borderRadius: 'full',
      },
      model: {
        width: 'auto',
        height: ['70px', '76px'],
      },
    },
  },
});
