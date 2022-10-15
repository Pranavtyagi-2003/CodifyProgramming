import React from 'react'
import './BlogDesign.css'

function BlogDesign({BlogImage1,BlogHeading,AdviceHeading,BlogAdvice,BlogName,BlogImage2}) {
    return (
        <div>
            <div className="blog-content">
                <div className="left-blog">
                    <img src={BlogImage1} alt="" />
                </div>
                <div className="right-blog">
                    <div className="blog-heading">
                        {BlogHeading}
                    </div>
                    <div className="advice-heading">
                        <p>{AdviceHeading}</p>
                    </div>
                    <div className="blog-advice">
                        <p>{BlogAdvice}</p>
                    </div>
                    <div className="image-name">
                        <div className="blog-image">
                            <img src={BlogImage2} alt="" />
                        </div>
                        <div className="blog-name">
                            <span>{BlogName}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogDesign