// Native Base
import { Center } from "native-base";

// Components
import LoadingSpinner from "../UI/LoadingSpinner";

const WinesLoading = () => {
  return (
    <Center flex="1">
      <LoadingSpinner message="Loading wines.." vertical />
    </Center>
  );
};

export default WinesLoading
