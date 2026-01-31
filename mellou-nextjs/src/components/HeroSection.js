export default function HeroSection() {
    return (
        <section className="image-section" id="home">
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-6 col-md-6 col-sm-12 mb-5 mb-md-0 text-center containera-images">
                        <img
                            src="/img/container-removebg-preview.png"
                            className="img-fluid mx-auto"
                            alt="Mellou Pudding Container"
                        />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 text-center delicacy-text mt-4 mt-md-0 conteinara-img">
                        <img
                            src="/assets/DelicacyDesktop.webp"
                            className="img-fluid mx-auto"
                            alt="Delicacy Text"
                        />
                    </div>
                </div>
            </div>
            <button className="button-nav">
                <a href="https://www.google.co.in/maps/search/nesto+in+kozhikode/@11.254514,75.7892008,14z/data=!3m1!4b1?entry=ttu">
                    <strong>WHERE TO BUY?</strong><br />Find a store
                </a>
                <i className="fa-solid fa-map-location-dot"></i>
            </button>
        </section>
    );
}
