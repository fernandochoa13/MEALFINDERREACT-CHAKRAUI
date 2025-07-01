import { Grid, GridItem, useDisclosure } from "@chakra-ui/react"
import Header from "./components/Header"
import SideNav from "./components/SideNav"
import MainContent from "./components/MainContent"
import { useState } from "react"
import { Category, Meal, MealDetails, SearchForm } from "./types"
import useHttpData from "./components/hooks/useHttpData"
import axios from "axios"
import RecipeModal from "./components/RecipeModal"
import useFetch from "./components/hooks/useFetch"
import { LuBookUp } from "react-icons/lu"

const baseUrl = "https://www.themealdb.com/api/json/v1/1/"

  const url = `${baseUrl}list.php?c=list`

  const defaultCategory = {
    strCategory: "Beef"
  }

  const makeMealUrl = (category: Category) => 
    `${baseUrl}filter.php?c=${category.strCategory}`

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [selectedCategory, setSelectedCategory] = useState<Category>(defaultCategory)

  const {loading, data} = useHttpData<Category>(url)

    const {loading: loadingMeal, data: dataMeal, setData: setMeals, setLoading: setLoadingMeal} = useHttpData<Meal>(makeMealUrl(defaultCategory))

    const searchApi = (searchForm: SearchForm) => {
      const url = `${baseUrl}search.php?s=${searchForm.search}`;
      setLoadingMeal(true);
      axios.get<{meals: Meal[]}>(url)
      .then(({ data }) => setMeals(data.meals))
      .finally(() => setLoadingMeal(false));

    }

    const { fetch } = useFetch<MealDetails>();
   
    
    const searchMealDetails = (meal: Meal) => {
      onOpen();
      fetch(`${baseUrl}lookup.php?i=${meal.idMeal}`);
    }
  return (

    <>
      <Grid fontSize={14}
        templateAreas={`"header header"
                    "nav main"`}
        gridTemplateRows={'60px 1fr'}
        gridTemplateColumns={{ sm: `0 1fr`, md: `250px 1fr`}}
      >
        <GridItem 
        boxShadow="lg" 
        pos="sticky" 
        zIndex="1" 
        top="0" 
        pt='7px' 
        bg='white' 
        area={'header'}
        >
      <Header onSubmit={searchApi} />
        </GridItem>
        <GridItem  pos="sticky" top="60px" left="0" p='5' area={'nav'} height="calc(100vh - 60px)" overflowY="auto">
      <SideNav
       categories={data}
       loading={loading} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory }/>
        </GridItem>
        <GridItem p='4' bg='gray.100' area={'main'}>
      <MainContent openRecipe={searchMealDetails} meals={dataMeal} loading={loadingMeal}/>
        </GridItem>
      </Grid>
      <RecipeModal isOpen={isOpen} onClose={onClose} />
    </>

)
}

export default App
