'use client'
export default function Video() {
    return (
        <>
        {/*Video One Start */}
        <section className="video-one">
            <div className="container">
                <div className="video-one__inner wow fadeInUp" data-wow-delay="300ms">
                    <div className="video-one__embedded-video">
                        <iframe
                            width="100%"
                            height="400"
                            src="https://www.youtube.com/embed/hD4UFO9gLpI?si=McKRsCdFgLxueCqQ&autoplay=0&rel=0"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            style={{
                                borderRadius: '10px',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                            }}
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
        {/*Video One End */}
        
        </>
    )
}
