import React, { useState } from 'react';
import { render } from 'react-dom';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'

export default class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource: null,
        }
    }

    // Get API - Inactive Elevators
    componentDidMount() {

        return fetch('https://rocketelevators-api.azurewebsites.net/api/Elevator')
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    isLoading: false,
                    dataSource: responseJson.inactive,
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {

        if (this.state.isLoading) {

            return (
                <View>
                    <ActivityIndicator />
                </View>
            )

        } else {

            let movies = this.state.dataSource.map((val, key) => {
                return <View key={key}>
                    <Text>{val.status}</Text>
                </View>

            });

            return (

                <View>
                    <Text style={{ fontSize: 24, alignSelf: 'center' }}>
                        <Text>Content Loaded</Text>
                    </Text>
                </View>
            );

        }
    }
}