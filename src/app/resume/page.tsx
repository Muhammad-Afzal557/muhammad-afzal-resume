






import Image from 'next/image';
import React from 'react';

const Resume = () => {
  return (
    <div className="w-full bg-white">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row shadow-lg overflow-hidden min-h-screen">
        
        {/* Left Section (Sidebar) */}
        <div className="w-full md:w-1/3 bg-sky-950 text-white px-4 py-10 space-y-6">
          <div className="flex justify-center">
            <Image
              src="/afzals.jpg"
              alt="Afzal"
              width={150}
              height={150}
              className="rounded-full object-cover"
            />
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <h2 className="text-xl border-b pb-1">Contact Information</h2>
            <p><strong>Phone:</strong> +92 325 3086449</p>
            <p><strong>Email:</strong> <span className="text-blue-400 text-sm">soomroyasir81@gmail.com</span></p>
            <p><strong>Location:</strong> Karachi, Pakistan</p>
            <p><strong>Portfolio:</strong> <span className="text-blue-400 text-sm underline">https://my-new-portfolio-umber-iota.vercel.app</span></p>
            <p><strong>GitHub:</strong> <span className="text-blue-400 text-sm underline">github.com/Muhammad-Afzal557</span></p>
            <p><strong>LinkedIn:</strong> <span className="text-blue-400 text-sm underline">linkedin.com/in/muhammad-afzal-soomro-259717260</span></p>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-xl border-b pb-1">Technical Skills</h2>
            <ul className="text-sm space-y-1">
              <li>HTML5 / CSS3</li>
              <li>Tailwind CSS</li>
              <li>JavaScript / TypeScript</li>
              <li>React / Next.js</li>
              <li>Python</li>
              <li>Agentic AI</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mt-4">Others</h2>
            <ul className="text-sm space-y-1">
              <li>Git, GitHub, Vercel</li>
              <li>REST APIs, Figma (basic)</li>
              <li>VS Code</li>
            </ul>
          </div>

          {/* Languages */}
          <div>
            <h2 className="text-xl border-b pb-1 mt-4">Languages</h2>
            <ul className="text-sm space-y-1">
              <li>English</li>
              <li>Urdu</li>
              <li>Sindhi</li>
            </ul>
          </div>
        </div>

        {/* Right Section (Main Content) */}
        <div className="w-full md:w-2/3 p-6 space-y-10">
          
          {/* Header */}
          <div className="text-center space-y-1">
            <h1 className="text-3xl font-bold text-stone-800">Muhammad Afzal Soomro</h1>
            <h2 className="text-lg font-light text-gray-600">Web Developer</h2>
          </div>

          {/* Summary */}
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold border-b pb-1">Summary</h2>
            <p className="text-sm text-justify">
              Web Developer with hands-on experience in responsive web applications using Next.js, TypeScript, and Tailwind CSS. Skilled in Python and exploring Agentic AI to build intelligent systems. Experienced in REST APIs, clean UI design, and real-world deployment.
            </p>
            <p className="text-sm font-bold text-justify">
              Focused on building full-stack apps with scalable backends and smart features using modern tools.
            </p>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold border-b pb-1">Education</h2>
            <div className="text-sm space-y-1">
              <div>
                <strong>Matriculation:</strong> Baakh Public High School, Muhammad Abad — Grade: A
              </div>
              <div>
                <strong>Intermediate:</strong> Baakh Public High School, Muhammad Abad — Grade: A
              </div>
              <div>
                <strong>BSc:</strong> Shah Abdul Latif University
              </div>
              <div>
                <strong>Associate Degree in Computer Science:</strong> Ongoing  
                <br />
                Institute: GIAIC (Affiliated with Karachi University)
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold border-b pb-1">Practice Projects</h2>

            <div className="text-sm space-y-1">
              <h3 className="font-bold text-lg">Project 1: Developer Portfolio Website</h3>
              <p><strong>Stack:</strong> Next.js, TypeScript, Tailwind CSS</p>
              <p className="text-justify">A fully responsive personal portfolio with skills, projects, and contact form. Built with Tailwind CSS and deployed using Vercel.</p>

              <h3 className="font-bold text-lg pt-4">Project 2: Perfume E-commerce Website (In Progress)</h3>
              <p><strong>Stack:</strong> Next.js, TypeScript, Tailwind CSS</p>
              <p className="text-justify">An e-commerce UI for perfume shopping. Features wishlist, product card, mobile-first design, and future integration with payment and search filters.</p>

              <h3 className="font-bold text-lg pt-4">Project 3: Resume Builder Web App</h3>
              <p><strong>Stack:</strong> Next.js, TypeScript, Tailwind CSS</p>
              <p className="text-justify">An interactive resume builder allowing users to generate professional resumes with form input, styling, and PDF export capability (in progress).</p>

              <h3 className="font-bold text-lg pt-4">Project 3: Resume Builder Web App</h3>
              <p><strong>Stack:</strong> Next.js, TypeScript, Tailwind CSS</p>
              <p className="text-justify">An interactive resume builder allowing users to generate professional resumes with form input, styling, and PDF export capability (in progress).</p>
            </div>
          </div>
<div className='px-4 '>
            <h1 className='text-2xl font-semibold border-b border-black s'>Internship Objective
</h1>
<p className='pt-2 text-sm'>Aspiring to join a forward-thinking tech team as a web development intern where I can apply my skills in Next.js, TypeScript, Tailwind CSS, and Python. Eager to contribute to real-world projects, collaborate with professionals, and enhance my knowledge in modern technologies including Agentic AI.

</p>
        </div>
        </div>

        

      </div>
    </div>
  );
};

export default Resume;
