import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (3)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/course1.jpg" width={200} height={150} alt="" />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
                <div className="wd-dashboard-course"> 

   <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/teslabot.jpg" width={200} height={150} alt="" />
            <div>
              <h5> CS5677 Web Dev</h5>
              <p className="wd-dashboard-course-title">
Web Developer              </p>
              <button> Go </button>
            </div>
          </Link>
</div>
    
                    <div className="wd-dashboard-course"> 

   <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/course1.jpg" width={200} height={150} alt="" />
            <div>
              <h5> CS34423 Algorithms</h5>
              <p className="wd-dashboard-course-title">
Coding and problem solving              </p>
              <button> Go </button>
            </div>
          </Link>
</div>
       
      </div>
    </div>
);}
