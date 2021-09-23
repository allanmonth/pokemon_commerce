import React, {useEffect, useState} from "react";
import {Pagination} from "@material-ui/lab";
import {useRouter} from "next/router";

//Components
import {Header} from "../extra/components/common/header";
import {Grid12, Grid3, Grid9} from "../extra/components/common/grid";
import {PokeCard} from "../extra/components/pages/init/components/pokeCard";
import {SkeletonGalleryPokeCard} from "../extra/components/pages/init/components/SkeletonGalleryPokeCard";
import {Cart} from "../extra/components/pages/init/components/cart";

//Hooks
import {useWindowSize} from "../extra/hooks/useWindowSize";

//Services
import { getPokemon , getPokemonName } from "../extra/services/pokeAPI/get";

//Utils
import {clickView} from "../extra/components/pages/init/utils/clickView";

//Redux
import {useDispatch,} from "react-redux";

//CSS
import 'react-toastify/dist/ReactToastify.css';

//Interfaces
import {ItemsPokemonCard} from "../extra/interfaces/itemsPokemonCard";

export default function Home(){
    const router = useRouter()
    const size = useWindowSize()
    const [items,setItems] = useState<ItemsPokemonCard[]>([])
    const [change,setChange] = useState(0)
    const [count,setCount] = useState(0)
    const [page,setPage] = useState(1)
    const dispatch = useDispatch()

    //Quantity Cards
    const sumLimit = (size.width / 12 * 9) / 300 >> 0
    const limit = sumLimit === 0 ? 5 : sumLimit * 5

    //Init
    useEffect(()=>{
        getPokemon(0, limit,setItems,change,setChange,setCount,dispatch)
    },[size])

    //Change page
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setItems([])
        setPage(value)
        getPokemon(value * limit - limit, limit,setItems,change,setChange,setCount,dispatch)
    };

    //Find name
    const handleFind = (name:string) => {
        getPokemonName(router,name,dispatch)
    };

  return(
      <Grid12>
          <Grid12>
              <Header handleFind={handleFind}/>
          </Grid12>
          <Grid12>
              <Grid9 justifyContent={'center'}
                     style={{padding:20,paddingTop:70}}>
                  {items.length > 0?
                      <>
                          {items.map((option: ItemsPokemonCard) => (
                              <PokeCard key={option.name}
                                        id={String(option.url.slice(0, -1))}
                                        title={option.name}
                                        subtitle={Math.floor((Math.random() * 1000) + 1)}
                                        clickView={() => {
                                            clickView(String(option.url.slice(0, -1)), router)
                                        }}/>
                          ))}
                          <Grid12 justifyContent={'center'}
                                  style={{marginTop:20}}>
                              <Pagination size={size.mobile? 'small' : 'medium'}
                                          count={count}
                                          page={page}
                                          color="primary"
                                          onChange={handleChange} />
                          </Grid12>
                      </>
                      : <SkeletonGalleryPokeCard/>
                  }
              </Grid9>
              {!size.mobile?
                  <Grid3 style={{padding:20}}>
                      <Cart/>
                  </Grid3>
                  : null
              }
          </Grid12>
      </Grid12>
  )
}