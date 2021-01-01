import { Box, Text, Center, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import styles from "./featureIcons.module.css";

export default function FeatureIcon({ link, heading, subheading, src, alt }) {
  return (
    <Center>
      <VStack className={styles.container}>
        <Box className={styles.box}>
          <Link to={link}>
            {/* <Icon as={icon} className={styles.myIcon} /> */}
            <img className={styles.myIcon} src={src} alt={alt} />
          </Link>
        </Box>
        <Box className={styles.textBox}>
          <Text>{heading}</Text>
          {/* <Text className={styles.textBox}>{subheading}</Text> */}
        </Box>
      </VStack>
    </Center>
  );
}
