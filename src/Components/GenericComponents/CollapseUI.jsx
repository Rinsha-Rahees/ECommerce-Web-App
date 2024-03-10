import { Disclosure } from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

export default function CollapseUI() {
  const arr = [
    {
      id: 1,
      title: "SHIPPING & RETURNS",
      desc: [
        {
          title: "Shipping",
          desc: "Free Shipping available on orders within india.\nOrders dispatched every day at 4 pm except on public holidays.\nAfter dispatch, it takes about: \n2 to 5 working days for metro cities & 4 to 7 working days for the rest of India.",
        },
        {
          title: "Returns",
          desc: "7 Day Free Return On All Orders.\nIncase of return items must be returned in their original condition with our box + packaging + tags / labels as delivered to you, or it will not be accepted by our warehouse.\n Please check our returns policy for more details.",
        },
      ],
    },
    {
      id: 2,
      title: "CARE GUIDE",
      desc: [
        {
          title: "",
          desc: "please follow care label on clothing.\nall our clothing is hand wash, please ensure to always use cold water.",
        },
      ],
    },
  ];

  return (
    <div className="flex w-full pt-8">
      <div className="w-full">
        {arr.map((data) => {
          return (
            <Disclosure key={`${data?.id}`}>
              {({ open }) => (
                <>
                  <Disclosure.Button
                    key={`${data?.id}`}
                    className="flex w-full justify-between text-left my-2">
                    <span
                      key={`${data?.id}`}
                      className="hover:text-blue-500 text-lg">
                      {data?.title}
                    </span>

                    {open ? (
                      <MinusIcon key={`${data?.id}`} className="w-6 h-6" />
                    ) : (
                      <PlusIcon key={`${data?.id}`} className="w-6 h-6" />
                    )}
                  </Disclosure.Button>
                  <hr key={`${data?.id}`} className="border" />
                  {data.desc.map((content) => {
                    return (
                        <Disclosure.Panel
                          key={`${content?.title}`}
                          className="flex flex-col p-4 bg-gray-100 font-sans text-sm mt-4">
                          <h3 className="text-lg font-semibold">
                            {content?.title}
                          </h3>
                          <span className="leading-5">{content?.desc}</span>
                        </Disclosure.Panel>
                    );
                  })}
                </>
              )}
            </Disclosure>
          );
        })}
      </div>
    </div>
  );
}
