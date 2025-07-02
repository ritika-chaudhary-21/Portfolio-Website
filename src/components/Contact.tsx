
import React, { useState } from 'react';
import { Contact as ContactIcon, User, Star, Mail, MapPin, ExternalLink, Handshake } from 'lucide-react';
import { SiLinkedin, SiGithub, SiLeetcode, SiHackerrank  } from "react-icons/si";
import { FaFileAlt } from "react-icons/fa";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:chaudhary.ritika.2105@gmail.com?subject=${subject}&body=${body}`;

    window.open(mailtoLink);
    setIsSubmitting(false);

    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "chaudhary.ritika.2105@gmail.com",
      link: "mailto:chaudhary.ritika.2105@gmail.com"
    },
    {
      icon: Handshake,
      label: "Availability",
      value: "Actively exploring internships, full-time roles and project collaborations",
      link: null
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Open to remote and in-office opportunities across Delhi-NCR",
      link: null
    }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ritika-chaudhary-rc/",
      icon: <SiLinkedin />,
      color: "from-blue-600 to-blue-700"
    },
    {
      name: "GitHub",
      url: "https://github.com/ritika-chaudhary-21",
      icon: <SiGithub />,
      color: "from-gray-700 to-gray-800"
    }//,
    //{
      //name: "Leetcode",
      //url: "https://leetcode.com/u/ritikarc2105/",
      //icon: <SiLeetcode />,
      //color: "from-yellow-500 to-orange-500"
    //},
    //{
     // name: "Hackerrank",
     // url: "https://www.hackerrank.com/profile/ritikarc2105",
     // icon: <SiHackerrank />,
     // color: "from-[#2EC866] to-[#29B35E]"
    //}
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold font-serif mb-6 bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you and discuss how we can work together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="animate-slide-up">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              {/* Contact Info */}
            {/*<div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">*/}
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                  <User className="text-green-600" size={24} />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800">Get In Touch</h3>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-center space-x-3">
                      <Icon className="text-gray-600" size={20} />
                      <div>
                        <h4 className="font-semibold text-gray-800">{info.label}</h4>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-blue-600 hover:text-blue-700 transition-colors duration-200 flex items-center space-x-1"
                          >
                            <span>{info.value}</span>
                            <ExternalLink size={14} />
                          </a>
                        ) : (
                          <p className="text-gray-600">{info.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}

                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-3">
                    <Star className="text-gray-600" size={20} />
                    <div>
                      <h4 className="font-semibold text-gray-800">Response Time</h4>
                      <p className="text-gray-600">Usually within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> 

          
          {/* Contact Info & Social Links */}
          <div className="space-y-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {/* Social Links */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                  <Star className="text-purple-600" size={24} />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800">Connect Online</h3>
              </div>

              <div className="grid grid-cols-2 gap-2">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 bg-gradient-to-r ${link.color} text-white rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2 text-sm font-semibold`}
                  >
                    <span className="text-2xl">{link.icon}</span>
                    <span>{link.name}</span>
                  </a>

                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gray-50 rounded-xl p-6 text-center border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Ready to Collaborate?</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Whether you have a data analysis project, need insights from your data, or want to explore
                AI/ML solutions, I'm here to help bring your ideas to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://calendly.com/ameliarc2105/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 inline-flex items-center justify-center space-x-2"
                >
                  <span>Schedule a Call</span>
                  <ExternalLink size={16} />
                </a>
                <button
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200"
                >
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
