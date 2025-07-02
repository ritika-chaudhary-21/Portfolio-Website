
import React from 'react';
import { Briefcase, Link, Code } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Movie Genre Classifier",
      description: "Built a machine learning model to classify movie genres based on plot descriptions using NLP and deployed it with Streamlit.",
      image: "https://res.cloudinary.com/duhe2ksmv/image/upload/v1751049819/ChatGPT_Image_Jun_27_2025_11_53_59_PM_vnvgf9.png",
      tags: ["NLP", "Scikit-learn", "TF-IDF", "Streamlit"],
      github: "https://github.com/ritika-chaudhary-21/Machine-Learning-Projects/tree/main/Movie%20Genre%20Classification"
    },
    {
      title: "Hiring Process Analytics",
      description: "Analyzed recruitment patterns and hiring efficiency for an organization.",
      image: "https://res.cloudinary.com/duhe2ksmv/image/upload/v1750615677/Hiring_ycg302.png",
      tags: ["Excel", "Data Analysis", "Visualisation"],
      github: "https://github.com/ritika-chaudhary-21/Data_Analytics_Projects/tree/main/Hiring%20Process%20Analytics"
    },
    {
      title: "Iris Flower Prediction",
      description: "Implemented a classification model to identify iris flower species based on petal and sepal features",
      image: "https://res.cloudinary.com/duhe2ksmv/image/upload/v1750615669/iris_y8yody.jpg",
      tags: ["Python", "Time Series", "DAX"],
      github: "https://github.com/ritika-chaudhary-21/Machine-Learning-Projects/tree/main/Iris%20Flower%20Prediction"
    },
    {
      title: "OutfitFlex Wardrobe",
      description: "An AI-powered virtual wardrobe app that allows users to store clothing images, analyze outfits, and receive personalized styling recommendations.",
      image: "https://res.cloudinary.com/duhe2ksmv/image/upload/v1750615669/outfitflex_zes6gs.webp",
      tags: ["Machine Learning", "App Development", "React", "TypeScript", "Python"],
      github: "https://github.com/ritika-chaudhary-21/OutfitFlex-App"
    },
    {
      title: "Subscription Churn Prediction",
      description: "Developed a model to predict customer churn and help businesses retain subscribers.",
      image: "https://res.cloudinary.com/duhe2ksmv/image/upload/v1750615670/subscription_zi2wow.png",
      tags: ["Machine Learning", "Python", "Streamlit"],
      github: "https://github.com/ritika-chaudhary-21/Machine-Learning-Projects/tree/main/Subscription%20Service%20Churn%20Prediction"
    },
    {
      title: "Chronic Kidney Disease Prediction Model",
      description: "Built a predictive model to classify patients at risk of Chronic Kidney Disease (CKD).",
      image: "https://res.cloudinary.com/duhe2ksmv/image/upload/v1750615664/ckd_d0qttv.webp",
      tags: ["Python", "Pandas", "NumPy", "Data Validation", "Machine Learning"],
      github: "https://github.com/ritika-chaudhary-21/Chronic-Kidney-Disease"
    },
    {
      title: "Impact of Car Features",
      description: "Examined how different car features impact pricing and customer preferences.",
      image: "https://res.cloudinary.com/duhe2ksmv/image/upload/v1750615667/Car_features_awqsiy.webp",
      tags: ["Data Analysis", "Feature Engineering", "Excel", "Data Preprocessing"],
      github: "https://github.com/ritika-chaudhary-21/Data_Analytics_Projects/tree/main/Impact%20Of%20Car%20Features"
    },
    {
      title: "IMDB Movie Analysis",
      description: "Analyzed IMDB movie data to study trends in ratings, genres, and audience sentiment.",
      image: "https://res.cloudinary.com/duhe2ksmv/image/upload/v1750615667/IMDB_tukdix.png",
      tags: ["Data Analysis", "Feature Engineering", "Excel", "Data Preprocessing"],
      github: "https://github.com/ritika-chaudhary-21/Data_Analytics_Projects/tree/main/IMDB"
    },
    {
      title: "Bank Loan Case Study",
      description: "Analyzed IMDB movie data to study trends in ratings, genres, and audience sentiment.",
      image: "https://res.cloudinary.com/duhe2ksmv/image/upload/v1750615666/Loan_Case_iukgdw.png",
      tags: ["Data Analysis", "Feature Engineering", "Excel", "Data Preprocessing"],
      github: "https://github.com/ritika-chaudhary-21/Data_Analytics_Projects/tree/main/Bank%20Loan%20Case"
    },
    {
      title: "Titanic Survival Prediction",
      description: "Analyzed Titanic dataset to predict survival probability based on passenger details.",
      image: "https://res.cloudinary.com/duhe2ksmv/image/upload/v1750615669/titanic_ujzc3n.jpg",
      tags: ["Machine Learning", "Feature Engineering", "Python", "Data Preprocessing"],
      github: "https://github.com/ritika-chaudhary-21/Machine-Learning-Projects/tree/main/Titanic%20Survival%20Prediction"
    },
    {
      title: "Instagram User Analytics",
      description: "Performed data analysis on Instagram user behavior to identify trends in engagement and content performance.",
      image: "https://res.cloudinary.com/duhe2ksmv/image/upload/v1750615668/Instagram_xokbgx.png",
      tags: ["Data Analysis", "Feature Engineering", "SQL", "Data Preprocessing"],
      github: "https://github.com/ritika-chaudhary-21/Data_Analytics_Projects/tree/main/Instagram%20User%20Analytics"
    },
    {
      title: "ABC Call Volume Trend",
      description: "Predicted call volume trends using historical data to optimize customer service operations.",
      image: "https://res.cloudinary.com/duhe2ksmv/image/upload/v1750615668/ABC_Project_h1amgt.png",
      tags: ["Data Analysis", "Feature Engineering", "Excel", "Data Preprocessing"],
      github: "https://github.com/ritika-chaudhary-21/Data_Analytics_Projects/tree/main/ABC%20Call%20Volume%20Trend%20Analysis"
    },
    {
      title: "Operation & Metric Analytics",
      description: "Analyzed operational data and user metrics using advanced SQL to uncover trends and investigate spikes in engagement.",
      image: "https://res.cloudinary.com/duhe2ksmv/image/upload/v1750615666/Operation_ehmzv0.png",
      tags: ["Data Analysis", "Feature Engineering", "SQL", "Data Preprocessing"],
      github: "https://github.com/ritika-chaudhary-21/Data_Analytics_Projects/tree/main/Operation%20Analytics%20and%20Investigating%20Metric%20Spikes"
    }
  ];

  return (
    <section className="section-padding bg-slate-50">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold font-serif mb-6 bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A showcase of my data analysis and machine learning projects that demonstrate practical applications of AI and analytics
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="animate-scale-in card-elegant overflow-hidden hover-lift group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-slate-900 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-slate-800 font-serif group-hover:text-slate-900 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-4 flex items-center space-x-2 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors duration-200 text-sm"
                  >
                    <Code size={16} />
                    <span>Code</span>
                  </a>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium border border-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/*<div className="text-center mt-12 animate-fade-in">
          <button className="px-8 py-4 bg-slate-900 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:bg-slate-800 transform hover:scale-105 transition-all duration-300">
            View All Projects
          </button>
        </div>*/}
      </div>
    </section>
  );
};

export default Projects;
