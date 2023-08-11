"use client";
import { Disclosure } from "@headlessui/react";
import cloud202 from "../../assets/images/202_logo_white-d95E0aWWZDH8pBaR.png";
import { ChevronRightIcon, NewspaperIcon } from "@heroicons/react/20/solid";
import {
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  ArrowPathIcon,
  FolderPlusIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

const navigation = [
  {
    name: "New Project Template",
    href: "#",
    icon: FolderPlusIcon,
    current: false,
  },
  {
    name: "View/Update Phases",
    icon: ArrowPathIcon,
    current: false,
    children: [
      { name: "Engineering", href: "#" },
      { name: "Human Resources", href: "#" },
      { name: "Customer Success", href: "#" },
    ],
  },
  {
    name: "View / Update Modules",
    icon: FolderIcon,
    current: false,
    children: [
      { name: "GraphQL API", href: "#" },
      { name: "iOS App", href: "#" },
      { name: "Android App", href: "#" },
      { name: "New Customer Portal", href: "#" },
    ],
  },
  { name: "View/Update Task", href: "#", icon: CalendarIcon, current: false },
  {
    name: "3rd Party Solutions",
    href: "#",
    icon: DocumentDuplicateIcon,
    current: false,
  },
  { name: "List Customers", href: "#", icon: ChartPieIcon, current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Sidebar() {
  return (
    <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r w-84 min-h-full top-16 fixed left-0 border-gray-200 bg-gray-900 text-white px-6">
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  {!item.children ? (
                    <a
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-50"
                          : "hover:bg-gray-50  hover:text-blue-600",
                        "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold text-gray-400"
                      )}
                    >
                      <item.icon
                        className="h-6 w-6 shrink-0 text-gray-400"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ) : (
                    <Disclosure as="div">
                      {({ open }) => (
                        <>
                          <Disclosure.Button
                            className={classNames(
                              item.current
                                ? "bg-gray-50"
                                : "hover:bg-gray-50 hover:text-blue-600",
                              "flex items-center w-full text-left rounded-md p-2 gap-x-3 text-sm leading-6 font-semibold text-gray-400"
                            )}
                          >
                            <item.icon
                              className="h-6 w-6 shrink-0 text-gray-400"
                              aria-hidden="true"
                            />
                            {item.name}
                            <ChevronRightIcon
                              className={classNames(
                                open
                                  ? "rotate-90 text-gray-500"
                                  : "text-gray-400",
                                "ml-auto h-5 w-5 shrink-0"
                              )}
                              aria-hidden="true"
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel as="ul" className="mt-1 px-2">
                            {item.children.map((subItem) => (
                              <li key={subItem.name}>
                                {/* 44px */}
                                <Disclosure.Button
                                  as="a"
                                  href={subItem.href}
                                  className={classNames(
                                    subItem.current
                                      ? "bg-gray-50"
                                      : "hover:bg-gray-50  hover:text-blue-600",
                                    "block rounded-md py-2 pr-2 pl-9 text-sm leading-6 text-gray-400"
                                  )}
                                >
                                  {subItem.name}
                                </Disclosure.Button>
                              </li>
                            ))}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  )}
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}
