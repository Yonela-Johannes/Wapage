import './animations.css'


const About = props => {

    const { aboutDisplay } = props;
  return (
        <>
        {aboutDisplay && (
        <section className="details">
                    <h1 className='title'>About Me</h1>
                    <div className="detailsContainer">
                            <div className="detailsContent about-details">
                                <h2 className="detailsTitle">Web-Developer</h2>
                                    <span className="detailsSubtitle">I love to create designs which speaks, keep it clear, minimal and simple.</span>
                                    <div className="container">
                                        <div className="detailsUserData">
                                            <p className="detailsDescription">
                                                Age: 
                                            </p>
                                            <p className="detailsDescriptionOne">
                                                27
                                            </p>
                                        </div>
                                        <div className="detailsUserData">
                                            <p className="detailsDescription">
                                                Gender:
                                            </p>
                                            <p className="detailsDescriptionOne">
                                                Male
                                            </p>
                                        </div>
                                        <div className="detailsUserData">
                                            <p className="detailsDescription">
                                                Languages:
                                            </p>
                                            <p className="detailsDescriptionOne">
                                                English, Xhosa, Afrikaans
                                            </p>
                                        </div>
                                        <div className="detailsUserData">
                                            <p className="detailsDescription">
                                                Work:
                                            </p>
                                            <p className="detailsDescriptionOne">
                                                Full-Stack Web-Developer
                                            </p>
                                        </div>
                                    </div>
                            </div>
                    </div>
                    <div className="detailsContainerTwo">
                            <div className="detailsContent about-details">
                                <h2 className="detailsTitle">My SKills</h2>
                                    <span className="detailsSubtitle">I love to create designs which speaks, keep it clear, minimal and simple.</span>
                                    <div className="container">
                                        <div className="detailsData">
                                            <p className="detailsDescription">
                                                Working with web technologies and UI/UX design, and Frontend Frameworks and
                                                Libraries.
                                            </p>
                                            <p className="detailsDescription">
                                                Working with web technologies and UI/UX design, and Frontend Frameworks and
                                                Libraries.
                                            </p>
                                        </div>
                                    </div>
                            </div>
                    </div>
            </section>
        )}
    </>
  )
}

export default About