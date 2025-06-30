import { Meal } from '../types';
import { 
  Button, 
  Card, 
  CardBody, 
  Heading, 
  Image, 
  Text,
  CardFooter, 
  SimpleGrid} 
  from '@chakra-ui/react';
import MealCard from './MealCard';

type Props = {
  meals: Meal[];
  loading: boolean;
}

function MainContent({meals, loading}: Props) {
  console.log(meals, loading)
  return (
    <SimpleGrid columns={[2, null, 3]} spacing="20px">
    {meals.map(m => (
      <MealCard></MealCard>
    ))}
</SimpleGrid>
  )
}

export default MainContent