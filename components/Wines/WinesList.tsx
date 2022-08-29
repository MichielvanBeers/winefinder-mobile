// NativeBase
import { Text, FlatList, View, Center } from "native-base";

// Hooks
import useFetch from "../../hooks/use-fetch";

// Components
import Card from "../UI/Card";
import ErrorComponent from "../Error/ErrorComponent";

// Utils
import concatWineAttributes from "../../utils/concatWineAttributes";

// Typescript types
import { Wine } from "../../store/wines";
import { useEffect } from "react";

const WinesList = () => {
  const { loading, error, data, fetchData } = useFetch();

  const fetchWines = () => {
    fetchData("http://192.168.1.184:9000/wines/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token 70574d887b0644a0936e07ddb1869762318b8e25",
        // Authorization: "Token ",
      },
    });
  };

  useEffect(() => {
    fetchWines();
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
      onRefresh={fetchWines}
      refreshing={loading}
    />
  );
  const errorView = (
    <Center flex="1">
      <ErrorComponent message={error} />
    </Center>
  );
  const loadingView = (
    <Center flex="1">
      <Text>Loading...</Text>
    </Center>
  );

  return <View width="100%" flex="1">
    {error && errorView}
    {loading && loadingView}
    {data && dataView}
  </View>;
};

export default WinesList;
