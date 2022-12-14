import { View, Text, TextInput, StyleSheet } from "react-native";
import { Controller } from "react-hook-form";

const CustomInput = ({
    control,
    name,
    rules = {},
    onEmailChange, // TODO: (*) = setUserEmail
    placeholder,
    secureTextEntry,
}) => {
    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({
                field: { value, onChange, onBlur },
                fieldState: { error },
            }) => (
                <>
                    <View
                        style={[
                            styles.container,
                            { borderColor: error ? "red" : "#e8e8e8" },
                        ]}
                    >
                        <TextInput
                            value={value}
                            onChangeText={(value) => onEmailChange(value)} // TODO: (*)
                            onBlur={onBlur}
                            placeholder={[placeholder]}
                            style={styles.input}
                            secureTextEntry={secureTextEntry}
                        />
                    </View>
                    {error && (
                        <Text style={{ color: "red", alignSelf: "stretch" }}>
                            {error.message || "Error"}
                        </Text>
                    )}
                </>
            )}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        width: "100%",

        borderColor: "#e8e8e8",
        borderWidth: 1,
        borderRadius: 5,

        padding: 10,
        marginVertical: 10,
    },
    input: {},
});

export default CustomInput;
