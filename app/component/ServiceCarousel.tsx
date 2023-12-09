// // components/TechnologiesCarousel.js
// import Image from "next/image";

// const technologiesData = [
//   {
//     title: 'Backend',
//     // image: '/backend.jpg',
//     technologies: ['Node.js', 'Express.js', 'Database (e.g., MongoDB)'],
//   },
//   {
//     title: 'Frontend',
//     // image: '/frontend.jpg',
//     technologies: ['React', 'Vue.js', 'HTML/CSS'],
//   },
//   {
//     title: 'DevOps',
//     // image: '/devops.jpg',
//     technologies: ['Docker', 'Kubernetes', 'CI/CD'],
//   },
//   {
//     title: 'AI/ML',
//     // image: '/ai_ml.jpg',
//     technologies: ['TensorFlow', 'PyTorch', 'Machine Learning Algorithms'],
//   },
//   {
//     title: 'Mobile App',
//     // image: '/mobile_app.jpg',
//     technologies: ['React Native', 'Flutter', 'NativeScript'],
//   },
//   {
//     title: 'Desktop App',
//     // image: '/desktop_app.jpg',
//     technologies: ['Electron', 'JavaFX', 'WinForms (C#)'],
//   },
//   {
//     title: 'UI/UX',
//     // image: '/ui_ux.jpg',
//     technologies: ['Adobe XD', 'Figma', 'Sketch'],
//   },
// ];

// const TechnologiesCarousel = () => {
//   return (
//     <div className="max-w-screen-lg mx-auto">
//       <div id="technologiesCarousel" className="carousel slide" data-ride="carousel">
//         <div className="carousel-inner">
//           {technologiesData.map((tech, index) => (
//             <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
//                {/* <Image
//                 priority
//                 src={tech.image} 
//                 height={0}
//                 width={0}
//                 className="w-full h-auto"
//                 // style={{ width: '50%', height: '50%',  objectFit: 'contain', marginTop: '1rem'  }}
//                 alt={`${tech.title} Technologies`}
//             /> */}
//               {/* <img src={tech.image} alt={`${tech.title} Technologies`} className="w-full h-auto" /> */}
//               <div className="carousel-caption text-center">
//                 <h5 className="text-2xl font-bold">{tech.title}</h5>
//                 <ul className="list-disc text-lg">
//                   {tech.technologies.map((item, i) => (
//                     <li key={i}>{item}</li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           ))}
//         </div>

//         <a className="carousel-control-prev" href="#technologiesCarousel" role="button" data-slide="prev">
//           <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//           <span className="sr-only">Previous</span>
//         </a>
//         <a className="carousel-control-next" href="#technologiesCarousel" role="button" data-slide="next">
//           <span className="carousel-control-next-icon" aria-hidden="true"></span>
//           <span className="sr-only">Next</span>
//         </a>
//       </div>
//     </div>
//   );
// };

// export default TechnologiesCarousel;
