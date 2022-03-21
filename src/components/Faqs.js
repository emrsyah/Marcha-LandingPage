import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

function Faqs() {
  return (
    <div className="mx-20 my-9">
    <h2 className="text-5xl font-semibold my-3 ml-1">FAQs</h2>
    <div >
      <div className="w-full max-w-3xl p-2  bg-white rounded-2xl">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-700 bg-purple-200 rounded-lg hover:bg-purple-300 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span className="text-lg">What is Marcha?</span>
                <ChevronUpIcon
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-5 h-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                voluptates officiis, odio debitis sint inventore ullam facilis!
                Ex, iste sunt.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as='div' className='mt-3'>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-700 bg-purple-200 rounded-lg hover:bg-purple-300 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span className="text-lg">Why Marcha?</span>
                <ChevronUpIcon
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-5 h-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                voluptates officiis, odio debitis sint inventore ullam facilis!
                Ex, iste sunt.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as='div' className='mt-3'>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-700 bg-purple-200 rounded-lg hover:bg-purple-300 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span className="text-lg">How it works</span>
                <ChevronUpIcon
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-5 h-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                voluptates officiis, odio debitis sint inventore ullam facilis!
                Ex, iste sunt.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as='div' className='mt-3'>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-700 bg-purple-200 rounded-lg hover:bg-purple-300 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span className="text-lg">How to change my pin</span>
                <ChevronUpIcon
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-5 h-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-base text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                voluptates officiis, odio debitis sint inventore ullam facilis!
                Ex, iste sunt.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        
      </div>
    </div>
    </div>
  );
}

export default Faqs;
