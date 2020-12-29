import { Image } from "@chakra-ui/react";

export default function FeatureIcon({ src, alt }) {
  return (
    <div>
      <Image src={src} alt={alt} />
    </div>
  );
}
