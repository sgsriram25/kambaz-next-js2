import Link from "next/link";
export default function Assignments() {
  return (
    <div id="wd-assignments">
      <input placeholder="Search for Assignments"
             id="wd-search-assignment" />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment"><Link href="/Courses/1234/Assignments/123"
             className="wd-assignment-link" >+ Assignment</Link></button>
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button> </h3>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <Link href="/Courses/1234/Assignments/123"
             className="wd-assignment-link" >
            A1 - ENV + HTML
          </Link> </li>
           <li className="wd-assignment-list-item">
          <Link href="/Courses/1234/Assignments/123"
             className="wd-assignment-link" >
            A2 - ENV + HTML
          </Link> </li>
           <li className="wd-assignment-list-item">
          <Link href="/Courses/1234/Assignments/123"
             className="wd-assignment-link" >
            A3 - ENV + HTML
          </Link> </li>
        <li className="wd-assignment-list-item">
          <ol>Module 1 Feedback</ol>
          <ol>Module 2 Feedback</ol>
          <ol>Module 3 Feedback</ol>
        </li>
      </ul>
    </div>
);}
