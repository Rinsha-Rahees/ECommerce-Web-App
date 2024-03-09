import { Disclosure } from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

export default function CollapseUI() {
  return (
    <div className="flex w-full pt-8">
      <div className="w-full rounded-2xl">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between text-left my-2">
                <span className="hover:text-blue-500 text-lg">
                  SHIPPING & RETURNS
                </span>

                {open ? (
                  <MinusIcon className="w-6 h-6" />
                ) : (
                  <PlusIcon className="w-6 h-6" />
                )}
              </Disclosure.Button>
              <hr className="border" />

              <Disclosure.Panel className="flex flex-col p-4 bg-gray-100 font-sans text-sm mt-4">
                <h3 className="text-lg font-semibold">Shipping</h3>

                <span className="font-semibold leading-10">
                  Free Shipping available on orders within india.
                </span>

                <span className="leading-5">
                  Orders dispatched every day at 4 pm except on public holidays.
                </span>
                <span className="leading-10">
                  After dispatch, it takes about
                </span>

                <ul className="list-disc pl-4">
                  <li>2 to 5 working days for metro cities</li>
                  <li>4 to 7 working days for the rest of India.</li>
                </ul>
                <span className="leading-10">
                  We ship your order from Mumbai, Maharashtra.
                </span>
              </Disclosure.Panel>
              <Disclosure.Panel className="flex flex-col p-4 bg-gray-100 font-sans text-sm mt-6">
                <h3 className="text-lg font-semibold">Returns</h3>

                <span className="font-semibold leading-10">
                7 Day Free Return On All Orders.
                </span>

                <span className="leading-5">
                Incase of return items must be returned in their original condition with our box + packaging + tags / labels as delivered to you, or it will not be accepted by our warehouse.
                </span>
                <span className="leading-10">
                Please check our <span className="underline hover:cursor-pointer">returns</span> policy for more details.
                </span>

              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between text-left my-2">
                <span className="hover:text-blue-500 text-lg">
                  CARE GUIDE
                </span>
                {open ? (
                  <MinusIcon className="w-6 h-6" />
                ) : (
                  <PlusIcon className="w-6 h-6" />
                )}
              </Disclosure.Button>
              <hr className="border" />

              <Disclosure.Panel className="flex flex-col p-4 bg-gray-100 font-sans text-sm mt-4">
                <ul className="list-disc pl-4">
                  <li>please follow care label on clothing.</li>
                  <li>all our clothing is hand wash, please ensure to always use cold water.</li>
                </ul>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
