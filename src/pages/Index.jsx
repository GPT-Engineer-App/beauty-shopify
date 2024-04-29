import { Box, Flex, Text, Button, Image, Grid, GridItem, useColorModeValue, IconButton } from "@chakra-ui/react";
import { FaShoppingCart, FaSearch, FaHeart, FaRegHeart } from "react-icons/fa";

const Index = () => {
  const products = [
    {
      id: 1,
      name: "Lipstick",
      price: "$20",
      image: "https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsaXBzdGlja3xlbnwwfHx8fDE3MTQ0MDUxMjN8MA&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      id: 2,
      name: "Eyeshadow Palette",
      price: "$35",
      image: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxleWVzaGFkb3clMjBwYWxldHRlfGVufDB8fHx8MTcxNDQwNTEyM3ww&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      id: 3,
      name: "Foundation",
      price: "$25",
      image: "https://images.unsplash.com/photo-1557205465-f3762edea6d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmb3VuZGF0aW9uJTIwbWFrZXVwfGVufDB8fHx8MTcxNDQwNTEyM3ww&ixlib=rb-4.0.3&q=80&w=1080",
    },
    {
      id: 4,
      name: "Mascara",
      price: "$15",
      image: "https://images.unsplash.com/photo-1512207159096-c2c91b1dfadd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYXNjYXJhfGVufDB8fHx8MTcxNDQwNTEyNHww&ixlib=rb-4.0.3&q=80&w=1080",
    },
  ];

  const bg = useColorModeValue("gray.50", "gray.800");
  const color = useColorModeValue("gray.800", "white");

  return (
    <Box p={5} bg={bg} color={color}>
      <Flex justifyContent="space-between" alignItems="center" mb={10}>
        <Text fontSize="2xl" fontWeight="bold">
          Makeup Store
        </Text>
        <IconButton icon={<FaSearch />} aria-label="Search" />
      </Flex>
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        {products.map((product) => (
          <GridItem key={product.id} w="100%" boxShadow="md" rounded="lg" overflow="hidden">
            <Image src={product.image} alt={product.name} boxSize="100%" objectFit="cover" />
            <Box p={5}>
              <Text fontWeight="bold" fontSize="lg">
                {product.name}
              </Text>
              <Text>{product.price}</Text>
              <Flex alignItems="center" justifyContent="space-between" mt={3}>
                <Button leftIcon={<FaShoppingCart />} colorScheme="pink" variant="solid">
                  Add to Cart
                </Button>
                <IconButton icon={<FaRegHeart />} aria-label="Add to Wishlist" variant="ghost" colorScheme="pink" />
              </Flex>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default Index;
