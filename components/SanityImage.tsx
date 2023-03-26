import { getImageDimensions } from "@sanity/asset-utils";
import clsx from "clsx";
import client from "lib/sanityClient";
import Image, { ImageProps } from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import { SanityClient } from "sanity";
import { z } from "zod";

const sanityImageSchema = z.object({
  _type: z.literal("image"),
  asset: z.object({
    _ref: z.string(),
    _type: z.literal("reference"),
  }),
});

type SanityImageType = z.infer<typeof sanityImageSchema>;

const ImageRenderer: React.FC<
  {
    image: SanityImageType;
    alt: string;
    sanityClient: SanityClient;
  } & Partial<ImageProps>
> = ({ image, alt, sanityClient, width: widthOverride, ...props }) => {
  const imageProps = useNextSanityImage(sanityClient, image, {
    imageBuilder: widthOverride
      ? (imageUrlBuilder) => imageUrlBuilder.width(widthOverride as number)
      : undefined,
  });
  const { width, height } = getImageDimensions(image);
  return (
    <Image
      {...imageProps}
      alt={alt}
      loading="lazy"
      style={{
        // Avoid jumping around with aspect-ratio CSS property
        aspectRatio: width / height,
      }}
      {...props}
    />
  );
};

export const ImageURL = (image?: unknown) => {
  if (!client) {
    console.error("Can't render image without Sanity client");
    return undefined;
  }
  const parsedImageResult = sanityImageSchema.safeParse(image);

  if (!parsedImageResult.success) {
    console.error("Image object did not match schema", {
      cause: parsedImageResult.error,
    });
    return undefined;
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const imageProps = useNextSanityImage(client, parsedImageResult.data);
  return imageProps.src;
};

const SanityImage: React.FC<
  {
    image?: unknown;
    alt: string;
  } & Partial<ImageProps>
> = ({ image, alt, ...props }) => {
  if (!client) {
    console.error("Can't render image without Sanity client");
    return <span className={clsx("text-danger")}>Something went wrong</span>;
  }
  const parsedImageResult = sanityImageSchema.safeParse(image);
  if (!parsedImageResult.success) {
    console.error("Image object did not match schema", {
      cause: parsedImageResult.error,
    });
    return (
      <span className={clsx("text-danger")}>Please specify a valid image</span>
    );
  }
  return (
    <ImageRenderer
      alt={alt}
      image={parsedImageResult.data}
      sanityClient={client}
      {...props}
    />
  );
};

export default SanityImage;
