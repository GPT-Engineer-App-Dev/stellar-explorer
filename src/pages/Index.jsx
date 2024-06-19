import { Container, Text, VStack, Box, Heading, Image } from "@chakra-ui/react";
import NasaLogo from "/images/nasa-logo.svg";
import SpaceXLogo from "/images/spacex-logo.svg";
import SpaceImage from "/images/space-image.jpg";
import EsaLogo from "/images/esa-logo.svg";
import RoscosmosLogo from "/images/roscosmos-logo.svg";
import IsroLogo from "/images/isro-logo.svg";
import JaxaLogo from "/images/jaxa-logo.svg";

const Index = () => {
  return (
    <Box
      bgGradient="linear(to-r, teal.500, green.500)"
      bgSize="cover"
      bgPosition="center"
      minHeight="100vh"
      color="white"
      overflowY="auto"
    >
      <Container centerContent maxW="container.md" py={10}>
        <VStack spacing={4}>
          <Image src={NasaLogo} alt="NASA Logo" boxSize="100px" />
          <Image src={SpaceXLogo} alt="SpaceX Logo" boxSize="100px" />
          <Image src="/images/black-hole.jpg" alt="Black Hole" borderRadius="md" boxShadow="lg" />
          <Image src={SpaceImage} alt="Space Scene" borderRadius="md" boxShadow="lg" />
          <Heading as="h1" size="2xl">Explore the Universe</Heading>
          <Text fontSize="lg" textAlign="center">
            Welcome to our space-themed website. Here, you can learn all about the wonders of the universe, from the smallest particles to the largest galaxies. Join us on a journey through space and time!
          </Text>
        </VStack>
        <Box mt={10} p={5} bg="gray.700" borderRadius="md" boxShadow="lg">
          <Heading as="h2" size="xl" textAlign="center" mb={6}>Our Partners</Heading>
          <VStack spacing={4}>
            <Image src={EsaLogo} alt="ESA Logo" boxSize="100px" />
            <Image src={RoscosmosLogo} alt="Roscosmos Logo" boxSize="100px" />
            <Image src={IsroLogo} alt="ISRO Logo" boxSize="100px" />
            <Image src={JaxaLogo} alt="JAXA Logo" boxSize="100px" />
          </VStack>
        </Box>
      </Container>
    </Box>
  );
};

export default Index;