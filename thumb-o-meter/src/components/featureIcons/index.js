import { Image, Box, Text, Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function FeatureIcon({ src, alt, link, heading, subheading }) {
  return (
    <Box p={5} display={{ md: "flex" }} alignItems="center" textAlign="center">
      <Center>
        <Box flexShrink={0}>
          <Link to={link}>
            <Image src={src} alt={alt} borderRadius="xl" boxSize="100px" />
          </Link>
        </Box>
      </Center>

      <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }} textAlign="center">
        <Text
          fontWeight="bold"
          textTransform="uppercase"
          fontSize="sm"
          letterSpacing="wide"
          color="teal.600"
        >
          {heading}
        </Text>
        <Text
          mt={1}
          display="block"
          fontSize="sm"
          lineHeight="normal"
          fontWeight="semibold"
        >
          {subheading}
        </Text>
      </Box>
    </Box>
  );
}
