import { MaterialIcons } from "@expo/vector-icons";
import {
  Box,
  HStack,
  Icon,
  IconButton,
  StatusBar,
  Text,
  Button,
  Menu,
} from "native-base";
import React, { useEffect } from "react";
import { View } from "react-native";

const gotoChatPage = () => {
  navigation.navigate("ChatPage");
};

function AppBar_Home() {
  const gotoSettingPage = () => {
    navigation.navigate("SettingPage");
  };
  return (
    <>
      <StatusBar bg="#3700B3" barStyle="light-content" />
      <Box safeAreaTop bg={"#58af9b"} />
      <HStack
        bg="#58af9b"
        px="1"
        py="3"
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        maxW="350"
      >
        <HStack alignItems="center">
          <IconButton
            icon={
              <Icon
                size={"md"}
                as={MaterialIcons}
                name="menu"
                color={"white"}
                onPress={() => {
                  gotoSettingPage();
                }}
              />
            }
          />
          <Text color="white" fontSize="20" fontWeight="bold">
            Home
          </Text>
        </HStack>
      </HStack>
    </>
  );
}

function HomePage() {
  useEffect(() => {}, []);

  return (
    <View style={{ flex: 1 }}>
      <AppBar_Home />
      <View
        style={{ flex: 1, alignContent: "center", justifyContent: "center" }}
      >
        <Button onPress={gotoChatPage}>Chat page</Button>
      </View>
    </View>
  );
}

export default HomePage;
