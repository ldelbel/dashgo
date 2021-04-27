import { Flex, Input, Icon } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";
import { useRef } from 'react';

// controlled and uncontrolled components (useState vs useRef)
// imperative and declarative programming


export function SearchBox() {

  const searchInputRef = useRef<HTMLInputElement>(null)

  return (
    <Flex
      as="label"
      flex="1"
      py="4"
      px="8"
      ml="6"
      maxWidth={400}
      alignSelf="center"
      color="gray.200"
      position="relative"
      bg="gray.800"
      borderRadius="full"
      alignItems="center"
    >
      <Input
        color="gray.50"
        variant="unstyled"
        px="4"
        mr="4"
        placeholder="Search"
        _placeholder={{
          color: "gray.400",
        }}
        ref={searchInputRef}
      />

      <Icon as={RiSearchLine} fontSize={20} />
    </Flex>
  );
}
