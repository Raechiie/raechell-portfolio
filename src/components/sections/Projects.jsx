import { useState } from "react";
import { ProjectModal } from "../ProjectModal";
import splashApp from "../../assets/MyProjects/Loceats-App/Splash.jpg";
import loginApp from "../../assets/MyProjects/Loceats-App/Login.jpg";
import homeApp from "../../assets/MyProjects/Loceats-App/Home.jpg";
import searchApp from "../../assets/MyProjects/Loceats-App/Search.jpg";
import restaurantApp from "../../assets/MyProjects/Loceats-App/Restaurant.jpg";
import filterApp from "../../assets/MyProjects/Loceats-App/Filter.jpg";
import mapApp from "../../assets/MyProjects/Loceats-App/Map.png";
import profileApp from "../../assets/MyProjects/Loceats-App/Profile.jpg";
import QRApp from "../../assets/MyProjects/Loceats-App/QR.jpg";

//ADMIN
import admin1 from "../../assets/MyProjects/Loceats-Admin/Dashboard.png";
import admin2 from "../../assets/MyProjects/Loceats-Admin/Restaurant.png";
import admin3 from "../../assets/MyProjects/Loceats-Admin/AddRestaurant.png";
import admin4 from "../../assets/MyProjects/Loceats-Admin/Review.png";
import admin5 from "../../assets/MyProjects/Loceats-Admin/Report.png";
import admin6 from "../../assets/MyProjects/Loceats-Admin/User.png";
import admin7 from "../../assets/MyProjects/Loceats-Admin/AddUser.png";
import admin8 from "../../assets/MyProjects/Loceats-Admin/SuperAdmin.png";

//BUSINESS OWNER;
import bo1 from "../../assets/MyProjects/Loceats-Business/Login.png";
import bo2 from "../../assets/MyProjects/Loceats-Business/Home.png";
import bo3 from "../../assets/MyProjects/Loceats-Business/Review.png";
import bo4 from "../../assets/MyProjects/Loceats-Business/Profile.png";

//MARVEL
import marvel1 from "../../assets/MyProjects/WebDev/Home.JPG";
import marvel2 from "../../assets/MyProjects/WebDev/Home2.JPG";
import marvel3 from "../../assets/MyProjects/WebDev/Characters.JPG";
import marvel4 from "../../assets/MyProjects/WebDev/Characters2.JPG";
import marvel5 from "../../assets/MyProjects/WebDev/Characters3.JPG";
import marvel6 from "../../assets/MyProjects/WebDev/Movies.JPG";
import marvel7 from "../../assets/MyProjects/WebDev/Movies2.JPG";
import marvel8 from "../../assets/MyProjects/WebDev/Series.JPG";
import marvel9 from "../../assets/MyProjects/WebDev/About.JPG";
import marvelVid from "../../assets/MyProjects/WebDev/Marvels-Video.mp4";

//MYSTORIA
import mystoria1 from "../../assets/MyProjects/Mystoria/Landing.jpg";
import mystoria2 from "../../assets/MyProjects/Mystoria/ChooseChar.jpg";
import mystoria3 from "../../assets/MyProjects/Mystoria/Scene1.jpg";
import mystoria4 from "../../assets/MyProjects/Mystoria/Scene2.jpg";
import mystoriaVid from "../../assets/MyProjects/Mystoria/MystoriaDemo.mp4";

//GRAB N COOK
import grab1 from "../../assets/MyProjects/GrabNCook/Landing.jpg";
import grab2 from "../../assets/MyProjects/GrabNCook/Choice.jpg";
import grab3 from "../../assets/MyProjects/GrabNCook/Shop.jpg";
import grab4 from "../../assets/MyProjects/GrabNCook/Wheel.jpg";
import grabVid from "../../assets/MyProjects/GrabNCook/GrabNCook-Demo.mp4";

//HOUSEHOLD HAVOC
import house1 from "../../assets/MyProjects/HouseholdHavoc/Landing.JPG";
import house2 from "../../assets/MyProjects/HouseholdHavoc/PlayerName.JPG";
import house3 from "../../assets/MyProjects/HouseholdHavoc/Background.JPG";
import house4 from "../../assets/MyProjects/HouseholdHavoc/Weapon.JPG";
import house5 from "../../assets/MyProjects/HouseholdHavoc/Fight.JPG";
import house6 from "../../assets/MyProjects/HouseholdHavoc/Win.JPG";
import houseVid from "../../assets/MyProjects/HouseholdHavoc/HouseholdDemo.mp4";

//COFFEE SHOP
import coffee1 from "../../assets/MyProjects/ReportModule/Sales.JPG";
import coffee2 from "../../assets/MyProjects/ReportModule/Inventory.JPG";
import coffee3 from "../../assets/MyProjects/ReportModule/Rider.JPG";
import coffee4 from "../../assets/MyProjects/ReportModule/Legend.JPG";
import coffee5 from "../../assets/MyProjects/ReportModule/Export.JPG";

const projects = [
  {
    title: "Loc-Eats",
    description: "An Android application developed as a capstone project, tailored for the students of Pamantasan ng Lungsod ng Valenzuela (PLV) to conveniently explore nearby dining options across the university’s three campuses: Main (Maysan), Annex, and Public Administration.",
    tech: ["React", "React Native", "Node.js", "Firebase"],
    images: [
    {
      title: "For App Users",
      images: [
        splashApp, loginApp, homeApp, searchApp, restaurantApp, filterApp, mapApp, profileApp, QRApp
        ]
    },
    {
      title: "For Admin",
      images: [
        admin1, admin2, admin3, admin4, admin5, admin6, admin7, admin8
      ]
    },
    {
      title: "For Business Owners",
      images: [
        bo1, bo2, bo3, bo4
      ]
    }
  ]
  },
  {
    title: "Marvel Fan Website",
    description: "Created a Marvel-themed website as part of a development project, featuring a catalog of Marvel movies, series, and characters. The site displays detailed information for each title and hero, offering an engaging and organized fan experience using clean UI and responsive design.",
    tech: ["HTML", "CSS"],
    videoSrc: marvelVid,
    images: [
      marvel1, marvel2, marvel3, marvel4, marvel5, marvel6, marvel7, marvel8, marvel9
    ]
  },
{
    title: "Mystoria",
    description: "A choice-based visual novel game set in a mystery-filled fantasy world of Mystoria. Players uncover secrets, interact with unique characters, and make decisions that lead to multiple story routes and endings. With its engaging narrative and replayable structure, Mystoria offers a rich and immersive storytelling experience where every choice matters.",
    tech: ["C#", "Unity"],
    videoSrc: mystoriaVid,
    images: [
      mystoria1, mystoria2, mystoria3, mystoria4
    ]
  },  
  {
    title: "Grab 'n Cook",
    description: "   A companion app for the tabletop game of the same name. It allows players to purchase in-game items and spin a roulette to receive random cooking skills they can use during gameplay, enhancing strategy and fun.",
    tech: ["C#", "Unity"],
    videoSrc: grabVid,
    images: [
        grab1, grab2, grab3, grab4
    ]
  },  
  {
    title: "Household Havoc",
    description: " A turn-based combat game inspired by classic fighters like Tekken, but with a quirky twist — players battle using everyday household items as weapons. From slippers to tambo, luck and strategy are the key in this chaotic, fun-filled brawler.",
    tech: ["C#", "Unity"],
    videoSrc: houseVid,
    images: [
        house1, house2, house3, house4, house5, house6, 
    ]
  },
    {
    title: "Coffee Shop Report Module - UI Design",
    description: " Designed a clean and intuitive report module UI for a coffee shop website, enabling efficient generation and viewing of key business reports.",
    tech: ["Figma"],
    images: [
        coffee1, coffee2, coffee3, coffee4, coffee5
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
