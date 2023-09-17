import { HStack, Text, Image } from "@chakra-ui/react";
import foto from "./../assets/foto.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
function NavBar() {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      function handleScroll() {
        if (window.scrollY > 40) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

  return (
    <HStack
    color="whiteAlpha.900"
    fontSize="20px"
      bgColor={scrolled ? "purple.800" : "whiteAlpha.400"}
      position="fixed"
      zIndex="2"
      h="60px"
      w="1200px"
      justify="center"
      transition={".5s ease"}
      _hover={{ bgColor: "purple.800" }}

    >
        <HStack w="1000px" justify="space-around" >
      <Link to="/">
        <HStack
          transition={".5s ease"}
          _hover={{ cursor: "pointer", transform: "scale(1.2, 1.2)" }}
        >
          <Image src={foto} alt="abel moreno" w="50px" />
          <Text>Ir al inicio</Text>
        </HStack>
      </Link>
      <Link to="/proyects">
        <HStack
          transition={".5s ease"}
          _hover={{ cursor: "pointer", transform: "scale(1.2, 1.2)" }}
        >
          <Text>Proyectos</Text>
        </HStack>
      </Link>
      <Link to="/cert">
        <HStack
          transition={".5s ease"}
          _hover={{ cursor: "pointer", transform: "scale(1.2, 1.2)" }}
        >
          <Text>Certificados</Text>
        </HStack>
      </Link>
      <Link to="/labs">
        <HStack
          transition={".5s ease"}
          _hover={{ cursor: "pointer", transform: "scale(1.2, 1.2)" }}
        >
          <Text>LABS</Text>
        </HStack>
      </Link>
        </HStack>
    </HStack>
  );
}

export default NavBar;
