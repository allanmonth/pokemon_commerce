export function FormatterCurrency (value: number,language: string){
    return value.toLocaleString(language,{
        style: 'currency',
        currency: language === 'en-US'? 'USD' : 'BRL'
    })
}