import Image from 'next/image';

const projects = [
  { name: 'DM Resharing', year: '2022' },
  { name: 'Media Viewer', year: '2022' },
  { name: 'Command System', year: '2022' },
  { name: 'Send Interaction', year: '2022' },
  { name: '@Everyone', year: '2022' },
  { name: '/Gif', year: '2022' },
  { name: '/Silent', year: '2022' },
  { name: 'Gyro Pride Theme', year: '2021' },
];

export default function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 h-screen w-20 bg-white shadow-md z-50 flex flex-col items-center py-6 space-y-8">
      
      {/* Brand */}
      <div className="text-center space-y-0.5">
        <h1 className="text-base font-semibold text-gray-900">Akki</h1>
        <div className="text-lg text-gray-500">∅</div>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col items-center space-y-6 text-xs text-gray-600">
        <a href="#home" className="flex flex-col items-center hover:text-black transition">
          <span className="text-xl">🏠</span>
          <span>Home</span>
        </a>
        <a href="#projects" className="flex flex-col items-center hover:text-black transition">
          <span className="text-xl">📁</span>
          <span>Projects</span>
        </a>
        <a href="#resume" className="flex flex-col items-center hover:text-black transition">
          <span className="text-xl">📄</span>
          <span>Resume</span>
        </a>
        <a href="#contact" className="flex flex-col items-center hover:text-black transition">
          <span className="text-xl">✉️</span>
          <span>Contact</span>
        </a>
      </nav>
    </aside>
  );
}
