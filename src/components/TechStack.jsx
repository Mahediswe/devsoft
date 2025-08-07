import React from 'react';
import { FaReact, FaNodeJs, FaJava, FaPhp, FaPython, FaAndroid, FaApple, FaJs } from 'react-icons/fa';
import { SiDotnet, SiAngular, SiBootstrap, SiJquery, SiDjango,  } from 'react-icons/si';

const TechStack = () => {
  return (
    <section className="max-w-7xl mx-auto py-20 bg-gradient-to-b from-blue-100 to-blue-200 ">
      <div className=" px-4 text-center">
        <h2 className="text-4xl font-semibold mb-4">
          <span className="text-blue-600">Core tech stack</span> we work with
        </h2>
        <div className="border-t my-12" />

        {/* Backend */}
        <div className="text-left mb-12">
          <h3 className="text-xl font-bold mb-4">Backend development</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center text-center">
            <Tech icon={<FaJava size={40} />} name="Java" />
            <Tech icon={<SiDotnet size={40} />} name=".NET" />
            <Tech icon={<FaPhp size={40} />} name="PHP" />
            <Tech icon={<FaPython size={40} />} name="Python" />
            <Tech icon={<FaNodeJs size={40} />} name="Node.js" />
            <Tech icon={<FaJs size={40} />} name="JavaScript" />
          </div>
        </div>

        <div className="border-t my-12" />

        {/* Frontend */}
        <div className="text-left mb-12">
          <h3 className="text-xl font-bold mb-4">Frontend development</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center text-center">
            <Tech icon={<FaReact size={40} />} name="React" />
            <Tech icon={<SiAngular size={40} />} name="Angular" />
           
            <Tech icon={<SiBootstrap size={40} />} name="Bootstrap" />
            <Tech icon={<SiJquery size={40} />} name="jQuery" />
            <Tech icon={<SiDjango size={40} />} name="Django" />
          </div>
        </div>

        <div className="border-t my-12" />

        {/* Mobile */}
        <div className="text-left">
          <h3 className="text-xl font-bold mb-4">Mobile development</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center text-center">
            <Tech icon={<FaApple size={40} />} name="iOS" />
            <Tech icon={<FaAndroid size={40} />} name="Android" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Tech = ({ icon, name }) => (
  <div className="flex flex-col items-center gap-2">
    <div className="text-blue-500">{icon}</div>
    <p className="text-sm font-medium">{name}</p>
  </div>
);

export default TechStack;
