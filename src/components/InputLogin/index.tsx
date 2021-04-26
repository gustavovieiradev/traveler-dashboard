import { Box, Input } from "@chakra-ui/react";

export function InputLogin() {
  return (
    <Box height="72px" w="416px" borderWidth={1} borderColor="gray.300" bg="white" borderTopRadius={10} p="24px">
      <Input variant="unstyled" placeholder="E-mail" _placeholder={{ color: 'gray.500' }} color="gray.500" />
    </Box> 
  )
}