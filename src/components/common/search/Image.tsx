import { ComponentPropsWithoutRef, FC } from "react";

interface CustomImageProps extends ComponentPropsWithoutRef<"img"> {
  customProp?: string;
}

const Image: FC<CustomImageProps> = ({ src, ...rest }) => {
  return <img {...rest} src={src} loading="lazy" decoding="async" />;
};

export default Image;
