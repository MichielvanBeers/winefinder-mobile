// Native Base
import { Image, Text, VStack } from "native-base";

// React Native SVG
import { SvgUri } from "react-native-svg";

// Theme
import colors from "../../theme/colors.json";

type ErrorMessage = {
  message?: string;
};

const ErrorComponent: React.FC<ErrorMessage> = (props) => {
  const errorMessageString = String(props.message);

  return (
    <VStack alignItems="center" m="8">
      <SvgUri width="100" height="100" uri={require('../../assets/error/errorSvg.svg')}/>
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
