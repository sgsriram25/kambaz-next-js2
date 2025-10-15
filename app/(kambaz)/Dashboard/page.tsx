import Link from "next/link";
import Image from "next/image";
import { Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Button } from "react-bootstrap";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (3)</h2> <hr />
   <div id="wd-dashboard-courses">
  <Row xs={1} md={5} className="g-4">
    {/* Course 1 */}
    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
      <Card>
        <Link href="/Courses/1234/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
          <CardImg variant="top" src="/images/course1.jpg" width="100%" height={160} />
          <CardBody>
            <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS1234 React JS</CardTitle>
            <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
              Full Stack Software Development
            </CardText>
            <Button variant="primary">Go</Button>
          </CardBody>
        </Link>
      </Card>
    </Col>

    {/* Course 2 */}
    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
      <Card>
        <Link href="/Courses/1234/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
          <CardImg variant="top" src="/images/teslabot.jpg" width="100%" height={160} />
          <CardBody>
            <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS5678 PDP</CardTitle>
            <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
              Programming Design Paradigms
            </CardText>
            <Button variant="primary">Go</Button>
          </CardBody>
        </Link>
      </Card>
    </Col>

    {/* Course 3 */}
    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
      <Card>
        <Link href="/Courses/1234/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
          <CardImg variant="top" src="/images/course1.jpg" width="100%" height={160} />
          <CardBody>
            <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS5832 DBMS</CardTitle>
            <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
              Database Management Systems
            </CardText>
            <Button variant="primary">Go</Button>
          </CardBody>
        </Link>
      </Card>
    </Col>

    {/* Course 4 */}
    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
      <Card>
        <Link href="/Courses/1234/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
          <CardImg variant="top" src="/images/teslabot.jpg" width="100%" height={160} />
          <CardBody>
            <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS5800 Algorithms</CardTitle>
            <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
              Advanced Algorithms and Data Structures
            </CardText>
            <Button variant="primary">Go</Button>
          </CardBody>
        </Link>
      </Card>
    </Col>

    {/* Course 5 */}
    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
      <Card>
        <Link href="/Courses/1234/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
          <CardImg variant="top" src="/images/course1.jpg" width="100%" height={160} />
          <CardBody>
            <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS5200 AI</CardTitle>
            <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
              Foundations of Artificial Intelligence
            </CardText>
            <Button variant="primary">Go</Button>
          </CardBody>
        </Link>
      </Card>
    </Col>

    {/* Course 6 */}
    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
      <Card>
        <Link href="/Courses/1234/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
          <CardImg variant="top" src="/images/teslabot.jpg" width="100%" height={160} />
          <CardBody>
            <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS5610 Web Dev</CardTitle>
            <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
              Web Development with JavaScript, React, and Node.js
            </CardText>
            <Button variant="primary">Go</Button>
          </CardBody>
        </Link>
      </Card>
    </Col>

    {/* Course 7 */}
    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
      <Card>
        <Link href="/Courses/1234/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
          <CardImg variant="top" src="/images/course1.jpg" width="100%" height={160} />
          <CardBody>
            <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">CS6140 ML</CardTitle>
            <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
              Machine Learning Fundamentals
            </CardText>
            <Button variant="primary">Go</Button>
          </CardBody>
        </Link>
      </Card>
    </Col>
  </Row>
</div>

    </div>
);}

