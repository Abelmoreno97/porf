import { HStack, Image, VStack, Text, Heading } from "@chakra-ui/react";
import foto from "./../assets/foto.png"
import { Link } from "react-router-dom";

function Home() {
  return (
    <VStack>
    <VStack w="1200px" color="whiteAlpha.700" >
        <HStack m="250px 0px" p="10px" bgColor="#242fff63" >
            <Image m="20px" src={foto} alt="abel moreno" w="30%" objectFit="cover" />
            <VStack>
            <Heading>Abel Moreno - Full Stack Developer</Heading>
            <Text w="70%">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid, magnam eos porro hic excepturi numquam veritatis. Suscipit aliquid et unde velit iste doloremque magnam dolor, error voluptatibus necessitatibus aperiam porro!</Text>
            <HStack w="100%" h="100px" bgColor="blackAlpha.500"></HStack>
            </VStack>
        </HStack>
        
        <HStack m="50px 0px">
            <Heading>En mas detalle</Heading>
        </HStack>
       
        <HStack m="50px 0px" justify="space-between" gap="10px">
            <VStack p="10px" bgColor="#242fff63" h="200px" w="30%" >
                <Link to="/exp">
                <Heading>Experiencias</Heading>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore distinctio natus rerum s delectus consequuntur voluptatibus nesciunt aliquam!</Text>
                </Link>
            </VStack>
            <VStack p="10px" bgColor="#242fff63" h="200px" w="300px" >
                <Link to="/proyects">
                <Heading>Proyectos</Heading>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore distinctio natus rerum s delectus consequuntur voluptatibus nesciunt aliquam!</Text>
                </Link>
            </VStack>
            <VStack p="10px" bgColor="#242fff63" h="200px" w="300px" >
                <Link to="/LABS">
                <Heading>LABS</Heading>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore distinctio natus rerum s delectus consequuntur voluptatibus nesciunt aliquam!</Text>
                </Link>
            </VStack>
        </HStack>
    <HStack justify="center" w="100%" h="200px" >
            <Heading>FOOTER</Heading>
        </HStack>
    </VStack>
    </VStack>
  );
}

export default Home;
