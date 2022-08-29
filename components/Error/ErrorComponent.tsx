// Native Base
import { Image, Text, VStack } from "native-base";

// Theme
import colors from "../../theme/colors.json";

type ErrorMessage = {
  message?: string;
};

const ErrorComponent: React.FC<ErrorMessage> = (props) => {
  const errorMessageString = String(props.message);

  return (
    <VStack alignItems="center" m="8">
      <Image
        size="2xl"
        alt="error image"
        source={require("../../assets/wineBottle.png")}
      />
      <Text
        textAlign="center"
        color={colors["md.sys.color.primary"].nativeBase}
        fontSize="xl"
        marginTop="4"
      >
        {errorMessageString ? errorMessageString : "An error occurred"}
      </Text>
    </VStack>
  );
};

export default ErrorComponent;
