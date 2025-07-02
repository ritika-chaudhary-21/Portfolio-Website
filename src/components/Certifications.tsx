
import React from 'react';
import { Star, Check } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: "Business Analyst Certification",
      issuer: "Agile Enterprise Coach, London",
      date: "2025",
      skills: ["Business Analyst"],
      image: "https://res.cloudinary.com/duhe2ksmv/image/upload/v1750959389/Business_Analyst_Certification_bcxnp0.png",
      verified: true,
      gradient: "gradient-peach-lavender"
    },
    {
      title: "PyTorch Essential Training: DL",
      issuer: "LinkedIn Learning",
      date: "2025",
      skills: ["Python", "Pytorch"],
      image: "https://res.cloudinary.com/duhe2ksmv/image/upload/v1750618978/linkedin_dl_ehchsq.png",
      verified: true,
      gradient: "gradient-pink-purple"
    },
    {
      title: "Full Stack Web Development Course",
      issuer: "Udemy",
      date: "2025",
      skills: ["HTML", "CSS", "JavaScript", "Python"],
      image: "https://res.cloudinary.com/duhe2ksmv/image/upload/v1750618978/full_stack_tyroxj.png",
      verified: true,
      gradient: "gradient-pink-purple"
    },
    {
      title: "Exploratory Data Analysis",
      issuer: "Infosys",
      date: "2025",
      skills: ["EDA", "Python"],
      image: "https://res.cloudinary.com/duhe2ksmv/image/upload/v1750618979/eda_infosys_vz7u1y.png",
      verified: true,
      gradient: "gradient-pink-purple"
    },
    {
      title: "Python for Software Engineering",
      issuer: "Chegg",
      date: "2024",
      skills: ["Python"],
      image: "https://res.cloudinary.com/duhe2ksmv/image/upload/v1750618980/Python_for_Software_Engineering_certificate_gaoaau.png",
      verified: true,
      gradient: "gradient-peach-lavender"
    },
    {
      title: "Getting Started with AI",
      issuer: "IBM",
      date: "2024",
      skills: ["Python", "Pandas", "NumPy", "Data Visualization"],
      image: "https://res.cloudinary.com/duhe2ksmv/image/upload/v1750618978/ibm_ai_vkocyb.png",
      verified: true,
      gradient: "gradient-blue-mint"
    },
    {
      title: "TCS iON Career Edge - Young Professional",
      issuer: "TCS iON",
      date: "2023",
      skills: ["Communication Skills", "Presentation Skills", "Soft Skills", "Group Discussion Skills", "Interview Skills","Business Etiquette", "Effective Email Writing"],
      image: "https://res.cloudinary.com/duhe2ksmv/image/upload/v1750618980/tcs_mg3dqq.png",
      verified: true,
      gradient: "gradient-blue-mint"
    },
    {
      title: "Azure AI Fundamentals",
      issuer: "Microsoft",
      date: "2023",
      skills: ["Azure Basics", "AI Fundamentals"],
      image: "https://res.cloudinary.com/duhe2ksmv/image/upload/v1750618978/microsoft_hnqtxx.png",
      verified: true,
      gradient: "gradient-pink-purple"
    },
    {
      title: "Data Analytics Training",
      issuer: "Trainity",
      date: "2023",
      skills: ["Data Analysis", "SQL", "Tableau", "PowerBI", "Excel", "Statistics"],
      image: "https://res.cloudinary.com/duhe2ksmv/image/upload/v1750618980/trainity_xsb9al.png",
      verified: true,
      gradient: "gradient-pink-purple"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold font-serif mb-6 bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 bg-clip-text text-transparent">
            Certifications & Achievements
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional certifications and courses that validate my expertise in data science, machine learning and web development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div 
              key={cert.title}
              className="animate-scale-in glass-effect rounded-3xl overflow-hidden shadow-xl hover-lift group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-${cert.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                
                {cert.verified && (
                  <div className="absolute top-4 right-4 bg-green-500 text-white p-2 rounded-full shadow-lg">
                    <Check size={16} />
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 leading-tight group-hover:text-purple-600 transition-colors duration-200">
                      {cert.title}
                    </h3>
                    <p className="text-purple-600 font-medium text-sm mt-1">{cert.issuer}</p>
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-500 text-sm mb-4">{cert.date}</p>
                  </div>
                </div>
                
                
                
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
