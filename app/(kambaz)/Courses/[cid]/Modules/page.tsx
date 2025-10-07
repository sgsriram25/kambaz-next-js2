import {ListGroup} from "react-bootstrap";
import {ListGroupItem} from "react-bootstrap";
import ModulesControls from "./ModulesControls";
import {BsGripVertical} from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";

export default function Modules() {
    return (
        <div>
  <ModulesControls /><br /><br /><br /><br />
  <ListGroup className="rounded-0" id="wd-modules">
    
    <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
      <div className="wd-title p-3 ps-2 bg-secondary"> <BsGripVertical className="me-2 fs-3" /> Week 1 <ModuleControlButtons /> </div>
      
      <ListGroup className="wd-lessons rounded-0">
        <ListGroupItem className="wd-lesson p-3 ps-1">  <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES <LessonControlButtons /></ListGroupItem>
        <ListGroupItem className="wd-lesson p-3 ps-1"><BsGripVertical className="me-2 fs-3" />Introduction to the course<LessonControlButtons /></ListGroupItem>
        <ListGroupItem className="wd-lesson p-3 ps-1"><BsGripVertical className="me-2 fs-3" />Learn what is Web Development<LessonControlButtons /></ListGroupItem>
      </ListGroup>
      
      <ListGroup className="wd-lessons rounded-0">
        <ListGroupItem className="wd-lesson p-3 ps-1">  <BsGripVertical className="me-2 fs-3" /> Reading <LessonControlButtons /></ListGroupItem>
        <ListGroupItem className="wd-lesson p-3 ps-1"><BsGripVertical className="me-2 fs-3" />Full Stack Developer - Chapter 1<LessonControlButtons /></ListGroupItem>
        <ListGroupItem className="wd-lesson p-3 ps-1"><BsGripVertical className="me-2 fs-3" />Full Stack Developer - Chapter 2<LessonControlButtons /></ListGroupItem>
      </ListGroup>
      
      <ListGroup className="wd-lessons rounded-0">
        <ListGroupItem className="wd-lesson p-3 ps-1"> <BsGripVertical className="me-2 fs-3" /> Slides <LessonControlButtons /></ListGroupItem>
        <ListGroupItem className="wd-lesson p-3 ps-1"><BsGripVertical className="me-2 fs-3" />Introduction to Web Development<LessonControlButtons /></ListGroupItem>
        <ListGroupItem className="wd-lesson p-3 ps-1"><BsGripVertical className="me-2 fs-3" />Creating a HTTP Server with Node.js<LessonControlButtons /></ListGroupItem>
      </ListGroup>
    </ListGroupItem>

    <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
      <div className="wd-title p-3 ps-2 bg-secondary"> <BsGripVertical className="me-2 fs-3" /> Week 2  <LessonControlButtons /><ModuleControlButtons /></div>
      
      <ListGroup className="wd-lessons rounded-0">
        <ListGroupItem className="wd-lesson p-3 ps-1"> <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES <LessonControlButtons /></ListGroupItem>
        <ListGroupItem className="wd-lesson p-3 ps-1"><BsGripVertical className="me-2 fs-3" />HTML Basics<LessonControlButtons /></ListGroupItem>
        <ListGroupItem className="wd-lesson p-3 ps-1"><BsGripVertical className="me-2 fs-3" />React Basics<LessonControlButtons /></ListGroupItem>
      </ListGroup>
      
      <ListGroup className="wd-lessons rounded-0">
        <ListGroupItem className="wd-lesson p-3 ps-1"> <BsGripVertical className="me-2 fs-3" /> Reading <LessonControlButtons /></ListGroupItem>
        <ListGroupItem className="wd-lesson p-3 ps-1"><BsGripVertical className="me-2 fs-3" />Full Stack Developer - Chapter 3<LessonControlButtons /></ListGroupItem>
        <ListGroupItem className="wd-lesson p-3 ps-1"><BsGripVertical className="me-2 fs-3" />Full Stack Developer - Chapter 4<LessonControlButtons /></ListGroupItem>
      </ListGroup>
    </ListGroupItem>

    <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
      <div className="wd-title p-3 ps-2 bg-secondary"> <BsGripVertical className="me-2 fs-3" /> Week 3 <ModuleControlButtons /></div>
      
      <ListGroup className="wd-lessons rounded-0">
        <ListGroupItem className="wd-lesson p-3 ps-1"> <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES <LessonControlButtons /></ListGroupItem>
        <ListGroupItem className="wd-lesson p-3 ps-1"><BsGripVertical className="me-2 fs-3" />CSS Basics<LessonControlButtons /></ListGroupItem>
        <ListGroupItem className="wd-lesson p-3 ps-1"><BsGripVertical className="me-2 fs-3" />CSS + Bootstrap<LessonControlButtons /></ListGroupItem>
      </ListGroup>
      
      <ListGroup className="wd-lessons rounded-0">
        <ListGroupItem className="wd-lesson p-3 ps-1"> <BsGripVertical className="me-2 fs-3" /> Reading <LessonControlButtons /></ListGroupItem>
        <ListGroupItem className="wd-lesson p-3 ps-1"><BsGripVertical className="me-2 fs-3" />Full Stack Developer - Chapter 5<LessonControlButtons /></ListGroupItem>
      </ListGroup>
    </ListGroupItem>

  </ListGroup>
</div>

    );
}