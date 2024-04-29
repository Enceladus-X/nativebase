import {
  Center,
  Container,
  Divider,
  Heading,
  HStack,
  ScrollView,
  Switch,
  VStack,
} from "native-base";
import React, { useEffect } from "react";
import { Text, View } from "react-native";

function SettingPage() {
  useEffect(() => {}, []);

  const SettingContents = () => {
    return <ScrollView showsVerticalScrollIndicator={false}>
      <VStack space={2.5} mt ="4" px ="8">
        <Heading size ="md" >
          Settings
        </Heading>
      </VStack>
    </ScrollView>;
  };

  return <SettingContents />;
}

export default SettingPage;
