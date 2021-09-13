import React, {useEffect, useState} from "react";
import {Pagination} from "@material-ui/lab";

//Components
import {Header} from "../extra/components/common/header";
import {Grid10, Grid12, Grid9} from "../extra/components/common/grid";
import {PokeCard} from "../extra/components/pages/init/components/pokeCard";
import {SkeletonGalleryPokeCard} from "../extra/components/pages/init/components/SkeletonGalleryPokeCard";

//Hooks
import {useNavigator} from "../extra/hooks/useNavigator";

//Services
import {getPokemon} from "../extra/services/pokeAPI/get";

//Utils
import {FormatterCurrency} from "../extra/utils/formatterCurrency";
import {clickView} from "../extra/components/pages/init/utils/clickView";
import {useRouter} from "next/router";

//Constants Services
const limit = 15

export default function Home(){
    const language = useNavigator()
    const router = useRouter()
    const [items,setItems] = useState([])
    const [change,setChange] = useState(0)
    const [count,setCount] = useState(0)
    const [page,setPage] = useState(1)

    //Init
    useEffect(()=>{
        getPokemon(0, limit,setItems,change,setChange,setCount)
    },[])

    //Change page
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setItems([])
        setPage(value)
        getPokemon(value * limit - limit, limit,setItems,change,setChange,setCount)
    };

  return(
      <Grid12>
          <Grid12>

          </Grid12>
          <Grid10 style={{padding:20}}>
              {items.length > 0?
                  items.map((option: any) => (
                      <PokeCard key={option.name}
                                id={String(option.url.slice(0, -1))}
                                title={option.name}
                                subtitle={String(FormatterCurrency(Math.floor((Math.random() * 1000) + 1), language))}
                                clickAdd={() => {
                                }}
                                clickView={() => {
                                    clickView(String(option.url.slice(0, -1)), router)
                                }}/>
                  ))
                  : <SkeletonGalleryPokeCard/>
              }
              <Grid12 justifyContent={'center'}
                      style={{marginTop:20}}>
                  <Pagination count={count} page={page} color="primary" onChange={handleChange} />
              </Grid12>

          </Grid10>


      </Grid12>
  )
}