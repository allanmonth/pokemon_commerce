import useSWR from 'swr';
import {api} from "../index";

// GET pokeAPI
export function useFetchPokemon<Data = any, Error = any>(url: string) {
    const { data, error } = useSWR<Data, Error>(url, async url => {
        const response = await api.get(url);
        return response.data;
    })
    return { data }
}

