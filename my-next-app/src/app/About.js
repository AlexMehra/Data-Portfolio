export default function Home() {
  return (
    <div className="min-h-screen flex bg-gradient-to-b from-gray-100 to-white px-6">
      {/* Left Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg p-4 flex flex-col">
        {/* Page Title */}
        <div className="bg-gray-200 text-gray-900 font-serif font-extrabold text-3xl text-center py-2 px-4 mb-6 rounded-md tracking-wide w-fit self-center">
          Akki
        </div>

        {/* Navigation Links */}
        <nav className="mb-6 flex flex-col space-y-3 text-gray-800 font-bold text-lg px-3">
          <a href="#" className="hover:text-gray-500 active:text-gray-600 transition-colors">About</a>
          <a href="#" className="hover:text-gray-500 active:text-gray-600 transition-colors">Email</a>
          <a href="#" className="hover:text-gray-500 active:text-gray-600 transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-gray-500 active:text-gray-600 transition-colors">Twitter</a>
        </nav>

        {/* Sidebar List */}
        <ul className="text-sm space-y-3 text-gray-800 mt-2 px-3">
          {[
            { title: "DM Resharing", year: 2022 },
            { title: "Media Viewer", year: 2022 },
            { title: "Command System", year: 2022 },
            { title: "Send Interaction", year: 2022 },
            { title: "@Everyone", year: 2022 },
            { title: "/Gif", year: 2022 },
            { title: "/Silent", year: 2022 },
            { title: "Gyro Pride Theme", year: 2021 },
          ].map((item, index) => (
            <li
              key={index}
              className="flex justify-between px-3 py-1.5 transition-transform transform hover:scale-105 hover:bg-gray-200 rounded-md cursor-pointer"
            >
              <span>{item.title}</span>
              <span className="text-gray-500">{item.year}</span>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="ml-72 flex flex-col items-center justify-center w-full text-gray-800 text-center">
        <h1 className="text-4xl font-bold">Abhinav Singh,</h1>
        <h2 className="text-2xl font-medium mt-3">
          Human interface designer at{' '}
          <a
            href="https://www.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-white transition duration-300 hover:shadow-glow"
          >
            Apple
          </a>
        </h2>
      </main>
    </div>
  );
}
