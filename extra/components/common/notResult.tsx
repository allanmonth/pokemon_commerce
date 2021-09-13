//Interface
import { NotResultInterface } from "../../interfaces/notResult";

//Components
import { TypographyCustom } from "./typography";

//I18N
import intl from "react-intl-universal";

export function NotResult(props:NotResultInterface){
    return(
        <div
            style={{
                position: 'absolute', left: '50%', top: '50%',
                transform: 'translate(-50%, -50%)'
            }}
        >
            <TypographyCustom align={'center'}>
                {props.icon}
            </TypographyCustom>
            <TypographyCustom align={'center'}>
                {intl.get(props.title)}
            </TypographyCustom>
        </div>
    )
}