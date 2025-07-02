
import React from 'react';
import { User, Book, Star, Code, Database, Brain } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold font-serif mb-6 bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Discover my journey, passion, and what drives me in the world of technology and data
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <div className="card-elegant p-8 hover-lift border-l-4 border-blue-400">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mr-4">
                  <User className="text-blue-700" size={24} />
                </div>
                <h3 className="text-2xl font-semibold bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 bg-clip-text text-transparent font-serif">My Tech Story</h3>
              </div>
              
              <p className="text-slate-600 leading-relaxed mb-6">
                I’m a third-year Computer Science and Technology student, specializing in Artificial Intelligence and Machine Learning. Over the past couple of years, I’ve explored various areas of tech — from building web interfaces to diving into data analysis and experimenting with machine learning models.</p>
              <p className="text-slate-600 leading-relaxed mb-6">
               During my learning journey, I’ve worked on projects using tools like Python, Pandas, SQL, and basic machine learning libraries to analyze datasets and draw insights. I also have hands-on experience with frontend technologies like HTML, CSS, JavaScript, and React. While I’ve explored multiple domains, my current focus is on strengthening my backend development skills and mastering Data Structures and Algorithms.</p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Right now, I’m actively working through LeetCode’s SQL and DSA challenges, and following structured roadmaps to improve my problem-solving and system design understanding. I'm also brushing up on backend tech like Node.js and Express to prepare myself for real-world development roles.</p>
              <p className="text-slate-600 leading-relaxed mb-6">
                I believe in progress over perfection — and I’m building my skillset one step at a time.
              </p>
              
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200 flex items-center space-x-2">
                  <Code size={14} />
                  <span>Full-Stack Developer</span>
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-green-100 to-green-50 text-green-700 rounded-full text-sm font-medium border border-green-200 flex items-center space-x-2">
                  <Database size={14} />
                  <span>Data Analyst</span>
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-purple-100 to-purple-50 text-purple-700 rounded-full text-sm font-medium border border-purple-200 flex items-center space-x-2">
                  <Brain size={14} />
                  <span>ML Enthusiast</span>
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-6 animate-slide-up">
            <div className="card-elegant p-6 hover-lift border-l-4 border-green-400">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-green-100 to-green-50 rounded-lg flex items-center justify-center mr-4">
                  <Book className="text-green-700" size={20} />
                </div>
                <h4 className="text-xl font-semibold bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 bg-clip-text text-transparent font-serif">Education & Learning</h4>
              </div>
              <p className="text-slate-600">
                <strong>B.Tech in Computer Science and Engineering</strong><br />
                Currently pursuing my degree with focus on <strong>Artificial Intelligence</strong> and <strong>Machine Learning</strong>. Actively expanding my skills through hands-on learning, online courses, and solving real-world tech problems.
              </p>
            </div>

            <div className="card-elegant p-6 hover-lift border-l-4 border-purple-400">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-100 to-purple-50 rounded-lg flex items-center justify-center mr-4">
                  <Star className="text-purple-700" size={20} />
                </div>
                <h4 className="text-xl font-semibold bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 bg-clip-text text-transparent font-serif">Tech Interests</h4>
              </div>
              <div className="space-y-2">
                <p className="text-slate-600 flex items-center"><Code size={16} className="mr-2 text-blue-600" /> Frontend & Backend Development</p>
                <p className="text-slate-600 flex items-center"><Database size={16} className="mr-2 text-green-600" /> Data Visualization & Analytics</p>
                <p className="text-slate-600 flex items-center"><Brain size={16} className="mr-2 text-purple-600" /> Machine Learning & AI</p>
                <p className="text-slate-600 flex items-center">🔧 <span className="ml-2">API Development & Integration</span></p>
              </div>
            </div>

            <div className="card-elegant p-6 hover-lift border-l-4 border-orange-400">
              <h4 className="text-xl font-semibold bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 bg-clip-text text-transparent font-serif mb-4">Tech Philosophy</h4>
              <div className="space-y-2">
                <p className="text-slate-600">💻 Code with purpose and passion</p>
                <p className="text-slate-600">📊 Data isn't noise, it's direction</p>
                <p className="text-slate-600">🤖 Intelligence is powerful — only when it serves users</p>
                <p className="text-slate-600">🌱 Continuous learning in tech evolution</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
