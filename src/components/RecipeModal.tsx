import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import RecipeModalSkeleton from './RecipeModalSkeleton';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  loading: boolean;
}

function RecipeModal({isOpen, onClose, loading}: Props) {
    
  return (
    <>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <RecipeModalSkeleton />
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
  

export default RecipeModal