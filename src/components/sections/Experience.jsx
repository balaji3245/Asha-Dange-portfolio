import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: "HOD – Computer Department",
    company: "Academic Institution",
    period: "2024–Present",
    responsibilities: [
      "Overseeing departmental academic operations and curriculum planning.",
      "Managing faculty allocations and departmental resources.",
      "Driving initiatives for student skill enhancement and industry readiness."
    ],
    achievements: "Successfully implemented modern teaching pedagogies and increased student placement rates.",
    tools: ["Curriculum Planning", "Academic Administration", "Strategic Leadership"]
  },
  {
    role: "IQAC Coordinator & NSS Officer",
    company: "Academic Institution",
    period: "Ongoing",
    responsibilities: [
      "Coordinating NAAC accreditation processes and documentation.",
      "Organizing extension activities and community service programs.",
      "Implementing quality benchmarks for academic and administrative activities."
    ],
    achievements: "Spearheaded successful quality audits and organized multiple community outreach programs.",
    tools: ["NAAC Guidelines", "Quality Audits", "Event Management"]
  },
  {
    role: "QA Test Engineer",
    company: "Sagitta Consulting Solutions",
    period: "2023–2024",
    responsibilities: [
      "Designed and executed comprehensive manual and automated test cases.",
      "Performed API and Database testing to ensure data integrity and security.",
      "Collaborated with development teams using Agile/Scrum methodologies."
    ],
    achievements: "Reduced defect leakage by 30% through robust automation suites.",
    tools: ["Selenium", "Java", "Postman", "MySQL", "JIRA", "Cypress"]
  },
  {
    role: "Assistant Professor – BCA",
    company: "Academic Institution",
    period: "2019–2023",
    responsibilities: [
      "Delivered lectures on core Computer Science subjects (Java, DB, Web Tech).",
      "Mentored students for academic projects and technical presentations.",
      "Evaluated student performance and provided constructive feedback."
    ],
    achievements: "Achieved 100% pass rate in taught subjects for three consecutive semesters.",
    tools: ["Java", "Web Technologies", "Mentorship", "Evaluation"]
  },
  {
    role: "Visiting Faculty",
    company: "Academic Institution",
    period: "2018–2019",
    responsibilities: [
      "Conducted specialized sessions on software engineering and databases.",
      "Prepared comprehensive study materials and assignments."
    ],
    achievements: "Received excellent feedback from students for practical teaching approach.",
    tools: ["Software Engineering", "DBMS"]
  },
  {
    role: "Assistant Professor – BCA",
    company: "Academic Institution",
    period: "2012–2017",
    responsibilities: [
      "Initiated foundational computer science courses for undergraduate students.",
      "Organized departmental seminars and workshops."
    ],
    achievements: "Established the first departmental tech club for students.",
    tools: ["C/C++", "HTML/CSS", "Academic Planning"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-50 dark:bg-primary-light transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
            Professional Journey
          </h2>
          <div className="w-24 h-1.5 bg-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-white/10 transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''} items-start md:items-center`}
                >
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-10 h-10 rounded-full bg-white dark:bg-primary border-4 border-secondary dark:border-accent transform -translate-x-1/2 flex items-center justify-center shadow-lg z-10 mt-6 md:mt-0">
                    <Briefcase size={16} className="text-secondary dark:text-accent" />
                  </div>

                  {/* Content Card */}
                  <div className={`ml-14 md:ml-0 md:w-1/2 ${isEven ? 'md:pl-12' : 'md:pr-12'} w-full`}>
                    <div className="glass-card p-6 lg:p-8 hover:shadow-xl transition-shadow duration-300">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                        <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                          {exp.role}
                        </h3>
                        <span className="inline-block px-3 py-1 bg-secondary/10 dark:bg-accent/10 text-secondary dark:text-accent rounded-full text-sm font-medium whitespace-nowrap">
                          {exp.period}
                        </span>
                      </div>
                      
                      <h4 className="text-md font-medium text-slate-600 dark:text-slate-400 mb-4">
                        {exp.company}
                      </h4>
                      
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Responsibilities:</p>
                          <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 text-sm space-y-1">
                            {exp.responsibilities.map((resp, i) => (
                              <li key={i}>{resp}</li>
                            ))}
                          </ul>
                        </div>
                        
                        {exp.achievements && (
                          <div>
                            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">Key Achievement:</p>
                            <p className="text-sm text-slate-600 dark:text-slate-400 italic">
                              {exp.achievements}
                            </p>
                          </div>
                        )}

                        <div className="pt-4 border-t border-slate-100 dark:border-white/10 flex flex-wrap gap-2">
                          {exp.tools.map((tool, i) => (
                            <span key={i} className="px-2.5 py-1 bg-slate-100 dark:bg-primary text-slate-600 dark:text-slate-300 text-xs font-medium rounded-md border border-slate-200 dark:border-white/5">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
