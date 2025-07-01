import { Button, Container, Input, InputGroup
  , InputLeftElement, 
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form';
import { FaSearch } from "react-icons/fa";
import { SearchForm } from '../types';


type Props = {
  onSubmit: (data: SearchForm) => void;
}

function Header({ onSubmit }: Props) {
  const { register, formState, handleSubmit } = useForm<SearchForm>();
  return (
  <Container mt="1" maxW="3xl">
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputGroup>
        <InputLeftElement pointerEvents='none'>
        <FaSearch color="gray"></FaSearch>
        </InputLeftElement>
        <Input mr="2"
        focusBorderColor={!!formState.errors.search ? 'red.500' : 'orange.400'}
        isInvalid={!!formState.errors.search}
         {...register('search', {required: true})} type='tel' placeholder="Intenta con 'chickens' o 'beans'..." />
         <Button type="submit" bgColor="orange.400" color="white">Buscar</Button>
      </InputGroup>
    </form>
  </Container>
  )
}

export default Header