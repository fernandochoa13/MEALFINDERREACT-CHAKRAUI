import { ModalBody, ModalCloseButton, ModalHeader, Image, Heading, Text } from "@chakra-ui/react"
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
        <Heading mt="4" mb="4" size="md">Ingredientes</Heading>
        <Text whiteSpace="pre-line">{data.strInstructions}</Text>
    </ModalBody>
    
     </>
  )
}

export default RecipeModalContent