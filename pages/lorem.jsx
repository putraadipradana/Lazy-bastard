import {
  ChevronDownIcon,
  FlagIcon,
  InboxIcon,
  MagnifyingGlassIcon,
  PencilSquareIcon,
  TrashIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Lorem() {
  return (
    <>
      <Head>
        <title>Chat app</title>
      </Head>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptas
      molestias? Dolor vel voluptatibus porro sit. Quo perspiciatis esse
      cupiditate!
      <header className="flex flex-shrink-0">
        <div className="w-64 flex-shrink-0">
          <button className="w-full flex items-center group px-4 py-3 bg-sky-700 hover:bg-sky-800">
            <div className="flex-1 flex items-center">
              <div className="h-8 w-8 rounded-full relative overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1544&q=80"
                  alt=""
                  fill
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
              <span className="ml-4 text-sm font-medium text-white">
                Jack Finnigan
              </span>
            </div>
            <ChevronDownIcon
              className="stroke-current ml-4 mr-2 h-4 w-4 text-white"
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            />
          </button>
        </div>
        <div className="flex px-6 flex-1 bg-sky-600 items-center justify-between">
          <nav className="space-x-1.5">
            <Link
              href="/"
              className="inline-block px-3 py-2 bg-sky-700 rounded-md leading-none text-sm font-medium text-white hover:bg-sky-700"
            >
              Messages
            </Link>
            <Link
              href="/contacts"
              className="inline-block px-3 py-2 rounded-md leading-none text-sm font-medium text-white hover:bg-sky-700"
            >
              Contacts
            </Link>
            <Link
              href="#"
              className="inline-block px-3 py-2 rounded-md leading-none text-sm font-medium text-white hover:bg-sky-700"
            >
              Status
            </Link>
            <Link
              href="#"
              className="inline-block px-3 py-2 rounded-md leading-none text-sm font-medium text-white hover:bg-sky-700"
            >
              Settings
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <div className="bg-sky-700 h-3 w-3 rounded-full"></div>
            <div className="bg-sky-700 h-3 w-3 rounded-full"></div>
            <div className="bg-sky-700 h-3 w-3 rounded-full"></div>
          </div>
        </div>
      </header>
      <div className="flex-1 flex overflow-hidden">
        <div className="w-64 p-6 bg-gray-100">
          <nav>
            <h2 className="text-xs font-semibold text-gray-600 tracking-wide uppercase">
              Messages
            </h2>
            <div className="mt-3 space-y-2">
              <Link
                href="#"
                className="text-sm font-medium flex items-center justify-between bg-gray-200 rounded-lg -mx-3 px-3 py-2.5"
              >
                <span className="inline-flex">
                  <InboxIcon
                    className="h-5 w-5 text-gray-700"
                    strokeWidth="2"
                  />
                  <span className="ml-2 text-gray-900">Inbox</span>
                </span>
                <span className="text-gray-700 text-xs font-semibold bg-gray-300 rounded-full w-8 text-center py-1 inline-block leading-none">
                  2
                </span>
              </Link>
              <Link
                href="#"
                className="hover:bg-gray-200 text-sm font-medium flex items-center justify-between rounded-lg -mx-3 px-3 py-2.5"
              >
                <span className="inline-flex">
                  <FlagIcon className="h-5 w-5 text-gray-500" strokeWidth="2" />
                  <span className="ml-2 text-gray-700">Flagged</span>
                </span>
              </Link>
              <Link
                href="#"
                className="hover:bg-gray-200 text-sm font-medium flex items-center justify-between rounded-lg -mx-3 px-3 py-2.5"
              >
                <span className="inline-flex">
                  <UserGroupIcon
                    className="h-5 w-5 text-gray-500"
                    strokeWidth="2"
                  />
                  <span className="ml-2 text-gray-700">Groups</span>
                </span>
              </Link>
              <Link
                href="#"
                className="hover:bg-gray-200 text-sm font-medium flex items-center justify-between rounded-lg -mx-3 px-3 py-2.5"
              >
                <span className="inline-flex">
                  <PencilSquareIcon
                    className="h-5 w-5 text-gray-500"
                    strokeWidth="2"
                  />
                  <span className="ml-2 text-gray-700">Drafts</span>
                </span>
              </Link>
              <Link
                href="#"
                className="hover:bg-gray-200 text-sm font-medium flex items-center justify-between rounded-lg -mx-3 px-3 py-2.5"
              >
                <span className="inline-flex">
                  <TrashIcon
                    className="h-5 w-5 text-gray-500"
                    strokeWidth="2"
                  />
                  <span className="ml-2 text-gray-700">Trash</span>
                </span>
              </Link>
            </div>
          </nav>
          <nav className="mt-8">
            <h2 className="text-xs font-semibold text-gray-600 tracking-wide uppercase">
              Others
            </h2>
            {/* <ul className="space-y-5 mt-5">
                <li>
                  <div className="flex items-center gap-4">
                    <span className="bg-indigo-600 h-3 w-3 rounded-full"></span>
                    <span className="text-sm font-medium text-gray-900">
                      Online
                    </span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-4">
                    <span className="bg-gray-500 h-3 w-3 rounded-full"></span>
                    <span className="text-sm font-medium text-gray-900">
                      Offline
                    </span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-4">
                    <span className="bg-red-600 h-3 w-3 rounded-full"></span>
                    <span className="text-sm font-medium text-gray-900">
                      Blocked
                    </span>
                  </div>
                </li>
              </ul> */}
          </nav>
        </div>

        <main className="bg-gray-200 flex flex-1">
          <div className="w-full max-w-xs flex-grow border-l border-r border-gray-300 bg-white">
            <div className="border-b relative text-gray-500 focus-within:text-gray-900">
              <div className="absolute inset-y-0 left-0 flex items-center pl-6 pointer-events-auto">
                <MagnifyingGlassIcon className="w-4 h-4" />
              </div>
              <input
                type="text"
                className="w-full border-none focus:ring-0 focus:outline-none focus:bg-gray-50 pl-12 pr-6 py-3"
                placeholder="Search"
              />
            </div>
            <div className="flex-1">
              <Link
                href="#"
                className="block px-6 pt-3 pb-4 bg-white hover:bg-gray-100 border-b"
              >
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-gray-900">
                    Jessica Zvyagintsev
                  </span>
                  <span className="h-2.5 w-2.5 bg-green-500 rounded-full"></span>
                </div>
                <p className="text-sm text-gray-600">Friend</p>
                <p className="text-sm text-gray-600 mt-2">
                  Lorem ipsum dolor sit amet, incididunt ut labore et dolore
                  magna...
                </p>
              </Link>
              <Link
                href="#"
                className="block px-6 pt-3 pb-4 bg-white hover:bg-gray-100 border-b"
              >
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-gray-900">
                    Monica White
                  </span>
                  <span className="h-2.5 w-2.5 bg-gray-500 rounded-full"></span>
                </div>
                <p className="text-sm text-gray-600">Friend</p>
                <p className="text-sm text-gray-600 mt-2">
                  Lorem ipsum dolor sit amet, incididunt ut labore et dolore
                  magna...
                </p>
              </Link>
            </div>
          </div>
          <div className="flex-1">
            <div className="bg-white px-5 py-4 shadow-sm flex items-center justify-between">
              <Link
                href="#"
                className="text-xl truncate flex items-center gap-5 font-semibold text-gray-900 hover:text-gray-600"
              >
                <div className="h-10 w-10 rounded-full relative overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1581403341630-a6e0b9d2d257?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                    alt=""
                    fill
                    objectFit="cover"
                    objectPosition="center"
                  />
                </div>
                Jessica Zvyagintsev
              </Link>
              <span className="bg-green-200 text-green-900 text-xs font-semibold px-1.5 py-0.5 rounded-full">
                Online
              </span>
            </div>

            <div className="p-3 space-y-3">
              <article className="pt-7 bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="text-gray-600 px-10">
                  <p>
                    {
                      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis autem voluptate omnis."
                    }
                  </p>
                </div>
                <div className="mt-5 flex items-center justify-end px-10 py-3 bg-gray-100">
                  <span className="text-sm text-gray-600 flex items-center">
                    You at 07:24 AM &middot; Read
                  </span>
                </div>
              </article>
              <article className="pt-7 bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="text-gray-600 px-10">
                  <p>
                    {
                      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos voluptate assumenda molestiae voluptatibus eligendi ad quidem. Voluptatibus eveniet magnam, quam, repellat illo reiciendis, ipsa maxime quod dolorem neque distinctio cupiditate."
                    }
                  </p>
                </div>
                <div className="mt-5 flex items-center bg-gray-100 px-10 py-3 justify-end">
                  <span className="text-sm text-gray-600 flex items-center">
                    Jessica Zvyagintsev at 07:24 AM &middot; Read
                  </span>
                </div>
              </article>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
