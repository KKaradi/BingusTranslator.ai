import { useRef } from 'react'
import OptionBar from './OptionBar.jsx'


export default function InputField({submitHandler, languageCode, recordingState}) {
    const textbox = useRef(null);

    function onSubmitHandler(e) {
        e.preventDefault(); 
        submitHandler(textbox.current.value)
        textbox.current.value = "";
    }

    function onResetHandler(e){
        e.preventDefault();
        console.log('reset')
    }

    function keyPressHandler(e) {
        if (e.keyCode === 13) {
            onSubmitHandler(e);
        }
    }

    return ( 
        <form onSubmit={onSubmitHandler} onReset={onResetHandler} action="">
            <textarea onKeyDown={keyPressHandler} placeholder='Type something...' ref={textbox} name="" id="" cols="30" rows="10" />
            <OptionBar submitHandler={submitHandler} languageCode={languageCode} recordingState={recordingState}/>
        </form>
    )
}