// React
import { useState } from "react";

// API & Hooks
import { useLazyGetAllWinesQuery } from "../../store/api";

// UI Components
import { FlatList, View, Center } from "native-base";
import Card from "../UI/Card";
import ErrorComponent from "../Error/ErrorComponent";
import { Snackbar } from "react-native-paper";
import WinesLoading from "./WinesLoading";
import WinesFetching from "./WinesFetching";

// Theming
import colors from "../../theme/colors.json";

// Utils
import concatWineAttributes from "../../utils/concatWineAttributes";
import NetInfo from "@react-native-community/netinfo";

// Typescript types
import { Wine } from "../../store/wine.interface";
import { useEffect } from "react";

const WinesList = () => {
  const [trigger, { data, error, isLoading, isFetching }] =
    useLazyGetAllWinesQuery();

  const [showSnackbar, setShowSnackBar] = useState(false);

  const dissmissSnackbarHandler = () => {
    setShowSnackBar(false);
  };

  const fetchWineOnWifi = () => {
    NetInfo.fetch().then((state) => {
      if (state.type === "wifi") {
        trigger();
      } else {
        setShowSnackBar(true);
      }
    });
  };

  useEffect(() => {
    fetchWineOnWifi();
  }, []);

  const renderItem = ({ item }: { item: Wine }) => {
    return (
      <Card
        header={concatWineAttributes(item.name, item.year)}
        subHeader={concatWineAttributes(item.grape, item.region)}
        body={concatWineAttributes(item.price, item.score, item.tag)}
      />
    );
  };

  const dataView = (
    <FlatList
      data={data}
      keyExtractor={(item: any) => item.id}
      renderItem={renderItem}
      onRefresh={fetchWineOnWifi}
      refreshing={isLoading}
    />
  );

  const snackbarView = (
    <Snackbar
      onDismiss={dissmissSnackbarHandler}
      visible={showSnackbar}
      action={{
        label: "Retry",
        onPress: fetchWineOnWifi,
        color: colors["md.sys.color.primary-container"].hex,
      }}
      duration={Infinity}
    >
      Please connect to your home wifi
    </Snackbar>
  );

  let errorView = null;

  if (error) {
    if ("status" in error && "data" in error) {
      errorView = (
        <View width="100%" flex="1">
          <Center flex="1">
            <ErrorComponent
              header={String(error.status)}
              body={JSON.stringify(error.data)}
              onButtonPress={fetchWineOnWifi}
              isLoading={isFetching}
            />
          </Center>
        </View>
      );
    } else {
      errorView = (
        <View width="100%" flex="1">
          <Center flex="1">
            <ErrorComponent
              onButtonPress={fetchWineOnWifi}
              isLoading={isFetching}
            />
          </Center>
        </View>
      );
    }
  }

  return (
    <View width="100%" flex="1">
      {isFetching && isLoading && !error ? <WinesLoading /> : null}
      {isFetching && !isLoading && !error ? <WinesFetching /> : null}
      {error && errorView}
      {data && dataView}
      {showSnackbar && snackbarView}
    </View>
  );
};

export default WinesList;
