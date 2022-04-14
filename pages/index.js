import Navbar from "../components/Navbar";
import Eventcard from "../components/Eventcard";
import Slider from "../components/Slider";
import Heading from "../components/Heading";
import Footer from "../components/Footer";


const index = () => {
    return (
        <>
            <Navbar />
            <Slider />
            <div className="about_us">
                <Heading heading="kjsieit alumni" />
                <div className="about_us_section">
                    <div className="image_section">
                        <img src="/images/college.jpg"/>
                    </div>
                    <div className="about_us_paras">
                        <p>
                            KJSIEIT has been committed to connect and create a dedicated and committed community of The KJSIEIT - Alumni to support the institution — in form of resources, donations and guest lecturers in its quest to become a premier Institution.
                        </p>
                        <p>
                            The faculty network endeavors to motivate alumni to participate in various institute activities in the loop. It aims to keep the Alumni records updated in the database. The Alumni connect also ensures that the Alums are kept updated about the different ventures and activities of the college.
                        </p>
                        <p>
                            We hold a strong alumni base and with better networking, we take a pride in hosting many of our alumni to contribute towards their Alma Mater while honoring them of their achievements!
                        </p>
                    </div>
                </div>
                <div className="vision_mission">
                    <div className="vison">
                        <Heading heading="our vison"/>
                        <p>
                            To be universally accepted as a synonym of quality, excellence and commitment in the field of engineering education by nurturing talent and transforming young minds to realize their potential and become future ready engineers
                        </p>
                    </div>
                    <div className="mission">
                        <Heading heading="our mission"/>
                        <p>
                            To provide students with an extensive knowledge of engineering to refine their professional skills.
                            To train students to be industry ready and capable of working effectively as an individual and in a team.
                        </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default index;
