
// import Link from 'next/link';
// import { getSortedPostsData } from '../utils/readMarkdown'

// export default function Blogs() {
//   const allposts = getSortedPostsData();
//   console.log(allposts);
//   return (

//     <section className="container text-base leading-6 space-y-4">
//       <h2 className="text-2xl text-center font-semibold p-4" >Blog</h2>
//       <ul className="list-none space-y-4">

//         {allposts.map(({ id, date, title }) => (
//           <li  key={id}>
//             <div className="relative flex flex-col h-full min-w-0 p-4 ">
//               <div className=" rounded-xl" style={{ backgroundImage: "url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-dashboard/assets/img/ivancik.jpg')" }}>
//                 <div className="relative z-10 flex flex-col  h-full p-4">
//                   <h5 className="pt-2 mb-6 font-bold text-white">{title}</h5>
//                   <a className="mt-auto mb-0 font-semibold leading-normal text-white group text-sm">
//                     <Link href={`/blog/${encodeURIComponent(id)}`}>
//                       <div className="text-xl font-semibold mb-1">Read More</div>
//                     </Link>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </section>
//   )
// }