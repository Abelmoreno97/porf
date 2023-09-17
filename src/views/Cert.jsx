import { VStack, Heading, Text, HStack, Image} from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

function Cert() {
  return (
    <VStack w="1200px" position="relative" color="white">


      <Heading m="75px 0px">Cert component</Heading>;
      <Text w="350px">
        Certificados obtenidos en bootcamps, cursos y otras capacitaciones.
      </Text>
      <HStack m="50px 0px" justify="space-around" gap="10px">
          <VStack
            p="10px"
            bgColor="#0009b92a"
            h="320px"
            w="40%"
            transition=".5s ease"
            _hover={{
              backgroundColor: "#5b5e967e",
              borderRadius: "15px",
              cursor: "pointer",
              width: "60%",
              opacity: "1",
              filter: "contrast(120%)",
            }}
          >
            <Link to="/cert">
              <Heading>Certificados</Heading>
              <Text m="10px" fontSize="18px" w="350px">
                Certificados obtenidos en bootcamps, cursos y otras
                capacitaciones.
              </Text>
            </Link>
          </VStack>
          <VStack
            p="10px"
            bgColor="#0009b92a"
            h="320px"
            w="40%"
            transition=".5s ease"
            _hover={{
              backgroundColor: "#5b5e967e",
              borderRadius: "15px",
              cursor: "pointer",
              width: "60%",
              opacity: "1",
              filter: "contrast(120%)",
            }}
          >
            <Link to="/proyects">
              <Heading>Proyectos</Heading>
              <Text m="10px" fontSize="18px" w="350px">
                Proyectos con una mirada completa e integral y propuesta al
                usuario
              </Text>
            </Link>
          </VStack>
        </HStack>
        <HStack m="50px 0px" justify="space-around" gap="10px">
          <VStack
            p="10px"
            bgColor="#0009b92a"
            h="320px"
            w="40%"
            transition=".5s ease"
            _hover={{
              backgroundColor: "#5b5e967e",
              borderRadius: "15px",
              cursor: "pointer",
              width: "60%",
              opacity: "1",
              filter: "contrast(120%)",
            }}
          >
            <Link to="/cert">
              <Heading>Certificados</Heading>
              <Text m="10px" fontSize="18px" w="350px">
                Certificados obtenidos en bootcamps, cursos y otras
                capacitaciones.
              </Text>
            </Link>
          </VStack>
          <VStack
            p="10px"
            bgColor="#0009b92a"
            h="320px"
            w="40%"
            transition=".5s ease"
            _hover={{
              backgroundColor: "#5b5e967e",
              borderRadius: "15px",
              cursor: "pointer",
              width: "60%",
              opacity: "1",
              filter: "contrast(120%)",
            }}
          >
            <Link to="/proyects">
              <Heading>Proyectos</Heading>
              <Text m="10px" fontSize="18px" w="350px">
                Proyectos con una mirada completa e integral y propuesta al
                usuario
              </Text>
            </Link>
          </VStack>
        </HStack>
    </VStack>
  );
}

export default Cert;
