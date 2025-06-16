import { useState } from "react";
import { ProjectModal } from "../ProjectModal";


const projects = [
  {
    title: "Loc-Eats",
    description: "An Android application developed as a capstone project, tailored for the students of Pamantasan ng Lungsod ng Valenzuela (PLV) to conveniently explore nearby dining options across the university’s three campuses: Main (Maysan), Annex, and Public Administration.",
    tech: ["React", "React Native", "Node.js", "Firebase"],
    images: [
    {
      title: "For App Users",
      images: [
        "/public/MyProjects/Loceats-App/Splash.jpg",
        "/public/MyProjects/Loceats-App/Login.jpg",
        "/public/MyProjects/Loceats-App/Home.jpg",
        "/public/MyProjects/Loceats-App/Search.jpg",
        "/public/MyProjects/Loceats-App/Restaurant.jpg",
        "/public/MyProjects/Loceats-App/Filter.jpg",
        "/public/MyProjects/Loceats-App/Map.png",
        "/public/MyProjects/Loceats-App/Profile.jpg",
        "/public/MyProjects/Loceats-App/QR.jpg"
        ]
    },
    {
      title: "For Admin",
      images: [
        "/public/MyProjects/Loceats-Admin/Dashboard.png",
        "/public/MyProjects/Loceats-Admin/Restaurant.png",
        "/public/MyProjects/Loceats-Admin/AddRestaurant.png",
        "/public/MyProjects/Loceats-Admin/Review.png",
        "/public/MyProjects/Loceats-Admin/Report.png",
        "/public/MyProjects/Loceats-Admin/User.png",
        "/public/MyProjects/Loceats-Admin/AddUser.png",
        "/public/MyProjects/Loceats-Admin/SuperAdmin.png"
      ]
    },
    {
      title: "For Business Owners",
      images: [
        "/public/MyProjects/Loceats-Business/Login.png",
        "/public/MyProjects/Loceats-Business/Home.png",
        "/public/MyProjects/Loceats-Business/Review.png",
        "/public/MyProjects/Loceats-Business/Profile.png"
      ]
    }
  ]
  },
  {
    title: "Marvel Fan Website",
    description: "Created a Marvel-themed website as part of a development project, featuring a catalog of Marvel movies, series, and characters. The site displays detailed information for each title and hero, offering an engaging and organized fan experience using clean UI and responsive design.",
    tech: ["HTML", "CSS"],
    videoSrc: "/public/MyProjects/WebDev/Marvels-Video.mp4",
    images: [
        "/public/MyProjects/WebDev/Home.JPG",
        "/public/MyProjects/WebDev/Home2.JPG",
        "/public/MyProjects/WebDev/Characters.JPG",
        "/public/MyProjects/WebDev/Characters2.JPG",
        "/public/MyProjects/WebDev/Characters3.JPG",
        "/public/MyProjects/WebDev/Movies.JPG",
        "/public/MyProjects/WebDev/Movies2.JPG",
        "/public/MyProjects/WebDev/Series.JPG",
        "/public/MyProjects/WebDev/About.JPG"
    ]
  },
{
    title: "Mystoria",
    description: "A choice-based visual novel game set in a mystery-filled fantasy world of Mystoria. Players uncover secrets, interact with unique characters, and make decisions that lead to multiple story routes and endings. With its engaging narrative and replayable structure, Mystoria offers a rich and immersive storytelling experience where every choice matters.",
    tech: ["C#", "Unity"],
    videoSrc: "/public/MyProjects/Mystoria/MystoriaDemo.mp4",
    images: [
        "/public/MyProjects/Mystoria/Landing.jpg",
        "/public/MyProjects/Mystoria/ChooseChar.jpg",
        "/public/MyProjects/Mystoria/Scene1.jpg",
        "/public/MyProjects/Mystoria/Scene2.jpg"
    ]
  },  
  {
    title: "Grab 'n Cook",
    description: "   A companion app for the tabletop game of the same name. It allows players to purchase in-game items and spin a roulette to receive random cooking skills they can use during gameplay, enhancing strategy and fun.",
    tech: ["C#", "Unity"],
    videoSrc: "/public/MyProjects/GrabNCook/GrabNCook-Demo.mp4",
    images: [
        "/public/MyProjects/GrabNCook/Landing.jpg",
        "/public/MyProjects/GrabNCook/Choice.jpg",
        "/public/MyProjects/GrabNCook/Shop.jpg",
        "/public/MyProjects/GrabNCook/Wheel.jpg"
    ]
  },  
  {
    title: "Household Havoc",
    description: " A turn-based combat game inspired by classic fighters like Tekken, but with a quirky twist — players battle using everyday household items as weapons. From slippers to tambo, luck and strategy are the key in this chaotic, fun-filled brawler.",
    tech: ["C#", "Unity"],
    videoSrc: "/public/MyProjects/HouseholdHavoc/HouseholdDemo.mp4",
    images: [
        "/public/MyProjects/HouseholdHavoc/Landing.JPG",
        "/public/MyProjects/HouseholdHavoc/PlayerName.JPG",
        "/public/MyProjects/HouseholdHavoc/Background.JPG",
        "/public/MyProjects/HouseholdHavoc/Weapon.JPG",
        "/public/MyProjects/HouseholdHavoc/Fight.JPG",
        "/public/MyProjects/HouseholdHavoc/Win.JPG"
    ]
  },
    {
    title: "Coffee Shop Report Module - UI Design",
    description: " Designed a clean and intuitive report module UI for a coffee shop website, enabling efficient generation and viewing of key business reports.",
    tech: ["Figma"],
    images: [
        "/public/MyProjects/ReportModule/Sales.JPG",
        "/public/MyProjects/ReportModule/Inventory.JPG",
        "/public/MyProjects/ReportModule/Rider.JPG",
        "/public/MyProjects/ReportModule/Legend.JPG",
        "/public/MyProjects/ReportModule/Export.JPG"
    ]
  },
];

export const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const openModal = (project) => {
    setCurrentProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentProject(null);
  };

  return (
    <section id="projects" className="min-h-screen py-20 flex justify-center items-center">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <div key={idx} className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-md transition">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description.slice(0, 100)}...</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm">{tech}</span>
                ))}
              </div>
              <button onClick={() => openModal(project)} className="text-blue-400 hover:text-blue-300 transition-colors">
                View Project →
              </button>
            </div>
          ))}
        </div>
      </div>

      <ProjectModal
        show={modalOpen}
        onClose={closeModal}
        title={currentProject?.title}
        tech={currentProject?.tech}
        description={currentProject?.description}
        videoSrc={currentProject?.videoSrc}
        images={currentProject?.images || []}
      />
    </section>
  );
};
