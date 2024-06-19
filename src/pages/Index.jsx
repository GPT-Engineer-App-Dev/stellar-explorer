import { Container, Text, VStack, Box, Heading, Image } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box
      bgGradient="linear(to-r, teal.500, green.500)"
      bgSize="cover"
      bgPosition="center"
      minHeight="100vh"
      color="white"
    >
      <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <VStack spacing={4}>
          <Image src="/images/black-hole.jpg" alt="Black Hole" borderRadius="md" boxShadow="lg" />
          <Heading as="h1" size="2xl">Explore the Universe</Heading>
          <Text fontSize="lg" textAlign="center">
            Welcome to our space-themed website. Here, you can learn all about the wonders of the universe, from the smallest particles to the largest galaxies. Join us on a journey through space and time!
          </Text>
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;