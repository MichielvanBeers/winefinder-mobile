// Native Base
import { Text, Box, View, VStack, HStack, Image } from "native-base";

// Theme
import colors from "../../theme/colors.json";

const Card = () => {
  return (
    <View px="4" py="2" width="100%">
      <Box
        bg={colors["md.sys.color.primary-container"].nativeBase}
        rounded="lg"
        shadow="2"
        h="32"
      >
        <VStack m="4">
          <HStack>
            {/* <Image
              source={{
                uri: "https://flagcdn.com/w40/es.png",
              }}
              alt="Flag spain"
              size="2xs"
            ></Image> */}
            <Text
              fontWeight="semibold"
              isTruncated
              _ios={{
                fontSize: "2xl",
              }}
              _android={{
                fontSize: "3xl",
              }}
            >
              Rioja (2002)
            </Text>
          </HStack>
          <Text
            lineHeight="2xl"
            _ios={{
              fontSize: "md",
            }}
            _android={{
              fontSize: "xl",
            }}
          >
            Tempranillo, Red
          </Text>
          <Text>Red meat, hard cheeses</Text>
        </VStack>
      </Box>
    </View>
  );
};

export default Card;
