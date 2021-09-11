import React, {useEffect} from 'react';
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

//Icons
import {
    FaInfo,
    FaCheck,
    FaExclamationTriangle,
    FaBug,
    FaExclamationCircle
} from "react-icons/fa";

//Redux
import {useAppSelector} from "../../redux/hooks";
import {selectSnack} from "../../redux/features/snack";

//Interfaces
import {ToastInterface} from "../../interfaces/snack";

export const displayIcon = (type: string) => {
    switch (type) {
        case "success":
            return <FaCheck />;
        case "info":
            return <FaInfo />;
        case "error":
            return <FaExclamationCircle />;
        case "warning":
            return <FaExclamationTriangle />;
        default:
            return <FaBug />;
    }
};

const ToastMessage = ({ type, message }: ToastInterface) => {
    switch (type) {
        case 'success':
            toast.success(<ToastRender type={type} message={message}/>);
            break;
        case 'warn':
            toast.warn(<ToastRender type={type} message={message}/>);
            break;
        case 'error':
            toast.error(<ToastRender type={type} message={message}/>);
            break;
        default:
            toast.info(<ToastRender type={type} message={message}/>);
    }
}

function ToastRender ({ type, message }: ToastInterface){
    return(
        <div style={{ display: "flex", color: "white" }}>
            <div
                style={{
                    fontSize: 15,
                    paddingTop: 8,
                    flexShrink: 0,
                    textAlign: "center",
                    width: "30px"
                }}
            >
                {displayIcon(type)}
            </div>
            <div style={{ flexGrow: 1, fontSize: 15, padding: "8px 12px" }}>
                {message}
            </div>
        </div>
    )
}

export default function CustomizedSnackbars (){
    const state = useAppSelector(selectSnack);

    const notify = React.useCallback((type, message) => {
        ToastMessage({ type, message });
    }, []);

    useEffect(()=>{
        if(state.open){
            notify(state.type, state.message)
        }
    },[state])

    return (
        <ToastContainer
            position="top-right"
            autoClose={10000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
    );
}


