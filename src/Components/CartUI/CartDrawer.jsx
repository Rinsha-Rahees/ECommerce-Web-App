import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeCartDrawer } from "../../reduxhandle/CartDrawer/CartDrawerAction";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Cart from "./Cart";

export default function CartDrawer() {
  const dispatch = useDispatch();

  const { isCartOpen } = useSelector((state) => state.isCartOpen);
  const { cart } = useSelector((state) => state.cart);

  function closeModal() {
    dispatch(closeCartDrawer());
  }

  return (
    <>
      <Transition appear show={isCartOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div className="fixed w-full h-full inset-0 bg-black/75" />
          </Transition.Child>

          <div className="fixed inset-0">
            <div className="flex h-screen justify-end font-mono">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-200"
                enterFrom="translate-x-1/2"
                enterTo="translate-x-0"
                leave="ease-in-out duration-200"
                leaveFrom="translate-x-0"
                leaveTo="opacity-0 translate-x-3/4">
                <Dialog.Panel className="w-full h-full sm:max-w-xs transform bg-white text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="flex items-center justify-between text-lg font-semibold py-3 px-4 text-gray-900 w-full">
                    <span>SHOPPING CART ({cart.length})</span>
                    <button onClick={closeModal}>
                      <XMarkIcon className="w-4 hover:animate-[spin_0.5s_ease-in-out]" />
                    </button>
                  </Dialog.Title>

                  <hr className="text-black" />

                  {/* Dispaying Cart Items */}

                  <div className="h-full w-full">
                    <Cart />
                  </div>
                  
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
