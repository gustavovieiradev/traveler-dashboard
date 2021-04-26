import { Box, Button, Flex, Heading, Icon, Image, Input, Text } from "@chakra-ui/react";
import { FiAlertCircle } from 'react-icons/fi';

export default function Login() {
  return (
    <Flex direction="row" w="100vw" h="100vh">
      <Flex flex="1">
        <Image src="/images/backlogin.png" />
      </Flex>
      <Flex flex="1" align="center" justify="center" bgColor="gray.200">
        <Flex direction="column" align="flex-start">
          <Heading fontWeight="600" mb="44px">Fazer login</Heading>
          <Box height="72px" w="416px" borderWidth={1} borderColor="gray.300" bg="white" borderTopRadius={10} p="24px">
            <Input variant="unstyled" placeholder="E-mail" _placeholder={{ color: 'gray.500' }} color="gray.500" />
          </Box>
          <Box height="72px" w="416px" borderEndWidth={1} borderLeftWidth={1} borderBottomWidth={1} borderColor="gray.300" bg="white" borderBottomRadius={10} p="24px">
            <Input variant="unstyled" placeholder="Password" _placeholder={{ color: 'gray.500' }} color="gray.500" type="password" />
          </Box>

          <Flex direction="row" justify="space-between" w="100%" mt="24px">
            <Flex align="center" cursor="pointer">
              <Box w="24px" h="24px" bg="white" borderRadius="8"></Box>
              <Text ml="14px" fontWeight="400" fontSize="16px" color="gray.500">Lembrar-me</Text>
            </Flex>
            <Box>
              <Text fontWeight="400" fontSize="16px" color="gray.500">Esqueci minha senha</Text>
            </Box>
          </Flex>

          <Button colorScheme="orange" w="100%" h="72px" borderRadius="10px" fontSize="18px" mt="32px">
            Acessar plataforma
          </Button>

          <Flex align="center" mt="80px">
            <Icon as={FiAlertCircle} fontSize="30" color="orange.500" />
            <Text ml="24px" color="gray.500">
              Acesso restrito à <br/> sócios e moderadores
            </Text>
          </Flex>

        </Flex>
      </Flex>
    </Flex>
  )
}