import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Button,
  useDisclosure,
  Image,
  Stack,
  Heading,
  Flex,
  Spacer,
  ModalHeader,Text
} from "@chakra-ui/react";
import ProductCardInput from '../about/ProductCardInput'
function ModalFin({ nameButton, disButton }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        size={"lg"}
        onClick={onOpen}
        w={"s"}
        disabled={disButton}
        colorScheme={disButton ? "gris" : "prim"}
        color="white"
        rounded={"full"}
        _hover={{
          bg: disButton ? "gris.100" : "secon.100",
        }}
      >
        {nameButton}
      </Button>
      <Modal size="4xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent borderRadius={10}>
          <ModalBody align={"center"} borderRadius={10} bg="white">
            <ModalHeader>
              <Flex>
                <Heading size="lg" color="black">
                  Back this project
                </Heading>
                <Spacer />
                <Image
                  borderRadius={50}
                  p={5}
                  mt={-2}
                  src={"./images/icon-close-modal.svg"}
                  onClick={onClose}
                  _hover={{ bg: "#ebedf0" }}
                  _active={{
                    bg: "#dddfe2",
                    transform: "scale(0.98)",
                    borderColor: "#bec3c9",
                  }}
                  _focus={{
                    boxShadow:
                      "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
                  }}
                />
              </Flex>
            </ModalHeader>
            <Stack>
            <Text color="tex" align={"center"} pl={"10"} pr={"10"}>
                Your pledge brings us one step closer to sharing Mastercraft
                Bamboo Monitor Riser worldwide. You will get an email once our
                campaign is completed.
              </Text>
            <ProductCardInput onClosed={onClose}/>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
export default ModalFin;
