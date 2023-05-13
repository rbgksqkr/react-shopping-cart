import { ImgHTMLAttributes } from 'react';
import { css, styled } from 'styled-components';

type ImageSize = 'large' | 'medium' | 'small';

interface ImageProps {
  src: string;
  loading?: ImgHTMLAttributes<HTMLImageElement>['loading'];
  alt?: string;
  size?: ImageSize;
}

const Image = ({
  src,
  loading = 'eager',
  alt = '',
  size = 'medium',
}: ImageProps) => {
  return (
    <ImageWrapper>
      <Img src={src} loading={loading} alt={alt} size={size} />
      <ImageBackground />
    </ImageWrapper>
  );
};

const ImageWrapper = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;
`;

const imageSizeMapper = {
  large: '282px',
  medium: '145px',
  small: '70px',
};

const Img = styled.img<{ size: ImageSize }>`
  ${({ size }) => css`
    width: ${imageSizeMapper[size]};
    height: ${imageSizeMapper[size]};
  `}
`;

const ImageBackground = styled.div`
  pointer-events: none;
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0px;
  left: 0px;
  background-color: rgba(0, 0, 0, 0.05);
`;

export default Image;
