import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";

const projects = [
  {
    name: "1.Define Project Scope",
  },
  {
    name: "2.Create Project Phases",
  },
  {
    name: "3.Define Modules With Each Project Phases",
  },
  {
    name: "4.Create Task and  Sub Task with each Modules ",
  },
  {
    name: "5.Integrate With Respective Atomated Solution",
  },
];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

export default function ProjectDesc() {
  return (
    <div className="ml-80 mx-auto mr-20 mt-20">
      <div className="grid grid-cols-2  ">
        <h2 className="text-2xl font-medium text-gray-900">
          How To Create Project Template
        </h2>
        <h2 className="text-2xl text-right font-medium text-gray-900">
          Dashboard
        </h2>
      </div>

      <ul
        role="list"
        className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-5"
      >
        {projects.map((project) => (
          <li
            key={project.name}
            className="col-span-1 flex rounded-md shadow-sm"
          >
            <div className="flex flex-1 items-center justify-between  rounded-xl  border-b border  overflow-x-auto  whitespace-pre-wrap text h-20 border-t border-gray-200 bg-blue-200">
              <div className="flex-1  px-4 py-2 text-sm">
                <a
                  href={project.href}
                  className="font-medium text-gray-900 hover:text-gray-600"
                >
                  {project.name}
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <h2 className="text-2xl text-right font-medium mt-8 text-gray-900">
        Demo Video
      </h2>
      <hr className="text-amber-400 p-2 m-5 bg-amber-400" />
    </div>
  );
}
