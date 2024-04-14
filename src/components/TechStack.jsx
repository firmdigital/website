import { InfiniteScroll } from "./UI/InfiniteScroll.tsx";

// const tech = [
//   { id: 1, name: "Java Script", logo: "../assets/tech/script-java.png" },
//   { id: 2, name: "Python", logo: "../assets/tech/python.png" },
//   { id: 3, name: "Php", logo: "../assets/tech/php.png" },
//   { id: 4, name: "Java", logo: "../assets/tech/java.png" },
// ];

const tech = [
  {
      picture:"./assets/tech/angular.png",
      name: "Angular"
  },
  {
      picture:"./assets/tech/figma.png",
      name: "Figma"
  },
  {
      picture:"./assets/tech/react.png",
      name: "React Js"
  },
  {
      picture:"./assets/tech/typescript.png",
      name: "TypeScript"
  },
  {
      picture:"./assets/tech/photoshop.png",
      name: "Photoshop"
  },
  {
      picture:"./assets/tech/springboot.png",
      name: "Spring Boot"
  },
  {
      picture:"./assets/tech/tailwind.png",
      name: "Tailwind CSS"
  },
  {
      picture:"./assets/tech/next.png",
      name: "Next JS"
  },
  {
      picture:"./assets/tech/flutter.png",
      name: "Flutter"
  },
];

function TechStack() {
  return (
    <div className="w-full flex flex-col gap-4">
      <span className="bg-[#5FC4E6]/30 py-1.5 items-center px-6 w-fit rounded-full border border-[#5FC4E6] text-[10px] text-gray-500">
        TECHNOLOGIES
      </span>
      <h4 className="md:text-5xl font-medium text-gray-700 sm:text-3xl text-2xl">
        Decouvrez les
        <span className="font-bold text-[#5FC4E6] hover:text-orange-500">
          TECHNOLOGIES
        </span>
        <br /> que nous utilisons quotidiennement
      </h4>
      <div className="relative isolate overflow-hidden bg-slate-900 rounded-2xl shadow-sm shadow-slate-400  py-10">
        <img
          src="./assets/tech-bg.jpeg"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-10"
        />
        <div className="relative mx-auto max-w-7xl">
          <div className="flex flex-col antialiased items-center justify-center relative overflow-hidden">
            <InfiniteScroll items={tech} direction="right" speed="slow" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechStack;
