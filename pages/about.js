import React from 'react'
import Header from '../components/Header'

const About = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className='flex justify-left'>
        <h1 className='pt-48 font-semibold text-3xl px-64'>ABOUT US</h1>
      </div>
      <div className='flex justify-center'>
        <div className='max-w-7xl'>
          <p className='px-64 pt-12'>
            Here is a text component! This simple product landing page was
            designed by me in order to practice using TailwindCSS, building and
            using React components + subcomponents and to get more practice
            using NextJS! This project is one of my first where I do not go
            through a tutorial - I'm a self-taught web-developer working in
            Javascript and this project will be on my GitHub; it represents the
            first of a series of projects I will be doing to challenge myself
            and to learn more so that I may one day find a job in tech. So keep
            a look out!
          </p>
          <p className='px-64 pt-12'>
            Oh wait... I forgot, this is a rock landing page! My mistake, I must
            have blanked out and gone on a tangent. Here at Rock Supply Co. we
            supply the finest quality materials that have crystallized into what
            have become rocks on our beautiful Earth. For over 3.5 billion
            years, we have supplied all kinds of customers include those as
            small-scale as local tool-wielding animals, all the way to our
            continental customers such as the Americas and Eurasia. Does any of
            this makes sense? Are you still reading this trying to figure out
            what I'm trying to write? If you answered yes at any point, just
            know that there is no flow to this thought - this is written vomit -
            but, if you still decide to read through - thank you.{' '}
          </p>
          <div className='flex justify-left px-64'>
            <button
              type='button'
              className='bg-green-300 px-16 py-2 rounded-md mt-12'
            >
              <a
                href='https://github.com/kamlnskll'
                target='_blank'
                rel='noopener noreferrer'
              >
                My GitHub
              </a>
            </button>
          </div>
        </div>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png'
          className='object-scale-down h-48 w-96'
        />
      </div>
    </div>
  )
}

export default About
