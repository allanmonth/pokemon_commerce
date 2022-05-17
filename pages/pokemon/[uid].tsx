import React, { useState }  from "react";
import { Chip , LinearProgress, Paper } from "@material-ui/core";
import Image from "next/image";
import { useRouter } from "next/router";

//Components
import { Grid12 , Grid4 } from "../../extra/components/common/grid";
import { Header } from "../../extra/components/common/header";
import { TypographyCustom } from "../../extra/components/common/typography";
import { ActionCard } from "../../extra/components/pages/init/components/actionCard";

//hooks
import { useWindowSize } from "../../extra/hooks/useWindowSize";

//Services
import { useFetchPokemon } from "../../extra/services/pokeAPI/useFetch";

//Redux
import { useDispatch } from "react-redux";

//I18N
import intl from "react-intl-universal";

//Icons
import { AddCircleRounded } from "@material-ui/icons";

//Utils
import { clickAdd } from "../../extra/components/pages/init/utils/clickAdd";

export default function ViewPokemon(){
    const [init,setInit] = useState(true)
    const size = useWindowSize();
    const router = useRouter();
    const { uid } = router.query;
    const dispatch = useDispatch();
    const { data } = useFetchPokemon("pokemon/"+ uid,dispatch, uid !== undefined);

    return(
        <Grid12>
            <Grid12>
                <Header back={true} setInit={setInit}/>
            </Grid12>
            {data !== undefined && !init ?
                <Grid12 justifyContent={'center'}
                       style={{padding:20,paddingTop:100}}>
                    <Paper style={{width: size.mobile? '100%' : '90%', maxWidth: 600}}>
                        {/*name*/}
                        <Grid12 justifyContent={'center'}>
                            <TypographyCustom variant={'h1'} style={{paddingTop:20}}>
                                {data.name[0].toUpperCase() + data.name.substr(1)}
                            </TypographyCustom>
                        </Grid12>
                        {/*id*/}
                        <Grid12 justifyContent={'center'}>
                            <TypographyCustom variant={'subtitle1'} style={{paddingBottom:20}}>
                                #{String(data.id).length < 2 ? '00' : null}{data.id}
                            </TypographyCustom>
                        </Grid12>
                        {/*image*/}
                        <Grid12 justifyContent={'center'}>
                            <Image alt={data.sprites.front_default}
                                   src={data.sprites.front_default}
                                   objectFit="contain"
                                   width={'100%'}
                                   height={'100%'}
                                   quality={100}
                                   priority />
                            <Image alt={data.sprites.back_default}
                                   src={data.sprites.back_default}
                                   objectFit="contain"
                                   width={'100%'}
                                   height={'100%'}
                                   quality={100}
                                   priority />
                        </Grid12>
                        {/*abilities*/}
                        <Grid12 justifyContent={'center'}>
                            <TypographyCustom variant={'h3'} style={{paddingBottom:5}}>
                                {intl.get('abilities')}
                            </TypographyCustom>
                        </Grid12>
                        <Grid12 justifyContent={'center'}>
                            {data.abilities.map((opt:any,i:number)=>(
                                <Chip style={{margin:10}}
                                      variant={i % 2 == 0 ? 'default' : 'outlined'}
                                      key={opt.ability.name}
                                      label={opt.ability.name[0].toUpperCase() + opt.ability.name.substr(1)}
                                      color={'primary'} />
                            ))}
                        </Grid12>
                        {/*types*/}
                        <Grid12 justifyContent={'center'}>
                            <TypographyCustom variant={'h3'} style={{paddingBottom:5}}>
                                {intl.get('types')}
                            </TypographyCustom>
                        </Grid12>
                        <Grid12 justifyContent={'center'}>
                            {data.types.map((opt:any,i:number)=>(
                                <Chip style={{margin:10}}
                                      variant={i % 2 == 0 ? 'outlined' : 'default'}
                                      key={opt.type.name}
                                      label={opt.type.name[0].toUpperCase() + opt.type.name.substr(1)}
                                      color={'primary'} />
                            ))}
                        </Grid12>
                        {/*chart*/}
                        {data.stats.map((opt:any)=>(
                            <div key={opt.stat.name}>
                                <Grid12 justifyContent={'center'}>
                                    <TypographyCustom variant={'h3'} style={{paddingBottom:5,paddingTop:5}}>
                                        {opt.stat.name[0].toUpperCase() + opt.stat.name.substr(1)}
                                    </TypographyCustom>
                                </Grid12>
                                <Grid12 justifyContent={'center'}>
                                    <div style={{width:'80%',marginBottom:20}}>
                                        <LinearProgress variant="determinate" color={'primary'} value={opt.base_stat} />
                                    </div>
                                </Grid12>
                            </div>
                        ))}
                        <Grid12 justifyContent={'center'} >
                            <Grid4 style={{marginBottom:20}}>
                                <ActionCard title={ 'addCard' }
                                            icon={ <AddCircleRounded/> }
                                            click={()=>clickAdd({
                                                id: Number(data.id),
                                                image: data.sprites.front_default,
                                                name: data.name,
                                                value: Math.floor((Math.random() * 1000) + 1),
                                                quantity: 1,
                                            },dispatch)}
                                            variant={ 'contained' }/>
                            </Grid4>
                        </Grid12>
                    </Paper>
                </Grid12>
                : null
            }
        </Grid12>
    )
}