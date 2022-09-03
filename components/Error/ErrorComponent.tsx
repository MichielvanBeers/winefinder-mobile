// Native Base
import { Text, VStack, Image, Heading } from "native-base";

// Theme
import colors from "../../theme/colors.json";

type ErrorMessage = {
  header?: string;
  body?: string
};

const ErrorComponent: React.FC<ErrorMessage> = (props) => {
  const errorHeaderString = String(props.header)
  const errorBodyString = String(props.body);

  return (
    <VStack alignItems="center" space="3" maxWidth="60%">
      <Image
        source={require("../../assets/error/error.png")}
        alt="Error Image"
        size="xl"
      />
      <Heading color={colors["md.sys.color.primary"].nativeBase}>{errorHeaderString}</Heading>
      <Text
        textAlign="center"
        color={colors["md.sys.color.primary"].nativeBase}
        fontSize="xl"
      >
        {errorBodyString}
      </Text>
    </VStack>
  );
};

ErrorComponent.defaultProps = {
  header: "Error",
  body: "Something went wrong"
}

export default ErrorComponent;
