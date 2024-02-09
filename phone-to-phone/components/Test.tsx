import React from "react";
import { NativeBaseProvider, Box } from "native-base";
import { Input } from "native-base";

const Test = () => {
  return 
    <NativeBaseProvider>
    <Box alignItems="center">
      <Input mx="3" placeholder="Input" w="100%" />
    </Box>;
    </NativeBaseProvider>
};

export default Test;