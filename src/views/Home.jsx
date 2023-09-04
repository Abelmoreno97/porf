import { HStack, Image, VStack, Text, Heading, Box } from "@chakra-ui/react";
import foto from "./../assets/foto.png"
import { Link } from "react-router-dom";
import asp from "./../assets/asp.net.logo.png"
import csharp from "./../assets/Csharp_Logo.png"
import sqlserver from './../assets/mssql-server.png'
import js from './../assets/Te1.png'
import node from './../assets/Te2.png'
import sql from './../assets/Te3.png'
import html from './../assets/Te7.png'
import react from './../assets/Te8.png'
import postgre from './../assets/Te9.png'
import git from './../assets/Te10.png'
function Home() {
  return (
    <VStack>
    <VStack w="1200px" color="whiteAlpha.700" >
        <VStack m="250px 0px" p="10px" bgColor="#0009b92a" borderRadius="40px">
        <HStack position="relative" >
            <Box borderRadius="45%" bgColor="#5e32af50" position="absolute" left="0px" zIndex='5' m="20px" w="300px" h="300px">
                
            </Box>
            <Image m="20px" src={foto} alt="abel moreno" w="300px" objectFit="cover" />
            <VStack>
            <Heading>Abel Moreno - Full Stack Developer</Heading>
            <Text w="70%">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid, magnam eos porro hic excepturi numquam veritatis. Suscipit aliquid et unde velit iste doloremque magnam dolor, error voluptatibus necessitatibus aperiam porro!</Text>
            
            </VStack>
        </HStack>
<HStack>
<HStack w="400px" h="120px" bgColor="blackAlpha.500">
                <Image src={asp} w="0px" flexGrow="1" objectFit="cover" opacity=".8" transition=".5s ease" _hover={{backgroundColor:'#5b5e967e',borderRadius:'15px', cursor:'crosshair',width:'100px',opacity:'1',filter:'contrast(120%)'}}/>
                <Image src={csharp} w="0px" flexGrow="1" objectFit="cover" opacity=".8" transition=".5s ease" _hover={{backgroundColor:'#5b5e967e',borderRadius:'15px', cursor:'crosshair',width:'100px',opacity:'1',filter:'contrast(120%)'}}/>
                <Image src={sql} w="0px" flexGrow="1" objectFit="cover" opacity=".8" transition=".5s ease" _hover={{backgroundColor:'#5b5e967e',borderRadius:'15px', cursor:'crosshair',width:'100px',opacity:'1',filter:'contrast(120%)'}}/>
                <Image src={sqlserver} w="0px" flexGrow="1" objectFit="cover" opacity=".8" transition=".5s ease" _hover={{backgroundColor:'#5b5e967e',borderRadius:'15px', cursor:'crosshair',width:'100px',opacity:'1',filter:'contrast(120%)'}}/>
                <Image src={postgre} w="0px" flexGrow="1" objectFit="cover" opacity=".8" transition=".5s ease" _hover={{backgroundColor:'#5b5e967e',borderRadius:'15px', cursor:'crosshair',width:'100px',opacity:'1',filter:'contrast(120%)'}}/>
                
            </HStack>
            <HStack w="400px" h="120px" bgColor="blackAlpha.500">
            <Image src={js} w="0px" flexGrow="1" objectFit="cover" opacity=".8" transition=".5s ease" _hover={{backgroundColor:'#5b5e967e',borderRadius:'15px', cursor:'crosshair',width:'100px',opacity:'1',filter:'contrast(120%)'}}/>
                <Image src={react} w="0px" flexGrow="1" objectFit="cover" opacity=".8" transition=".5s ease" _hover={{backgroundColor:'#5b5e967e',borderRadius:'15px', cursor:'crosshair',width:'100px',opacity:'1',filter:'contrast(120%)'}}/>
                <Image src={node} w="0px" flexGrow="1" objectFit="cover" opacity=".8" transition=".5s ease" _hover={{backgroundColor:'#5b5e967e',borderRadius:'15px', cursor:'crosshair',width:'100px',opacity:'1',filter:'contrast(120%)'}}/>
                <Image src={git} w="0px" flexGrow="1" objectFit="cover" opacity=".8" transition=".5s ease" _hover={{backgroundColor:'#5b5e967e',borderRadius:'15px', cursor:'crosshair',width:'100px',opacity:'1',filter:'contrast(120%)'}}/>
                <Image src={html} w="0px" flexGrow="1" objectFit="cover" opacity=".8" transition=".5s ease" _hover={{backgroundColor:'#5b5e967e',borderRadius:'15px', cursor:'crosshair',width:'100px',opacity:'1',filter:'contrast(120%)'}}/>
            
            </HStack>
</HStack>
        </VStack>
        
        
        <HStack m="50px 0px">
            <Heading>En mas detalle</Heading>
        </HStack>
       
        <HStack m="50px 0px" justify="space-between" gap="10px">
            <VStack p="10px" bgColor="#0009b92a" h="200px" w="30%" >
                <Link to="/exp">
                <Heading>Experiencias</Heading>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore distinctio natus rerum s delectus consequuntur voluptatibus nesciunt aliquam!</Text>
                </Link>
            </VStack>
            <VStack p="10px" bgColor="#0009b92a" h="200px" w="300px" >
                <Link to="/proyects">
                <Heading>Proyectos</Heading>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore distinctio natus rerum s delectus consequuntur voluptatibus nesciunt aliquam!</Text>
                </Link>
            </VStack>
            <VStack p="10px" bgColor="#0009b92a" h="200px" w="300px" >
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
