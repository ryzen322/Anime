import { ComponentPropsWithoutRef, FC } from "react";

interface CustomImageProps extends ComponentPropsWithoutRef<"img"> {
  customProp?: string;
}

const defaultImageUrl =
  "https://upload.wikimedia.org/wikipedia/commons/6/68/Solid_black.png";

const Image: FC<CustomImageProps> = ({ src, ...rest }) => {
  return <img {...rest} src={src || defaultImageUrl} />;
};

export default Image;
