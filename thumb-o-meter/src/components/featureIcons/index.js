import { Box, Text, Center, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./feature.css";

export default function FeatureIcon({ link, heading, myClass, src, alt, id }) {
  return (
    <Center>
      <VStack className={"container"}>
        <Box className={"box"}>
          <Link to={link}>
            {/* <Icon as={icon} className={styles.myIcon} /> */}
            <img
              //className={myClass}
              className={myClass}
              src={src}
              alt={alt}
            />
          </Link>
        </Box>
        <Box className={"textBox"}>
          <Text id={id}>{heading}</Text>
          {/* <Text className={styles.textBox}>{subheading}</Text> */}
        </Box>
      </VStack>
    </Center>
  );
}
