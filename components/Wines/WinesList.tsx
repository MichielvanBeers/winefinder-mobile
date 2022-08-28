// React Native
import { ListRenderItem } from "react-native";

// NativeBase
import { Button, Text, FlatList } from "native-base";

// Hooks
import useFetch from "../../hooks/use-fetch";

// Components
import Card from "../UI/Card";

// Typescript types
import { Wine } from "../../store/wines";

const WinesList = () => {
  const { loading, error, data, fetchData } = useFetch();

  const fetchDataHandler = () => {
    fetchData("http://192.168.1.184:9000/wines/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token 70574d887b0644a0936e07ddb1869762318b8e25",
      },
    });
  };

  const renderItem = ({ item }: { item: Wine }) => {
    return <Card header={item.name} subHeader={item.year} body={item.price} />;
  };

  console.log(data);

  return (
    <>
      <Text>{loading ? <Text>Loading</Text> : <Text>NOT loading</Text>}</Text>
      <Button onPress={fetchDataHandler}>Load data</Button>
      {data ? (
        <FlatList
          data={data}
          keyExtractor={(item: any) => item.id}
          renderItem={renderItem}
        />
      ) : (
        <Text>No data available</Text>
      )}
      {error ? <Text>{String(error)}</Text> : null}
    </>
  );
};

export default WinesList;
