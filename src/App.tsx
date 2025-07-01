import { Grid, GridItem } from "@chakra-ui/react"
import Header from "./components/Header"
import SideNav from "./components/SideNav"
import MainContent from "./components/MainContent"
import { useState } from "react"
import { Category, Meal, SearchForm } from "./types"
import useHttpData from "./components/hooks/useHttpData"
import axios from "axios"

  const url = "https://www.themealdb.com/api/json/v1/1/list.php?c=list"

  const defaultCategory = {
    strCategory: "Beef"
  }

  const makeMealUrl = (category: Category) => 
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category.strCategory}`

function App() {
  const [selectedCategory, setSelectedCategory] = useState<Category>(defaultCategory)
  const {loading, data} = useHttpData<Category>(url)
    const {loading: loadingMeal, data: dataMeal, setData: setMeals, setLoading: setLoadingMeal} = useHttpData<Meal>(makeMealUrl(defaultCategory))

    const searchApi = (searchForm: SearchForm) => {
      const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchForm.search}`;
      setLoadingMeal(true);
      axios.get<{meals: Meal[]}>(url)
      .then(({ data }) => setMeals(data.meals))
      .finally(() => setLoadingMeal(false));

    }
  return (

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
    <MainContent meals={dataMeal} loading={loadingMeal}/>
  </GridItem>
</Grid>    )
}

export default App
