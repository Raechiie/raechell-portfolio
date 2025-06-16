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
        "/MyProjects/Loceats-App/Splash.jpg",
        "/MyProjects/Loceats-App/Login.jpg",
        "/MyProjects/Loceats-App/Home.jpg",
        "/MyProjects/Loceats-App/Search.jpg",
        "/MyProjects/Loceats-App/Restaurant.jpg",
        "/MyProjects/Loceats-App/Filter.jpg",
        "/MyProjects/Loceats-App/Map.png",
        "/MyProjects/Loceats-App/Profile.jpg",
        "/MyProjects/Loceats-App/QR.jpg"
        ]
    },
    {
      title: "For Admin",
      images: [
        "/MyProjects/Loceats-Admin/Dashboard.png",
        "/MyProjects/Loceats-Admin/Restaurant.png",
        "/MyProjects/Loceats-Admin/AddRestaurant.png",
        "/MyProjects/Loceats-Admin/Review.png",
        "/MyProjects/Loceats-Admin/Report.png",
        "/MyProjects/Loceats-Admin/User.png",
        "/MyProjects/Loceats-Admin/AddUser.png",
        "/MyProjects/Loceats-Admin/SuperAdmin.png"
      ]
    },
    {
      title: "For Business Owners",
      images: [
        "/MyProjects/Loceats-Business/Login.png",
        "/MyProjects/Loceats-Business/Home.png",
        "/MyProjects/Loceats-Business/Review.png",
        "/MyProjects/Loceats-Business/Profile.png"
      ]
    }
  ]
  },
  {
    title: "Marvel Fan Website",
    description: "Created a Marvel-themed website as part of a development project, featuring a catalog of Marvel movies, series, and characters. The site displays detailed information for each title and hero, offering an engaging and organized fan experience using clean UI and responsive design.",
    tech: ["HTML", "CSS"],
    videoSrc: "/MyProjects/WebDev/Marvels-Video.mp4",
    images: [
        "/MyProjects/WebDev/Home.JPG",
        "/MyProjects/WebDev/Home2.JPG",
        "/MyProjects/WebDev/Characters.JPG",
        "/MyProjects/WebDev/Characters2.JPG",
        "/MyProjects/WebDev/Characters3.JPG",
        "/MyProjects/WebDev/Movies.JPG",
        "/MyProjects/WebDev/Movies2.JPG",
        "/MyProjects/WebDev/Series.JPG",
        "/MyProjects/WebDev/About.JPG"
    ]
  },
{
    title: "Mystoria",
    description: "A choice-based visual novel game set in a mystery-filled fantasy world of Mystoria. Players uncover secrets, interact with unique characters, and make decisions that lead to multiple story routes and endings. With its engaging narrative and replayable structure, Mystoria offers a rich and immersive storytelling experience where every choice matters.",
    tech: ["C#", "Unity"],
    videoSrc: "/MyProjects/Mystoria/MystoriaDemo.mp4",
    images: [
        "/MyProjects/Mystoria/Landing.jpg",
        "/MyProjects/Mystoria/ChooseChar.jpg",
        "/MyProjects/Mystoria/Scene1.jpg",
        "/MyProjects/Mystoria/Scene2.jpg"
    ]
  },  
  {
    title: "Grab 'n Cook",
    description: "   A companion app for the tabletop game of the same name. It allows players to purchase in-game items and spin a roulette to receive random cooking skills they can use during gameplay, enhancing strategy and fun.",
    tech: ["C#", "Unity"],
    videoSrc: "/MyProjects/GrabNCook/GrabNCook-Demo.mp4",
    images: [
        "/MyProjects/GrabNCook/Landing.jpg",
        "/MyProjects/GrabNCook/Choice.jpg",
        "/MyProjects/GrabNCook/Shop.jpg",
        "/MyProjects/GrabNCook/Wheel.jpg"
    ]
  },  
  {
    title: "Household Havoc",
    description: " A turn-based combat game inspired by classic fighters like Tekken, but with a quirky twist — players battle using everyday household items as weapons. From slippers to tambo, luck and strategy are the key in this chaotic, fun-filled brawler.",
    tech: ["C#", "Unity"],
    videoSrc: "/MyProjects/HouseholdHavoc/HouseholdDemo.mp4",
    images: [
        "/MyProjects/HouseholdHavoc/Landing.JPG",
        "/MyProjects/HouseholdHavoc/PlayerName.JPG",
        "/MyProjects/HouseholdHavoc/Background.JPG",
        "/MyProjects/HouseholdHavoc/Weapon.JPG",
        "/MyProjects/HouseholdHavoc/Fight.JPG",
        "/MyProjects/HouseholdHavoc/Win.JPG"
    ]
  },
    {
    title: "Coffee Shop Report Module - UI Design",
    description: " Designed a clean and intuitive report module UI for a coffee shop website, enabling efficient generation and viewing of key business reports.",
    tech: ["Figma"],
    images: [
        "/MyProjects/ReportModule/Sales.JPG",
        "/MyProjects/ReportModule/Inventory.JPG",
        "/MyProjects/ReportModule/Rider.JPG",
        "/MyProjects/ReportModule/Legend.JPG",
        "/MyProjects/ReportModule/Export.JPG"
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
