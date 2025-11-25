'use client'
import { useState } from 'react'

export default function Video() {
    const [isPlaying, setIsPlaying] = useState(false)
    
    return (
        <>
        {/*Video One Start */}
        <section className="video-one">
            <div className="container">
                <div className="video-one__inner wow fadeInUp" data-wow-delay="300ms">
                    {!isPlaying ? (
                        <>
                            <div className="video-one__bg"
                                style={{ backgroundImage: ' url(assets/images/backgrounds/video-img.png)' }} ></div>
                            <div className="video-one__video-link">
                                <a className="video-popup" onClick={() => setIsPlaying(true)}>
                                    <div className="video-one__video-icon">
                                        <span className="icon-play"></span>
                                        <i className="ripple"></i>
                                    </div>
                                </a>
                            </div>
                        </>
                    ) : (
                        <div className="video-one__iframe-wrapper">
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/hD4UFO9gLpI?autoplay=1&rel=0"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    )}
                </div>
            </div>
        </section>
        {/*Video One End */}
        <style jsx>{`
            .video-one__iframe-wrapper {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: #000;
            }
            .video-one__iframe-wrapper iframe {
                min-height: 400px;
            }
            @media (max-width: 767px) {
                .video-one__iframe-wrapper iframe {
                    min-height: 300px;
                }
            }
        `}</style>
        </>
    )
}
