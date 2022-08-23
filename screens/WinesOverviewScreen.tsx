// Native Base
import { Center, Button, Text, FlatList } from "native-base";

// Hooks
import useFetch from "../hooks/use-fetch";

// Components
import Card from "../components/UI/Card";

const WinesOverviewScreen = () => {

    const { loading, error, data, fetchData} = useFetch()

    const fetchDataHandler = () => {
        fetchData("https://catfact.ninja/fact")
    }

    return (
        <Center flex="1">
            <Card />
            <Button onPress={fetchDataHandler}></Button>
            <Text>{loading ? "Loading" : "NOT loading"}</Text>
            {data ? <Text>{String(data)}</Text> : "No data"}
        </Center>
    )
}

export default WinesOverviewScreen