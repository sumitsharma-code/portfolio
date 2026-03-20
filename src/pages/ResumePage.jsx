import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Download, ExternalLink, Phone, Mail, Linkedin, Github } from 'lucide-react';

const ResumePage = () => {
  return (
    <div className="min-h-screen bg-[#f4f4f0]" style={{ fontFamily: "'Georgia', serif" }}>

      {/* Top Bar */}
      <div className="bg-navy text-white px-6 md:px-12 py-4 flex justify-between items-center sticky top-0 z-50">
        <Link to="/" className="flex items-center gap-2 text-slate hover:text-teal transition-colors text-sm font-mono uppercase tracking-widest">
          <ArrowLeft size={16} /> Back to Portfolio
        </Link>
        <a
          href="/sumitsharmaresume.pdf"
          download
          className="flex items-center gap-2 bg-teal text-navy px-5 py-2 font-mono text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors"
        >
          <Download size={14} /> Download PDF
        </a>
      </div>

      {/* Resume Document */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-[850px] mx-auto bg-white shadow-2xl my-10 px-10 md:px-16 py-12"
      >

        {/* Header */}
        <div className="text-center mb-6 pb-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-1 tracking-wide">Sumit Sharma</h1>
          <p className="text-gray-600 text-sm mb-3">Beas, Punjab 143201</p>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-1 text-xs text-gray-700">
            <span className="flex items-center gap-1"><Phone size={11}/> +91 7710145635</span>
            <span className="flex items-center gap-1"><Mail size={11}/> sumitsha711@gmail.com</span>
            <a href="https://www.linkedin.com/in/sumiiitsharma/" target="_blank" rel="noreferrer"
               className="flex items-center gap-1 hover:underline">
              <Linkedin size={11}/> linkedin.com/in/sumiiitsharma/
            </a>
            <a href="https://github.com/sumitsharma-code" target="_blank" rel="noreferrer"
               className="flex items-center gap-1 hover:underline">
              <Github size={11}/> github.com/sumitsharma-code
            </a>
          </div>
        </div>

        <hr className="border-gray-900 border-t-2 mb-5" />

        {/* Career Objective */}
        <Section title="Career Objective">
          <p className="text-xs text-gray-700 leading-relaxed">
            To build a strong career as a software engineer by developing scalable and user-focused applications, while continuously enhancing my skills in modern technologies and problem-solving. I aim to contribute to innovative projects that create real-world impact, while also growing as a creative professional by integrating my passion for technology and music.
          </p>
        </Section>

        {/* Projects */}
        <Section title="Projects">
          <Project
            title="Audientra – Music Streaming Backend System"
            tech="Node.js, Express.js, MongoDB, JWT, ImageKit"
            date="Jun 2025 – Jul 2025"
            bullets={[
              "Architected a backend music streaming system enabling secure user authentication, track uploads, and playlist management using Node.js and Express.js.",
              "Designed and implemented RESTful APIs with JWT-based authentication, structured MongoDB (Mongoose) schemas, and optimized CRUD operations for users, tracks, and playlists.",
              "Integrated ImageKit cloud storage with Multer middleware, environment-based configuration (.env), and modular backend architecture to ensure secure file uploads, media handling, and production-ready scalability.",
            ]}
            link={{ label: "https://github.com/sumitsharma-code/spotify-clone", href: "https://github.com/sumitsharma-code/spotify-clone" }}
          />
          <Project
            title="Quantra – Inventory App"
            tech="React.js, Node.js, Express.js, MongoDB, JWT"
            date="Dec 2025 – Jan 2026"
            bullets={[
              "Developed a full-stack inventory management system using MongoDB, Express.js, React, and Node.js to track products, orders, and stock levels in real time.",
              "Built scalable RESTful APIs for inventory operations including product management, order tracking, and real-time stock updates, while implementing JWT-based authentication and role-based access control for secure backend operations.",
              "Designed a responsive analytics dashboard to visualize key metrics such as revenue, product availability, and active orders, enabling efficient inventory monitoring and data-driven decision making.",
            ]}
            link={{ label: "https://github.com/sumitsharma-code/inventory-app", href: "https://github.com/sumitsharma-code/inventory-app" }}
          />
          <Project
            title="Hospital Patient Management System"
            tech="C, C++"
            date="Jun 2025 – Jul 2025"
            bullets={[
              "Engineered a console-based Hospital Patient Management System in C++, leveraging singly linked lists for efficient in-memory storage, insertion, deletion, and traversal of patient records.",
              "Designed and integrated file-based data persistence (File I/O) to reliably store and retrieve patient information, ensuring data consistency across program executions.",
              "Enhanced system reliability through unique ID validation, structured input handling, and a modular multi-file architecture, improving maintainability and fault tolerance.",
            ]}
            link={{ label: "https://github.com/sumitsharma-code/HospitalSystem", href: "https://github.com/sumitsharma-code/HospitalSystem" }}
          />
        </Section>

        {/* Training */}
        <Section title="Training">
          <Project
            title="Credit-Linked program in Artificial Intelligence & Machine Learning (IIT Guwahati)"
            tech=""
            date="May 2025 – Mar 2026"
            bullets={[
              "Pursuing an industry-oriented AI & Machine Learning curriculum covering data preprocessing, supervised and unsupervised learning, model evaluation, and performance optimization.",
              "Gaining hands-on experience in building, training, and validating ML models using real-world datasets with practical implementation of regression, classification, and clustering algorithms.",
              "Applying concepts such as feature engineering, cross-validation, overfitting prevention, and evaluation metrics (Accuracy, Precision, Recall, F1-score) in project-based assignments.",
            ]}
          />
        </Section>

        {/* Certificates */}
        <Section title="Certificates / Certifications">
          <div className="space-y-2 text-sm text-gray-800">
            <CertRow label="ChatGPT-4 Prompt Engineering: ChatGPT, Generative AI & LLM" date="Aug 2025" />
            <CertRow label="Fundamentals of Data Structures using C++" date="Jan 2025" />
          </div>
        </Section>

        {/* Skills */}
        <Section title="Skills">
          <div className="text-sm text-gray-800 space-y-1.5">
            <p><strong>Languages:</strong> C++, Python, JavaScript</p>
            <p><strong>Technologies/Frameworks:</strong> HTML, CSS, React JS, Node JS, MongoDB, Tailwind CSS, Git, GitHub, Blender</p>
            <p><strong>Domain Skills:</strong> Data Structures and Algorithms, Problem-Solving, Responsive Web Design, Object-Oriented Programming</p>
          </div>
        </Section>

        {/* Education */}
        <Section title="Education">
          <EduRow
            school="Lovely Professional University"
            dates="2023 – 2027"
            degree="B.Tech CSE — CGPA: 7.87"
            place="Phagwara, Punjab"
          />
          <EduRow
            school="Pathseekers School"
            dates="2021 – 2022"
            degree="12th  —  Percentage: 81.4%"
            place="Beas, Punjab"
          />
          <EduRow
            school="Pathseekers School"
            dates="2019 – 2020"
            degree="10th  —  Percentage: 89.2%"
            place="Beas, Punjab"
          />
        </Section>

      </motion.div>
    </div>
  );
};

/* ── Sub-components ────────────────────────────────────────────── */

const Section = ({ title, children }) => (
  <div className="mb-6">
    <h2 className="text-base font-bold text-gray-900 uppercase tracking-wide border-b border-gray-400 pb-0.5 mb-3">
      {title}
    </h2>
    {children}
  </div>
);

const Project = ({ title, tech, date, bullets, link }) => (
  <div className="mb-4">
    <div className="flex justify-between items-baseline flex-wrap gap-2">
      <p className="text-sm font-bold text-gray-900">
        {title}
        {tech && <span className="font-normal text-gray-700"> | <em>{tech}</em></span>}
      </p>
      <span className="text-xs text-gray-600 whitespace-nowrap font-medium">{date}</span>
    </div>
    <ul className="list-disc ml-5 mt-1 space-y-0.5">
      {bullets.map((b, i) => (
        <li key={i} className="text-xs text-gray-700 leading-relaxed">{b}</li>
      ))}
      {link && (
        <li className="text-xs text-gray-700">
          Repository Link:{' '}
          <a href={link.href} target="_blank" rel="noreferrer"
             className="font-bold text-blue-700 hover:underline break-all">
            {link.label}
          </a>
        </li>
      )}
    </ul>
  </div>
);

const CertRow = ({ label, date }) => (
  <div className="flex justify-between items-baseline gap-4 flex-wrap">
    <span className="text-sm text-gray-800">{label}</span>
    <span className="text-xs text-gray-600 whitespace-nowrap">{date}</span>
  </div>
);

const EduRow = ({ school, dates, degree, place }) => (
  <div className="mb-3">
    <div className="flex justify-between items-baseline flex-wrap gap-2">
      <span className="text-sm font-bold text-gray-900">{school}</span>
      <span className="text-xs text-gray-600 whitespace-nowrap font-medium">{dates}</span>
    </div>
    <div className="flex justify-between items-baseline flex-wrap gap-2">
      <span className="text-xs text-gray-700">{degree}</span>
      <span className="text-xs text-gray-600 italic whitespace-nowrap">{place}</span>
    </div>
  </div>
);

export default ResumePage;
