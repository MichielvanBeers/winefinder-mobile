// Native Base
import { Center } from "native-base";

// Components
import WinesList from "../components/Wines/WinesList";

const WinesOverviewScreen = () => {


  return (
    <Center flex="1" justifyContent="flex-start">
      <WinesList />
    </Center>
  );
};

export default WinesOverviewScreen;
