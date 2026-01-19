
import React from 'react';
import { ArrowDown, Sparkles, Code, Database, Brain, Terminal } from 'lucide-react';

interface HeroProps {
  onScrollToNext: () => void;
}

const Hero: React.FC<HeroProps> = ({ onScrollToNext }) => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Tech-themed background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-green-100 to-blue-100 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>
      
      {/* Floating tech icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Code className="absolute top-1/4 left-10 text-blue-300 opacity-60 animate-float" size={24} />
        <Database className="absolute top-1/3 right-16 text-green-300 opacity-60 animate-float-delayed" size={20} />
        <Brain className="absolute bottom-1/3 left-20 text-purple-300 opacity-60 animate-float" size={22} />
        <Terminal className="absolute bottom-1/4 right-12 text-orange-300 opacity-60 animate-float-delayed" size={18} />
      </div>
      
      <div className="relative z-10 text-center section-container">
        <div className="animate-fade-in">
          <div className="mb-16 mt-20">
            <div className="relative w-44 h-44 mx-auto mb-8">
              {/* Tech-themed rings around photo */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 rounded-full opacity-20 animate-spin-slow"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 rounded-full opacity-30 animate-spin-reverse"></div>
              
              <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full shadow-xl"></div>
              <div className="absolute inset-2 bg-white rounded-full shadow-inner flex items-center justify-center border border-slate-100">
                <img 
                  src="/Photo.jpeg" 
                  alt="Ritika Chaudhary" 
                  className="w-36 h-36 rounded-full object-cover"
                />
              </div>
              
              {/* Tech badges around photo */}
              <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <Code className="w-5 h-5 text-white" />
              </div>
              <div className="absolute -bottom-3 -left-3 w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg animate-pulse" style={{ animationDelay: '1s' }}>
                <Database className="w-5 h-5 text-white" />
              </div>
              <div className="absolute top-1/2 -right-5 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg animate-pulse" style={{ animationDelay: '2s' }}>
                <Brain className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-serif mb-6 bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 bg-clip-text text-transparent tracking-tight">
            Ritika Chaudhary
          </h1>
          
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-full mb-8 shadow-sm backdrop-blur-sm">
            <Terminal className="w-5 h-5 text-blue-600 mr-3" />
            <span className="text-lg font-medium bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">
              Tech Student • Data Analyst • ML Enthusiast
            </span>
          </div>
          
          <p className="text-lg text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Passionate about <span className="text-blue-600 font-semibold">web development</span>, 
            <span className="text-green-600 font-semibold"> data analysis</span>, and 
            <span className="text-purple-600 font-semibold"> machine learning</span>. 
            Transforming complex data into meaningful insights and building intelligent solutions for tomorrow.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button 
              onClick={onScrollToNext}
              className="group px-8 py-4 bg-gradient-to-r from-slate-800 to-slate-900 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:from-slate-700 hover:to-slate-800 transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
            >
              <span>Explore My Tech Journey</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
            </button>
            
            <button 
              onClick={() => window.open('mailto:ritika@example.com')}
              className="px-8 py-4 border-2 border-slate-300 text-slate-700 rounded-xl font-semibold hover:bg-slate-50 hover:border-slate-400 transition-all duration-300 flex items-center space-x-2"
            >
              <Code className="w-4 h-4" />
              <span>Let's Code Together</span>
            </button>
          </div>
        </div>
      </div>
      
      <button 
        onClick={onScrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 p-4 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce border border-slate-200 backdrop-blur-sm"
      >
        <ArrowDown size={20} className="text-slate-600" />
      </button>
    </section>
  );
};

export default Hero;
