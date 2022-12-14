import React, { useState } from "react"; // TODO: (*)
import {
    View,
    Text,
    Image,
    StyleSheet,
    useWindowDimensions,
    ScrollView,
    TextInput,
} from "react-native";
import Logo from "../../assets/images/R2.png";
import CustomInput from "../components/CustomInput/CustomInput";
import CustomButton from "../components/CustomButton/CustomButton";
import { useForm, Controller } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";

const SignInScreen = () => {
    const { height } = useWindowDimensions();
    const navigation = useNavigation();
    const [userEmail, setUserEmail] = useState(null); // TODO: (*)
    // userEmail <== TODO: what user inputs on the email field.
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSignInPressed = (data) => {
        console.log(data);

        navigation.navigate("HomePage");
    };

    // -----------------------------------------------------------

    const getEmailsList = async (email) => {
        // TODO: (*)
        console.log("getEmailList");
        console.log(email);
        console.log("------------");

        const employeesEmail = [];
        fetch("https://localhost:8889/api/employees")
            .then((response) => response.json())
            .then(function (result) {
                //console.log('Result', result)
                for (var i = 0; i < result.length; i++) {
                    employeesEmail.push(result[i]["email"]);
                }
                console.log("Emails", employeesEmail);
            })
            .catch((error) => console.log("error", error));

        if (employeesEmail.includes(email) == true) {
            onSignInPressed();
        } else {
            console.log("It didn't get through.");
            console.log(CustomInput.name);
            return;
        }
    };

    // getEmailsList();

    // -----------------------------------------------------------

    // const verifyEmail = () => {
    //     if (CustomInput.name == employeesEmail) {

    //         // return {handleSubmit(onSignInPressed)}
    //     }
    // }

    // -----------------------------------------------------------

    return (
        <View style={styles.root}>
            <Image
                source={Logo}
                style={[styles.logo, { height: height * 0.3 }]}
                resizeMode="contain"
            />
            <CustomInput
                name="username"
                placeholder="Username"
                control={control}
                rules={{ required: "Username is required" }}
                onEmailChange={setUserEmail} // TODO: (*)
            />
            <CustomInput
                name="password"
                placeholder="Password"
                secureTextEntry
                control={control}
                rules={{
                    required: "Password is required",
                    minLength: {
                        value: 3,
                        message: "Password should be minimum 3 characters long",
                    },
                }}
            />
            <CustomButton text="Sign In" onPress={getEmailsList(userEmail)} />{" "}
            {/* TODO: (*) */}
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: "center",
        padding: 20,
    },

    logo: {
        width: "70%",
        maxWidth: 300,
        height: 100,
    },
});

export default SignInScreen;
