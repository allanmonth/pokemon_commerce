import React  from "react";
import { Chip , LinearProgress, Paper } from "@material-ui/core";
import Image from "next/image";
import { useRouter } from "next/router";

//Components
import { Grid12 } from "../../extra/components/common/grid";
import { Header } from "../../extra/components/common/header";
import { TypographyCustom } from "../../extra/components/common/typography";

//hooks
import { useWindowSize } from "../../extra/hooks/useWindowSize";

//Services
import { useFetchPokemon } from "../../extra/services/pokeAPI/useFetch";

//Redux
import { useDispatch } from "react-redux";

//I18N
import intl from "react-intl-universal";

export default function ViewPokemon(){
    const size = useWindowSize();
    const router = useRouter();
    const { uid } = router.query;
    const dispatch = useDispatch();
    const { data } = useFetchPokemon("pokemon/"+ uid,dispatch, uid !== undefined);

    return(
        <Grid12>
            <Grid12>
                <Header back={true}/>
            </Grid12>
            {data !== undefined?
                <Grid12 justifyContent={'center'}
                       style={{padding:20,paddingTop:100}}>
                    <Paper style={{width: size.mobile? '100%' : '90%'}}>
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

                    </Paper>
                </Grid12>
                : null
            }
        </Grid12>
    )
}