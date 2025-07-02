
import React from 'react';
import { Briefcase, FileText } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Web Developer Intern",
      company: "Odyssey8",
      period: "Apr 2025 - Jun 2025",
      location: "Remote",
      certificateUrl: "https://res.cloudinary.com/duhe2ksmv/image/upload/v1750964149/Odyssey8_hyg9x4.png",
      achievements: [
        "Built a responsive travel website using React.js, JavaScript, and Cloudinary.",
        "Wrote SEO-friendly content by extracting key info from raw itineraries.",
        "Sourced and optimized multimedia assets to improve UX and performance."
      ],
      technologies: ["HTML", "CSS", "JavaScript", "React Js", "SEO"],
      gradient: "gradient-blue-purple"
    },
    {
      title: "Machine Learning Intern",
      company: "YHills",
      period: "Jul 2024 – Aug 2024",
      location: "Remote",
      certificateUrl: "https://res.cloudinary.com/duhe2ksmv/image/upload/v1750964150/Screenshot_2025-06-27_002246_xult3k.png",
      achievements: [
        "Developed supervised machine learning models to predict outcomes across different domains.",
        "Utilized logistic regression, decision trees, and evaluation metrics such as confusion matrix and accuracy score."
      ],
      technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Jupyter Notebook"],
      gradient: "gradient-blue-mint"
    },
    {
      title: "Data Science Intern",
      company: "EISystems ",
      period: "May 2024 - Jul 2024",
      location: "Remote",
      certificateUrl: "https://res.cloudinary.com/duhe2ksmv/image/upload/v1750964149/Screenshot_2025-06-27_002201_dawqtw.png",
      achievements: [
        "Collaborated on projects using Python and Scikit-Learn",
        "Built and fine-tuned machine learning models for predictions",
        "Enhanced model accuracy through data preprocessing and evaluation"
      ],
      technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Jupyter Notebook"],
      gradient: "gradient-peach-lavender"
    },
    {
      title: "Data Analyst Intern",
      company: "Trainity",
      period: "Jul 2023 – Oct 2023",
      location: "Remote",
      certificateUrl: "https://res.cloudinary.com/duhe2ksmv/image/upload/v1750964148/Screenshot_2025-06-27_002031_vpes6i.png",
      achievements: [
        "Designed and executed complex SQL queries to extract, clean, and analyze data from relational databases.",
        "Completed 8 hands-on data analysis projects, driving actionable insights and enhancing process efficiency.",
        "Presented findings through visualizations and reports, contributing to informed business decisions."
      ],
      technologies: ["Data Analysis", "Power BI", "Excel", "SQL", "Statistics"],
      gradient: "gradient-peach-lavender"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold font-serif mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Experience & Journey
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My professional journey and hands-on experience in data analytics and machine learning
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 to-pink-400 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className="animate-slide-up relative"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-white shadow-lg hidden md:block"></div>

                <div className="md:ml-20">
                  <div className="glass-effect rounded-3xl p-8 shadow-xl hover-lift">

                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      {/* Left side: Title, Company, Duration */}
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <div className={`w-12 h-12 bg-${exp.gradient} rounded-xl flex items-center justify-center mr-4 shadow-lg`}>
                            <Briefcase size={24} className="text-gray-700" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-semibold text-gray-800">{exp.title}</h3>
                            <p className="text-purple-600 font-medium">{exp.company}</p>
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center text-gray-500 text-sm mb-2 ml-16">
                          <span className="flex items-center mr-6">
                            <FileText size={16} className="mr-2" />
                            {exp.period}
                          </span>
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      {/* Right side: Certificate Button */}
                      {exp.certificateUrl && (
                        <div className="mt-4 lg:mt-0 lg:ml-8 flex-shrink-0">
                          <a
                            href={exp.certificateUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-md font-medium hover:from-purple-200 hover:to-pink-200 transition"
                          >
                            View Certificate
                          </a>
                        </div>
                      )}
                    </div>



                    <div className="ml-16 mb-6">
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">Description</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-600">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="ml-16">
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center animate-fade-in">
          <div className="glass-effect rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Looking Forward</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              I'm actively seeking opportunities to apply my data analytics and machine learning skills in challenging
              real-world projects. Open to internships, research positions, and collaborative projects that push the
              boundaries of what's possible with data.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
              <a href="https://drive.google.com/file/d/1aJyvf4K5zmTAj8YmUxclPiZsZt_BuPd2/view?usp=sharing">Download Resume</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
