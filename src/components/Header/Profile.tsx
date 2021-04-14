import { Flex, Box, Avatar, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
        
    <Box mr="4" textAlign="right">
      <Text>Lucas Delbel</Text>
      <Text color="gray.300" fontSize="small">
        lucdelbel@gmail.com
      </Text>
    </Box>

    <Avatar size="md" name="Lucas Delbel" src="https://github.com/ldelbel.png"  />
  </Flex>
  )
}