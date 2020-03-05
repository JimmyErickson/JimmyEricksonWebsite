import React from "react";

// reactstrap components
import {
    Button,
    NavItem,
    NavLink,
    Nav,
    TabContent,
    TabPane,
    Container,
    Row,
    Col,
    UncontrolledTooltip
} from "reactstrap";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

// core components
import PortfolioNavbar from "components/Navbars/PortfolioNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

function Portfolio() {
    function onContact() {
        return <Redirect to="/contactForm" />
    }
    const [pills, setPills] = React.useState("2");
    React.useEffect(() => {
        document.body.classList.add("profile-page");
        document.body.classList.add("sidebar-collapse");
        document.documentElement.classList.remove("nav-open");
        return function cleanup() {
            document.body.classList.remove("profile-page");
            document.body.classList.remove("sidebar-collapse");
        };
    });
    return (
        <React.Fragment>
            <PortfolioNavbar />
            <div className="wrapper" >
                <ProfilePageHeader />
                <div className="section" >
                    <Container >
                        <div className="button-container" >
                            <Button className="btn-round"
                                color="info"
                                size="lg"
                                onCLick={onContact()} >
                                Contact
                            </Button>
                        </div>
                        <h3 className="title" >
                            About me
                        </h3>
                        <h5 className="description" >
                            I am a Sophomore Computer Science major at the University of Nebraska - Lincoln. I plan to graduate with my bachelor 's in May 2021, and pursue a 1.5-year Master'
                            s degree in Data Science at UNL.
                        </h5>
                        <Row >
                            <Col className="ml-auto mr-auto" md="6" >
                                <h4 className="title text-center" > My Timeline</h4>

                            </Col>
                        </Row>
                        <VerticalTimeline >
                            <VerticalTimelineElement className="vertical-timeline-element--work"
                                contentStyle={{ background: '#2CA8FF', color: '#fff' }} 
                                contentArrowStyle={{ borderRight: '7px solid  #2CA8FF' }} 
                                date="Begins May 2020"
                                iconStyle={{ background: '#2CA8FF', color: '#fff' }}
                            //icon={<WorkIcon />}
                            >
                                <h3 className="vertical-timeline-element-title" >
                                Data Science Intern
                                </h3>
                                <h4 className="vertical-timeline-element-subtitle" >
                                CHS inc., MN
                                </h4>
                                <p>
                                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                                </p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement className="vertical-timeline-element--work"
                                contentStyle={{ background: '#2CA8FF', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid  #2CA8FF' }}
                                date="Jan 2020 - Present"
                                iconStyle={{ background: '#2CA8FF', color: '#fff' }}
                            //icon={<WorkIcon />}
                            >
                                <h3 className="vertical-timeline-element-title" >
                                Undergraduate Researcher
                                </h3>
                                <h4 className="vertical-timeline-element-subtitle" >
                                University of Nebraska-Lincoln
                                </h4>
                                <p>
                                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                                </p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement className="vertical-timeline-element--work"
                                contentStyle={{ background: '#2CA8FF', color: '#fff' }} 
                                ontentArrowStyle={{ borderRight: '7px solid  #2CA8FF' }}
                                date="May 2019 - Present"
                                iconStyle={
                                    { background: '#2CA8FF', color: '#fff' }}
                            //icon={<WorkIcon />}
                            >
                                <h3 className="vertical-timeline-element-title" >
                                Learning Community Mentor
                                </h3>
                                <h4 className="vertical-timeline-element-subtitle" >
                                University of Nebraska-Lincoln
                                </h4>
                                <p>
                                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                                </p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement className="vertical-timeline-element--work"
                                contentStyle={{ background: '#2CA8FF', color: '#fff' }} 
                                ontentArrowStyle={{ borderRight: '7px solid  #2CA8FF' }}
                                date="May 2019 - August 2019"
                                iconStyle={
                                    { background: '#2CA8FF', color: '#fff' }}
                            //icon={<WorkIcon />}
                            >
                                <h3 className="vertical-timeline-element-title" >
                                Data Analytics Intern
                                </h3>
                                <h4 className="vertical-timeline-element-subtitle" >
                                BAE Systems, Inc.
                                </h4>
                                <p>
                                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                                </p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement className="vertical-timeline-element--work"
                                contentStyle={{ background: '#2CA8FF', color: '#fff' }} 
                                ontentArrowStyle={{ borderRight: '7px solid  #2CA8FF' }}
                                date="May 2019 - Present"
                                iconStyle={
                                    { background: '#2CA8FF', color: '#fff' }}
                            //icon={<WorkIcon />}
                            >
                                <h3 className="vertical-timeline-element-title" >
                                Started Bachelor's Degree
                                </h3>
                                <h4 className="vertical-timeline-element-subtitle" >
                                University of Nebraska-Lincoln
                                </h4>
                                <p>
                                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                                </p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement className="vertical-timeline-element--work"
                                contentStyle={{ background: '#2CA8FF', color: '#fff' }} 
                                ontentArrowStyle={{ borderRight: '7px solid  #2CA8FF' }}
                                date="June 2018 - August 2018"
                                iconStyle={
                                    { background: '#2CA8FF', color: '#fff' }}
                            //icon={<WorkIcon />}
                            >
                                <h3 className="vertical-timeline-element-title" >
                                Warehouse Associate
                                </h3>
                                <h4 className="vertical-timeline-element-subtitle" >
                                Braber Equipment
                                </h4>
                                <p>
                                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                                </p>
                            </VerticalTimelineElement>

                        </VerticalTimeline>
                    </Container>
                </div>
                <DefaultFooter />
            </div>
        </React.Fragment>
    );
}

export default Portfolio;