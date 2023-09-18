import { VStack, Heading, Text, HStack, Image, SimpleGrid} from "@chakra-ui/react";
import db from "../db";
import { Link } from "react-router-dom";

function Cert() {
  return (
    <VStack w="1200px" position="relative" color="white">


      <Heading m="75px 0px">Cert component</Heading>;
      <Text w="350px">
        Certificados obtenidos en bootcamps, cursos y otras capacitaciones.
      </Text>
      <HStack m="50px 0px" justify="center">
      <SimpleGrid columns={2} spacing={10}>
      {db[1].map((db) => (
          <VStack
          justify="space-around"
            p="10px"
            bgColor="#0009b92a"
            h="450px"
            w="330px"
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
            <HStack w="250px" h="200px" justify="center"><Image src={db.img} alt={db.name} /></HStack>
            
            <Text m="10px" fontSize="18px" w="350px">
              {db.description}
            </Text>
          </VStack>
        ))}
      </SimpleGrid>
        </HStack>
    </VStack>
  );
}

export default Cert;
