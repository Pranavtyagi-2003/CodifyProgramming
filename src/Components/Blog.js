import React from 'react'
import BlogDesign from './BlogDesign'
import './Blog.css'
function Blog({ BlogImage1, BlogHeading, AdviceHeading, BlogAdvice, BlogName, BlogImage2 }) {
  const reactimage1 = "https://www.codecademy.com/resources/blog/content/images/2022/08/Header-Image_2083x875--1--1.png"


  const reactimage2 = "https://media-exp1.licdn.com/dms/image/C4E03AQHCiyKBi3Ji4Q/profile-displayphoto-shrink_400_400/0/1650481969989?e=1666224000&v=beta&t=c9mSgfeCqgZb1jw65iNfr01KzDZQwBr6EXVnredwtlA"


  const cppimage1 = "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"


  const cppimage2 = "https://media-exp1.licdn.com/dms/image/C5603AQGggpw-edDIYA/profile-displayphoto-shrink_400_400/0/1661023345897?e=1666224000&v=beta&t=N1oq1B8Dnl2whfkzjTbqBziIt8Y8WGjFQRSDvwdWVuI"


  const pythonimage1 = "https://media.istockphoto.com/photos/top-view-of-laptop-with-text-python-picture-id1354397311?b=1&k=20&m=1354397311&s=170667a&w=0&h=DharHUztrd67mPcbzpiROGeap2A0O0kqy7NFzJk_Wek="


  const pythonimage2 = "https://media-exp1.licdn.com/dms/image/C5603AQGkptTMXsAcaA/profile-displayphoto-shrink_400_400/0/1650909863930?e=1666224000&v=beta&t=oITbuReOafzvZ7sGdZx4Uuu2R52qYHCxqCusMk0e42g"

  return (
    <div className='Blog-Page'>
      <BlogDesign
        BlogImage1={reactimage1}
        BlogHeading="Coding Advice"
        AdviceHeading="What is React JS ?"
        BlogAdvice="React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on UI components."
        BlogImage2={reactimage2}
        BlogName="Pranav Tyagi"
      />
      <BlogDesign
        BlogImage1={cppimage1}
        BlogHeading="Coding Advice"
        AdviceHeading="What is C++ ?"
        BlogAdvice="C++ is a cross-platform language that can be used to create high-performance applications.C++ was developed by Bjarne Stroustrup."
        BlogImage2={cppimage2}
        BlogName="Khushal Mehta"
      />
      <BlogDesign
        BlogImage1={pythonimage1}
        BlogHeading="Coding Advice"
        AdviceHeading="What is Python ?"
        BlogAdvice="Python is a high-level, interpreted, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation."
        BlogImage2={pythonimage2}
        BlogName="Ritik Singh"
      />
    </div>
  )
}

export default Blog