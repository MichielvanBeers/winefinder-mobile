// NativeBase
import { Text, FlatList, View, Center } from "native-base";

// API & Hooks
import useFetch from "../../hooks/use-fetch";
import { useGetAllWinesQuery } from "../../store/api";

// Components
import Card from "../UI/Card";
import ErrorComponent from "../Error/ErrorComponent";

// Utils
import concatWineAttributes from "../../utils/concatWineAttributes";

// Typescript types
import { Wine } from "../../store/wine.interface";
import { useEffect } from "react";

type ApiError = {
  data: {
    detai: string;
  };
  status: number;
};

const WinesList = () => {
  const { data, error, isLoading } = useGetAllWinesQuery();

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
      // onRefresh={fetchWines}
      refreshing={isLoading}
    />
  );

  const loadingView = (
    <Center flex="1">
      <Text>Loading...</Text>
    </Center>
  );

  if (error) {
    if ("status" in error) {
      if ("data" in error) {
        return (
          <View width="100%" flex="1">
            <Center flex="1">
              <ErrorComponent header={String(error.status)} body={JSON.stringify(error.data)} />
            </Center>
          </View>
        );
      }
    }
  } else {
    return (
      <View width="100%" flex="1">
        {isLoading && loadingView}
        {data && dataView}
      </View>
    );
  }
};

export default WinesList;
