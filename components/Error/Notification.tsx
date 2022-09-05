// Native Base import
import { Box, Text, Center } from "native-base";

type NotificationMessage = {
  title: string;
};

const Notification: React.FC<NotificationMessage> = (props) => {
  return (
    <Box width="100%" height="10" backgroundColor="error.600">
      <Center flex="1">
        <Text color="white" fontWeight="bold">{props.title}</Text>
      </Center>
    </Box>
  );
};

export default Notification;
