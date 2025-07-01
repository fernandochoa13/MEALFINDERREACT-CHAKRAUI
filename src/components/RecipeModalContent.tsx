import { ModalBody, ModalCloseButton, ModalHeader, Image } from "@chakra-ui/react"
import { MealDetails } from "../types"

type Props = {
    data: MealDetails
}

function RecipeModalContent({ data }: Props) {
  return (
    <>
    <ModalHeader>{data.strMeal}</ModalHeader>
    <ModalCloseButton />
    <ModalBody>
        <Image alt={data.strMeal} width="100%" borderRadius="lg" src={data.strMealThumb}/>
    </ModalBody>
    
     </>
  )
}

export default RecipeModalContent