// NativeBase
import { FlatList, View, Center } from "native-base";

// API & Hooks
import { useGetAllWinesQuery } from "../../store/api";

// Components
import Card from "../UI/Card";
import ErrorComponent from "../Error/ErrorComponent";
import LoadingSpinner from "../UI/LoadingSpinner";

// Utils
import concatWineAttributes from "../../utils/concatWineAttributes";
import NetInfo from "@react-native-community/netinfo";

// Typescript types
import { Wine } from "../../store/wine.interface";

const WinesList = () => {
  const { data, error, isLoading, isFetching, refetch } = useGetAllWinesQuery();

  const listRefreshHandler = () => {
    NetInfo.fetch().then((state) => {
      if (state.type === "wifi") {
        refetch();
      }
    });
  };

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
      onRefresh={listRefreshHandler}
      refreshing={isLoading}
    />
  );

  let loadingView = null;

  if (isLoading) {
    loadingView = (
      <Center flex="1">
        <LoadingSpinner message="Loading wines.." vertical />
      </Center>
    );
  } else if (isFetching) {
    loadingView = (
      <Center m="3">
        <LoadingSpinner />
      </Center>
    );
  }

  if (error) {
    if ("status" in error && "data" in error) {
      return (
        <View width="100%" flex="1">
          <Center flex="1">
            <ErrorComponent
              header={String(error.status)}
              body={JSON.stringify(error.data)}
            />
          </Center>
        </View>
      );
    } else {
      return (
        <View width="100%" flex="1">
          <Center flex="1">
            <ErrorComponent />
          </Center>
        </View>
      );
    }
  } else {
    return (
      <View width="100%" flex="1">
        {loadingView}
        {data && dataView}
      </View>
    );
  }
};

export default WinesList;
