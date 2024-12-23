'use client'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { Attack } from '../../../api/pokemons/types'

export default function Modal({
  open,
  setOpen,
  attacks,
}: {
  open: boolean,
  setOpen: (value: boolean) => void
  attacks?: Attack[]
}) {

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <DialogTitle as="h3" className="text-base font-semibold text-gray-900">
                    Attack details
                  </DialogTitle>
                  <div className="mt-2">
                    {attacks ? (
                      <>
                        {attacks?.map((attack) => (
                          <div className='border rounded-md p-2 mb-2'>
                            <p className='font-bold'>{attack.name}</p>
                            <p><span className='font-bold'>Cost:</span> {attack.cost}</p>
                            <p><span className='font-bold'>Damage:</span> {attack.damage}</p>
                            <p><span className='font-bold'>Description:</span> {attack.text}</p>
                          </div>
                        ))}
                      </>
                    ) : (
                      <p>(no data for this card)</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                data-autofocus
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                close
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}
