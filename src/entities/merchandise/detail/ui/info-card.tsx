import CategoryGroup from '@/src/entities/merchandise/detail/ui/category-group';
import BrandName from '@/src/entities/merchandise/shared/ui/brand-name';
import MerchandiseTitle from '@/src/entities/merchandise/shared/ui/merchandise-title';
import { formatBaseAlt } from '@/src/shared/lib/formats';
import IconChevronRight from '@/src/shared/ui/icons/icon-chevron-right';
import ResponsiveImage from '@/src/shared/ui/responsive-image';
import { css, cva } from '@/styled-system/css';
import { flex } from '@/styled-system/patterns';

export interface UserVariantValue {
  profileImage: string;
  nickname: string;
}

export interface ModelVariantValue {
  modelImage: string;
  brandName: string;
  modelName: string;
  effectType: string;
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
        paddingX: '12',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'colors.surface.lightGray',
        borderRadius: 'lg',
      })}
    >
      <div className={flex({ gap: '8', alignItems: 'center' })}>
        <ResponsiveImage
          src={image}
          alt={alt}
          sizes="48px"
          aspectRatio={ASPECT_RATIO_MAP[variant]}
          className={styleVariant({ imageVariant: variant })}
        />
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
    const { profileImage, nickname } = value;

    return {
      image: profileImage,
      alt: nickname,
      info: <div>{nickname}</div>,
    };
  }

  const { modelImage, brandName, modelName, effectType } = value;
  const baseAlt = formatBaseAlt(brandName, modelName);

  return {
    image: modelImage,
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
        <CategoryGroup variant="card" value={effectType} />
      </div>
    ),
  };
};

const ASPECT_RATIO_MAP = {
  user: 1 / 1,
  model: 3 / 5,
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
