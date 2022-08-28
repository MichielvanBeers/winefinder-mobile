// Native Base
import { Text, Box, View, VStack, HStack } from "native-base";

// Theme
import colors from "../../theme/colors.json";

// Typescript types
type Card = {
  header: string;
  subHeader: string;
  body: string;
} 

const Card: React.FC<Card> = (props) => {
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
              {props.header}
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
            {props.subHeader}
          </Text>
          <Text>{props.body}</Text>
        </VStack>
      </Box>
    </View>
  );
};

export default Card;
