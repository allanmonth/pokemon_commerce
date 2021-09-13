import axios from 'axios';

//Constants
import {basePokeAPI} from "../config/services";
import {locales} from "../config/language";

export const api = axios.create({
    baseURL: basePokeAPI,
    timeout: 5000,
})

api.interceptors.request.use(
    async function (config) {
        const language = navigator.language
        // @ts-ignore
        const currentLocale = locales[language] ? language : 'en-us';
        config.headers['accept-language'] = currentLocale
        return config;
    }, function (e) {
        console.log(e)
        return Promise.reject(e);
    });