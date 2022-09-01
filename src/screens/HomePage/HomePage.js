import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import { View, Text, StyleSheet, SafeAreaView, FlatList, StatusBar } from 'react-native'

export default function HomePage() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const url = "https://localhost:8889/api/elevators/inactive";

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, [])

    return (
        <View style={styles.container}>
            {loading ? (<Text>Loading ...</Text>) : (
                data.map((elevators) => (
                    <View>
                        <Text>{elevators.id}</Text>
                        <Text>{elevators.elevator_status}</Text>
                    </View>
                ))
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});








// const DATA = fetch('https://localhost:8889/api/elevators/inactive')

























// -----------------------------------------------------------------------------------------------------------
// export default class HomePage extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             isLoading: true,
//             dataSource: null,
//         }
//     }

//     // Get API - Inactive Elevators
//     componentDidMount() {

//         return fetch('https://localhost:8889/api/elevators/inactive')
//             .then((response) => response.json())
//             .then((responseJson) => {

//                 console.log(responseJson)
//                 this.setState({
//                     isLoading: false,
//                     dataSource: responseJson.elevators,
//                 })
//             })
//             .catch((error) => {
//                 console.log(error)
//             })
//     }

//     render() {

//         if (this.state.isLoading) {

//             return (
//                 <View>
//                     <ActivityIndicator />
//                 </View>
//             )

//         } else {

//             let elevators = this.state.dataSource.map((val, key) => {
//                 return <View key={key}>
//                     <Text>{val.id}</Text>
//                 </View>

//             });

//             return (

//                 <View>
//                     {elevators}
//                 </View>
//             );

//         }
//     }
// }



// [
//     {
//         id: '1',
//         elevator_status: 'nactive',
//         serial_number: 'Y-7792131-K',
//         certificate: '2171187',
//     },
//     {
//         id: '2',
//         elevator_status: 'inactive',
//         serial_number: 'Y-7792131-K',
//         certificate: '2171187',
//     },
//     {
//         id: '3',
//         elevator_status: 'inactive',
//         serial_number: 'Y-7792131-K',
//         certificate: '2171187',
//     },
//     {
//         id: '4',
//         elevator_status: 'inactive',
//         serial_number: 'Y-7792131-K',
//         certificate: '2171187',
//     },
//     {
//         id: '5',
//         elevator_status: 'inactive',
//         serial_number: 'Y-7792131-K',
//         certificate: '2171187',
//     },
//     {
//         id: '6',
//         elevator_status: 'inactive',
//         serial_number: 'Y-7792131-K',
//         certificate: '2171187',
//     },
// ];