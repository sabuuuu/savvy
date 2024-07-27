"use client"

import { Button, Dialog, DialogPanel, DialogTitle ,Input} from '@headlessui/react'
import { useState ,FormEvent} from 'react'

interface Props {
    productId: string
}
  
const Modal = ({ productId }: Props) => {
    let [isOpen, setIsOpen] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [email, setEmail] = useState('');

    function open() {
      setIsOpen(true)
    }
  
    function close() {
      setIsOpen(false)
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        // e.preventDefault();
        // setIsSubmitting(true);
    
        // await addUserEmailToProduct(productId, email);
    
        // setIsSubmitting(false)
        // setEmail('')
        // close()
    }
    
  return (
    <>
        <Button
            onClick={open}
            className="rounded-lg bg-[#192211] py-2 px-4 text-lg font-bold text-white focus:outline-none data-[hover]:bg-[#28321e]  data-[focus]:outline-none"
        >
            Track
        </Button>

        <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close}>
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <form className="flex min-h-full items-center justify-center p-4" onSubmit={handleSubmit}>
                    <DialogPanel
                    transition
                    className="w-full max-w-md rounded-xl bg-[#475c2f] bg-opacity-20 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
                    >
                    <DialogTitle as="h3" className="text-xl font-semibold text-[#cfdeb8]">
                        Stay updated with us
                    </DialogTitle>
                    <p className="mt-2 text-sm/6 text-[#cfdeb8]">
                        Never miss any new updates about product pricing!
                    </p>
                    <div className="mt-4 flex flex-col gap-4 px-10">
                        <Input placeholder="Enter your email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                        className="w-full rounded-lg  text-[#192211] border-2 border-[#93b269] bg-[#b1c88e] px-4 py-2 text-base focus:outline-none placeholder:text-[#192211] placeholder:text-opacity-55"
                        />
                        <Button
                            className=" items-center text-center gap-2 rounded-md bg-[#192c07] text-[#93DB2B] py-2 px-3 text-sm/6 font-semibold focus:outline-none data-[hover]:bg-[#345017] shadow-md data-[focus]:outline-none"
                            type='submit'
                        >
                            {isSubmitting ? 'Submitting...' : 'Keep me informed'}
                        </Button>
                    </div>
                    </DialogPanel>
                </form>
            </div>
        </Dialog>
    </>
  )
}

export default Modal