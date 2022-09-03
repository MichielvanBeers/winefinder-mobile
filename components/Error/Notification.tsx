// Native Base import
import { Box, Text, Center } from "native-base";

const Notification = () => {
  return (
    <Box width="100%" height="10" backgroundColor="error.600">
      <Center flex="1">
        <Text color="white" fontWeight="bold">Please connect to your home wifi</Text>
      </Center>
    </Box>
  );
};

export default Notification;
