import { HStack, Image, VStack, Text, Heading, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import db from "../db";
function Home() {
  return (
    <VStack>
      <VStack w="1200px" color="whiteAlpha.900">
        <VStack m="170px 0px" p="10px" bgColor="#0009b92a" borderRadius="40px">
          {/* ------------------<Heading>Abel Moreno - Full Stack Developer</Heading>------------------------- */}
          <HStack position="relative">
            <Box
              borderRadius="45%"
              bgColor="#5e32af50"
              position="absolute"
              left="0px"
              zIndex="5"
              m="20px"
              w="300px"
              h="300px"
            ></Box>
            <Image
              m="20px"
              src="https://199-ph.s3.sa-east-1.amazonaws.com/foto.png"
              alt="abel moreno"
              w="300px"
              objectFit="cover"
            />
            <VStack>
              <Heading>Abel Moreno - Full Stack Developer</Heading>
              <Text w="80%" textAlign="start" fontSize="18px">
                Bienvenido a mi sitio web, aqui podras ver mis proyectos,
                habilidades, experimentos y mas.
              </Text>
              <Text w="80%" textAlign="start" fontSize="18px">
                Estaría encantado de conocerte, abajo están mis datos de
                contacto. Gracias por tu tiempo.
              </Text>
              <Text w="80%" textAlign="start" fontSize="21px">
                E-mail: abelyamilmorenomp@gmail.com
              </Text>
              <Text w="80%" textAlign="start" fontSize="21px">
                Whatsapp: +54 9 3513851480
              </Text>
            </VStack>
          </HStack>
          {/* ------------------------ Barra animada de tecnologias/iconos/imagenes AGREGAR MAS ICONOS--------------------------- */}
          <HStack>
            <HStack w="900px" h="120px" bgColor="blackAlpha.500">
              {db[3].map((db) => (
                <Image
                  src={db.img}
                  w="0px"
                  flexGrow="1"
                  objectFit="cover"
                  opacity=".8"
                  transition=".5s ease"
                  _hover={{
                    backgroundColor: "#5b5e967e",
                    borderRadius: "15px",
                    cursor: "crosshair",
                    width: "100px",
                    opacity: "1",
                    filter: "contrast(120%)",
                  }}
                />
              ))}
            </HStack>
          </HStack>
        </VStack>
        {/* ------------------------------- Seecion cards -------------------------------*/}
        <HStack m="30px 0px">
          <Heading>En mas detalle</Heading>
        </HStack>

        <HStack m="50px 0px" justify="space-between" gap="10px">
          {db[4].map((db) => (
            <VStack
              p="10px"
              bgColor="#0009b92a"
              h="200px"
              w="30%"
              transition=".5s ease"
              _hover={{
                backgroundColor: "#5b5e967e",
                borderRadius: "15px",
                cursor: "pointer",
                width: "40%",
                opacity: "1",
                filter: "contrast(120%)",
              }}
            >
              <Link to={db.src}>
                <Heading>{db.name}</Heading>
                <Text m="10px" fontSize="18px" w="350px">
                  {db.description}
                </Text>
              </Link>
            </VStack>
          ))}
        </HStack>
      </VStack>
    </VStack>
  );
}

export default Home;
