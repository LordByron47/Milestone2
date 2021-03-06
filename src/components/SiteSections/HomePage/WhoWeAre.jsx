import React, { Component } from 'react';

class WhoWeAre extends Component {

    render() {
        return (
            <React.Fragment >
                <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 white justify-center" id="whoWeAre" style={{ backgroundColor: '#0099ff', width: "105%", position: "relative", left: "-15px", top:"-15px" }}>

                    <div className="container" style={{ position: "relative", left: "60px" }}>
                        <div className="row">
                            <div className="col">
                                <h1 className="sectionHeading font88 white">WHO WE ARE</h1>
                            </div>
                        </div>
                        <div className="container" style={{ position: 'relative', left: "-25px" }}>
                            <div className="row" style={{ marginTop: '50px' }}>
                                <div className="col-5">
                                    <img alt="story" width='300' height='auto' src="../images/story_icon.png"></img>
                                </div>
                                <div className="col">
                                    <h3 style={{ marginBottom: "20px", marginTop: '10px' }}>OUR STORY</h3>
                                    <p style={{ width: '454px' }}>Ardent Labs' team of entrepreneurs develop business ideas in learning science
                                    and technology. The minimum viable product (MVP) of these ideas are quickly developed and tested to get
                                    feedback and market validation. Successful MVPs will receive seed funding to fully develop the app.
                                    The most promising ones get spun-off as independent companies by the lead entrepreneur(s) from the
                                    lab upon receiving venture funding.</p>
                                </div>
                            </div>
                            <div className="row" style={{ marginTop: '50px' }}>
                                <div className="col-5">
                                    <img alt="eye" width='300' height='auto' src="../images/eye_icon.png"></img>
                                </div>
                                <div className="col">
                                    <h3 style={{ marginBottom: "20px", marginTop: '10px' }}>OUR VISION</h3>
                                    <p style={{ width: '454px' }}>Artificial Intelligence and 5G Networks are disruptive technologies that will lead to
                                    highly interactive and personalized learning experiences for students, more effective learning management tools
                                    for teachers, and holistic evaluation of student performance for parents. We invest in companies, incubate
                                    start-ups, and develop software and solutions that meet the needs of next generation learning.</p>
                                </div>
                            </div>
                            <div className="row" style={{ marginTop: '50px' }}>
                                <div className="col-5">
                                    <img alt="technology" width='300' height='auto' src="../images/technology_icon.png"></img>
                                </div>
                                <div className="col">
                                    <h3 style={{ marginBottom: "20px", marginTop: '10px' }}>TECHNOLOGY</h3>
                                    <p style={{ width: '454px' }}>Artificial Intelligence and 5G Networks are disruptive technologies that will lead to highly
                                    interactive and personalized learning experiences for students, more effective learning management tools for teachers, and
                                    holistic evaluation of student performance for parents. We invest in companies, incubate start-ups, and develop software
                                    and solutions that meet the needs of next generation learning.</p>
                                </div>
                            </div>
                            <div className="row" style={{ marginTop: '50px' }}></div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    };
};

export default WhoWeAre;