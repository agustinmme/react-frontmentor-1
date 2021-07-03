import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
  Button,IconButton,
  useDisclosure
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
function DrawSelect({nameButton,disButton}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        onClick={onOpen}
        w={"s"}
        disabled={disButton}
        colorScheme={disButton?"gris":"secon"}
        color="white"
        rounded={"full"}
        _hover={{
          bg: disButton?"gris.100":"prim.100",
        }}
      >
        {nameButton}
      </Button>
      <Drawer size={"md"} placement={"bottom"} onClose={onClose} isOpen={isOpen} >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Hola <IconButton icon={<CloseIcon/>}size={'sm'}onClick={onClose}/></DrawerHeader> 
          
          <DrawerBody>
            <p>Proximamente update...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
export default DrawSelect;
