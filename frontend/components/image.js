import { getStrapiMedia } from "../lib/media";

const Image = ({
  image = {
    alternativeText: "",
    name: "",
  },
  style,
}) => {
  const imageUrl = getStrapiMedia(image);

  return (
    <img
      src={imageUrl}
      alt={image.alternativeText || image.name}
      style={style}
    />
  );
};

export default Image;
