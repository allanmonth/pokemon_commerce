//Interface
import { NotResultInterface } from "../../interfaces/notResult";

//Components
import { TypographyCustom } from "./typography";

//I18N
import intl from "react-intl-universal";

export function NotResult(props:NotResultInterface){
    return(
        <div
            style={!props.styleBool ? {} :
                {marginTop:30,marginBottom:30}}
        >
            <TypographyCustom align={'center'} color={'textSecondary'}>
                {props.icon}
            </TypographyCustom>
            <TypographyCustom align={'center'} color={'textSecondary'}>
                {intl.get(props.title)}
            </TypographyCustom>
        </div>
    )
}