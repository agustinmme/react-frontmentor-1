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
  Text,
} from "@chakra-ui/react";
function ModalFin({ nameButton, disButton }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
     
      <Button size={"lg"}
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
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent  borderRadius={10}>
          <ModalBody  borderRadius={10} bg="white">
            <Stack mt="20" spacing={7} boxSize="sm" align={"center"}>
              <Image ml={2} src={"./images/icon-check.svg"} />
              <Heading size="md" color="black">
                Thanks for your support!
              </Heading>
              <Text color="tex" align={"center"}>
                Your pledge brings us one step closer to sharing Mastercraft
                Bamboo Monitor Riser worldwide. You will get an email once our
                campaign is completed.
              </Text>
              <Button
                size="lg"
                borderRadius={50}
                color="white"
                colorScheme="prim"
                _hover={{
                  bg: "secon.100",
                }}
                onClick={onClose}
              >
                Got it!
              </Button>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
export default ModalFin;
