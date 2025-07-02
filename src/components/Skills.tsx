
import React from 'react';
import { Code, Database, BarChart, Brain, Cloud, TrendingUp, Wrench } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: ["HTML", "CSS", "JavaScript", "Python", "SQL", "Java"],
      color: "blue"
    },
    {
      title: "Databases", 
      icon: Database,
      skills: ["MySQL", "MongoDB"],
      color: "green"
    },
    {
      title: "Tools & Platform",
      icon: Wrench,
      skills: ["GitHub", "Jupyter Notebook", "Google Colab", "VS Code", "PowerBI", "Excel"],
      color: "purple"
    },
    {
      title: "Libraries",
      icon: Brain,
      skills: ["Scikit-Learn", "Pandas", "NumPy", "Seaborn", "Matplotlib"],
      color: "orange"
    },
    {
      title: "Other Skills",
      icon: TrendingUp,
      skills: ["Machine Learning", "Data Analysis", "Data Visualization", "Communication", "Team Collaboration"],
      color: "pink"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        iconBg: "from-blue-100 to-blue-50",
        iconText: "text-blue-700",
        badge: "bg-gradient-to-r from-blue-100 to-blue-50 text-blue-700 border-blue-200",
        border: "border-blue-400"
      },
      green: {
        iconBg: "from-green-100 to-green-50",
        iconText: "text-green-700",
        badge: "bg-gradient-to-r from-green-100 to-green-50 text-green-700 border-green-200",
        border: "border-green-400"
      },
      purple: {
        iconBg: "from-purple-100 to-purple-50",
        iconText: "text-purple-700",
        badge: "bg-gradient-to-r from-purple-100 to-purple-50 text-purple-700 border-purple-200",
        border: "border-purple-400"
      },
      orange: {
        iconBg: "from-orange-100 to-orange-50",
        iconText: "text-orange-700",
        badge: "bg-gradient-to-r from-orange-100 to-orange-50 text-orange-700 border-orange-200",
        border: "border-orange-400"
      },
      pink: {
        iconBg: "from-pink-100 to-pink-50",
        iconText: "text-pink-700",
        badge: "bg-gradient-to-r from-pink-100 to-pink-50 text-pink-700 border-pink-200",
        border: "border-pink-400"
      }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section className="section-padding bg-slate-50">
      <div className="section-container">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold font-serif mb-6 bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit of technologies and methodologies I leverage to transform data into actionable insights
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Skills Categories */}
          <div className="space-y-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              const colors = getColorClasses(category.color);
              return (
                <div 
                  key={category.title}
                  className={`animate-fade-in card-elegant p-6 hover-lift border-l-4 ${colors.border}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center mb-6">
                    <div className={`w-10 h-10 bg-gradient-to-r ${colors.iconBg} rounded-lg flex items-center justify-center mr-4`}>
                      <Icon size={20} className={colors.iconText} />
                    </div>
                    <h3 className="text-xl font-semibold bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 bg-clip-text text-transparent font-serif">{category.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill) => (
                      <span 
                        key={skill}
                        className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 hover:scale-105 ${colors.badge}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Skills Illustration */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 bg-white rounded-3xl flex items-center justify-center shadow-lg border border-slate-200 card-elegant">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-slate-800 to-slate-600 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
                    <Code className="w-16 h-16 text-white" />
                  </div>
                  <div className="space-y-2">
                    <div className="w-24 h-2 bg-gradient-to-r from-blue-300 to-blue-400 rounded mx-auto"></div>
                    <div className="w-16 h-2 bg-gradient-to-r from-green-300 to-green-400 rounded mx-auto"></div>
                    <div className="w-20 h-2 bg-gradient-to-r from-purple-300 to-purple-400 rounded mx-auto"></div>
                  </div>
                </div>
              </div>
              
              {/* Floating skill icons */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center animate-bounce border border-slate-200">
                <Database className="w-6 h-6 text-green-600" />
              </div>
              <div className="absolute bottom-8 left-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center animate-bounce border border-slate-200" style={{ animationDelay: '1s' }}>
                <Brain className="w-6 h-6 text-purple-600" />
              </div>
              <div className="absolute top-1/2 -right-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center animate-bounce border border-slate-200" style={{ animationDelay: '2s' }}>
                <BarChart className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>
        </div>

{/*
        { Currently Learning Section}
        <div className="mt-20 card-elegant p-8 lg:p-12 animate-fade-in border-l-4 border-slate-400">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-slate-100 to-slate-50 rounded-xl mb-4">
              <Cloud className="w-6 h-6 text-slate-700" />
            </div>
            <h3 className="text-2xl font-semibold bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 bg-clip-text text-transparent font-serif mb-3">Currently Expanding My Expertise</h3>
            <p className="text-slate-600">Continuously learning and adapting to emerging technologies</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: 'Deep Learning', icon: '🧠' },
              { name: 'MLOps', icon: '⚙️' },
              { name: 'AWS Cloud', icon: '☁️' },
              { name: 'Advanced Statistics', icon: '📊' },
              { name: 'NLP', icon: '💬' },
              { name: 'Computer Vision', icon: '👁️' }
            ].map((skill) => (
              <div 
                key={skill.name}
                className="bg-gradient-to-r from-slate-50 to-white border border-slate-200 rounded-xl p-4 text-center hover:shadow-md transition-all duration-300 hover:scale-105 hover:from-slate-100 hover:to-slate-50"
              >
                <div className="text-2xl mb-2">{skill.icon}</div>
                <span className="text-sm font-medium text-slate-700">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>*/}
      </div>
    </section>
  );
};

export default Skills;
