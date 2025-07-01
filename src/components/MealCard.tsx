import { Card, CardBody, Image, Button, Text, Heading, CardFooter } from '@chakra-ui/react'
import React from 'react'
import { Meal } from '../types'

type Props = {
    meal: Meal;
    openRecipe: () => void;
}

function MealCard({meal, openRecipe}: Props) {
  return (
    <Card boxShadow="lg">
  <CardBody>
    <Image
      src={meal.strMealThumb}
      borderRadius='lg'
    />
      <Heading size='md' color="orange.400">
        <Text mt="4">{meal.strMeal}</Text>
        </Heading>
  </CardBody>
      <CardFooter pt="0">
        <Button variant='solid' onClick={openRecipe} color='white' bgColor="orange.400">
          Ver Receta
        </Button>
      </CardFooter>
</Card>
  )
}

export default MealCard