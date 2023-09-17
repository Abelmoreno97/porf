import { VStack, Heading, Text, HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import db from "../db";
function Proyects() {
  return (
    <VStack w="1200px" position="relative" color="white">
      <Heading m="75px 0px">Proyects component</Heading>;
      <Text w="350px">
        Proyectos con una mirada completa e integral y propuesta al usuario
      </Text>
      <HStack m="50px 0px" justify="space-around" gap="10px">
        {db[0].map((db) => (
          <VStack
            p="10px"
            bgColor="#0009b92a"
            h="320px"
            w="320px"
            transition=".5s ease"
            _hover={{
              backgroundColor: "#5b5e967e",
              borderRadius: "15px",
              cursor: "pointer",
              transform: "scale(1.2, 1.2)",
              opacity: "1",
              filter: "contrast(120%)",
            }}
          >
            <Heading>{db.name}</Heading>
            <Text m="10px" fontSize="18px" w="350px">
              {db.description}
            </Text>
          </VStack>
        ))}
      </HStack>
    </VStack>
  );
}

export default Proyects;
