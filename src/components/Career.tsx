import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Cyber Security</h4>
                <h5>WEBEL</h5>
              </div>
              <h3>June - Augeust 2025</h3>
            </div>
            <p>
              Completed a 6-week Summer Internship at Webel on “Advanced Linux for Present & Future,” 
              where I gained practical knowledge of Linux systems and professional technical skills.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Digital Marketing</h4>
                <h5>DataSpace</h5>
              </div>
              <h3>June - July 2024</h3>
            </div>
            <p>
              Data Space Academy in Digital Marketing! 🌐📈This experience has given me invaluable 
              insights into SEO, social media strategies, content marketing, and data analytics.
            </p>
          </div>          
        </div>
      </div>
    </div>
  );
};

export default Career;
