import useSWR from 'swr';
import {api} from "../index";
import {ErrorGeneric} from "../../utils/errorGeneric";
import {AppDispatch} from "../../redux/store";
import intl from "react-intl-universal";

// GET pokeAPI
export function useFetchPokemon<Data = any, Error = any>(url: string,dispatch: AppDispatch) {
    const { data, error } = useSWR<Data, Error>(url, async url => {
        const response = await api.get(url);
        return response.data;
    })
    if(error){
        dispatch(ErrorGeneric(intl.get('messageError')))
    }
    return { data }
}

