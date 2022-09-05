// NativeBase
import { Spinner, Heading, HStack, VStack } from "native-base";

// Theme
import colors from "../../theme/colors.json";

type LoadingContent = {
  message?: string;
  vertical?: boolean;
};

const LoadingSpinner: React.FC<LoadingContent> = (props) => {
  const spinnerView = (
    <>
      <Spinner color={colors["md.sys.color.primary"].nativeBase} />
      {props.message ? (
        <Heading color={colors["md.sys.color.primary"].nativeBase}>
          {props.message}
        </Heading>
      ) : null}
    </>
  );

  if (props.vertical) {
    return <VStack space="3">{spinnerView}</VStack>;
  } else {
    return <HStack space="3">{spinnerView}</HStack>;
  }
};

export default LoadingSpinner;
