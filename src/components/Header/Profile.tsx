import { Flex, Box, Avatar, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Lucas Delbel</Text>
          <Text color="gray.300" fontSize="small">
            lucdelbel@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Lucas Delbel"
        src="https://github.com/ldelbel.png"
      />
    </Flex>
  );
}
