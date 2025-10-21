import Link from "next/link";
export default function Labs() {
 return (
   <div id="wd-labs">
     <h1>Labs</h1>
     <h3>Sri Ram Sathiya Narayanan</h3>
    <a href ="https://github.com/sgsriram25/kambaz-next-js2" id="wd-github"> My Github Repo</a>
     <ul>
       <li>
         <Link href="/Labs/Lab1" id="wd-lab1-link">
           Lab 1: HTML Examples </Link>
       </li>
       <li>
         <Link href="/Labs/Lab2" id="wd-lab2-link">
           Lab 2: CSS Basics </Link>
       </li>
       <li>
         <Link href="/Labs/Lab3" id="wd-lab3-link">
           Lab 3: JavaScript Fundamentals </Link>
       </li>
     </ul>
   </div>
);}

