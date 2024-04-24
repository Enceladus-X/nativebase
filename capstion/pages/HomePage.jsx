import React, { useEffect } from "react";
import { Text, View } from "react-native";
import ButtonCustom from "../components/ButtonCustom";

function AppBar_Home() {
  return (
    <>
      <StatusBar bg="#3700B3" barStyle="light-content" />
      <Box safeAreaTop bg="violet.600" />
      <HStack
        bg="violet.800"
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
              <Icon size="sm" as={MaterialIcons} name="menu" color="white" />
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

  const gotoChatPage = () => {
    navigation.navigate("ChatPage");
  };

  return (
    <View style={{ flex: 1 }}>
      <AppBar_Home />
      <ButtonCustom
        onpress={() => {
          gotoChatPage();
        }}
        title="go to Chat Page"
      />
    </View>
  );
}

export default HomePage;
