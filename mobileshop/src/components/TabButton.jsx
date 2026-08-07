import {Pressable, StyleSheet, Text} from "react-native";

export function TabButton({title, active, isDark, onPress}) {
    return (
        <Pressable
            className={`flex-1 py-2 rounded-xl`}
            style={[
                active && [style.activeTab], {
                    backgroundColor: (active)
                        ? (isDark) ? "#42619a" : "#e8f6ff"
                        : null
                }
            ]}
            onPress={onPress}
        >
            <Text className={`self-center text-foreground`}
            >
                {title}
            </Text>
        </Pressable>
    );
}

const style = StyleSheet.create({

    activeTab: {
        shadowColor: "#656565",
        shadowOpacity: 0.08,
        shadowRadius: 10,
        elevation: 3,
    },

});

// #eef7ff