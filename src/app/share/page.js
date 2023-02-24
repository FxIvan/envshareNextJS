import InputTextArea from "../component/inputTextArea/inputTextArea";

export default function Share(){
    return(
        <div>
            <div>
            <h1 className="py-4 text-5xl font-bold text-center text-transparent bg-gradient-to-t bg-clip-text from-zinc-100/60 to-white">Encrypt and Share</h1>
            </div>
            <div>
                <InputTextArea/>
            </div>
        </div>
    )
}