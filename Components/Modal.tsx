interface ModalProps {
    children: React.ReactNode
    onClose: () => void
}

export function Modal({children, onClose} : ModalProps) {
    return(
        <div className="fixed bg-black/50 bottom-0 right-0 left-0 top-0" onClick={onClose} >
            <div className="w-[400px] p-5 rounded absolute top-10 left-1/2 -translate-x-1/2 flex justify-center bg-zinc-800"> 
                {children}
            </div>
        </div>
        
    )
}