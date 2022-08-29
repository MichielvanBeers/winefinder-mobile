// NativeBase
import { Text, FlatList, View } from "native-base";

// Hooks
import useFetch from "../../hooks/use-fetch";

// Components
import Card from "../UI/Card";

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
        subHeader={concatWineAttributes(item.grape, item.type)}
        body={concatWineAttributes(item.country, item.archived_date, item.price)}
      />
    );
  };

  return (
    <>
      <View width="100%">
        <Text>{loading ? <Text>Loading</Text> : null}</Text>
        {data ? (
          <FlatList
            data={data}
            keyExtractor={(item: any) => item.id}
            renderItem={renderItem}
            onRefresh={fetchWines}
            refreshing={loading}
          />
        ) : (
          <Text>No data available</Text>
        )}
        {error ? <Text>{String(error)}</Text> : null}
      </View>
    </>
  );
};

export default WinesList;
