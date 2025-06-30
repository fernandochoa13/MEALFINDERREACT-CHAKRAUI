import { Heading, Link, SkeletonText, VStack } from '@chakra-ui/react';
import { Category } from '../types'

type Props = {
  categories: Category[];
  loading: boolean;
  selectedCategory: Category;
  setSelectedCategory: (category: Category) => void;
}

const selectedProps = {
  bgColor: 'orange.400',
  color:"white",
  fontWeight: 'bold',
  _hover: {
    bgColor: 'orange.500'
  }

}

function SideNav({categories , loading, selectedCategory, setSelectedCategory}: Props) {
  console.log(loading)
  return loading ? <SkeletonText mt='1' noOfLines={8} spacing='6' skeletonHeight='2' /> : (
    <>
   <Heading color="orange.400" fontSize={12} fontWeight="bold" mb={4}>CATEGORÍAS</Heading>
   <VStack align='stretch'>
    {categories.map(c => 
    <Link onClick={() => setSelectedCategory(c)} px={2} py={1} borderRadius={5} _hover={{textDecoration:"none"}} {...(selectedCategory.strCategory == c.strCategory && selectedProps
      
    )} key={c.strCategory}>
    {c.strCategory}

    </Link>)}
   </VStack>
    </>
  )
}

export default SideNav