import React from 'react';
// import Footer from '../../Components/Footer';
// import Navbar from '../../Components/Navbar';
import image from "../../Images/energy.png";

const OneBlog = () => {
  return (
    <div className="">
        <article>
          <h1 className='text-4xl font-bold text-center mt-24 md:mt-0'>Exercise and Mental health</h1>
          <div className='flex gap-4 my-8 justify-center flex-wrap'>
            <div className="author font-bold">Fitness - your mind</div>
            <div className="separator font-bold">||</div>
            <div className="author font-bold">Shola Balogun</div>
            <div className="separator font-bold hidden sm:inline">||</div>
            <div className="date font-bold">July 30, 2022.</div>
          </div>

          <p className='first-letter:text-5xl first-letter:font-bold blog-paragraph clear-right md:mt-9'>
            This is commonly quoted by fitness personnels: "Exercises
            not only changes your body. It changes your mind, your
            attitude and your mood."
            How exactly does exercise impact your mind and even
            change your mood?
            You couldn't imagine engaging in a physical activity like
            running, stretching or even in chores at home like
            scrubbing, cleaning and these make you begin to feel better?
          </p>

          <div className='my-10 md:mx-8 md:my-5 flex justify-center'>
            <img src={image} alt="" />
          </div>

          <p className="blog-paragraph">
            It has been researched that more than a quarter of adults in
            the world population do not get enough exercises and this has
            an impact on their mental and physical health.
          </p>

          <p className='blog-paragraph mx-auto'>
            We'll be looking at how engaging in exercises has an impact on
            your mental health.
          </p>

          <div className='blog-paragraph'>
            <ul className="list-disc">
              <li>
                <h1 className="blog-header">
                  Prevent Anxiety, Depression disorders and reduces the risk for
                  mental illnesses.
                </h1>
                
                <p>
                  Psychologists have recorded the impact of exercises on most
                  mental health issues of youths. A study found out that running
                  for 15minutes a day or walking for an hour can reduce the risk of
                  major depression by 26 per cent.
                </p>
              </li>

              <li>
                <h1 className="blog-header">
                  Lower Stress levels.
                </h1>

                <div>
                    <p>
                      Stress is what we can always experience from school, work or
                      any social engagements. Mental stress can also arise from
                      multitasking or attempting to proffer solutions to seemingly
                      difficult issues.
                    </p>
                    <p>
                      We see how we are wrapped around these activities resulting in
                      stress and getting enough exercises to lower stress levels will
                      greatly impact the mental health positively by reducing the
                      production of the stress hormone, cortisol.
                    </p>
                </div>
              </li>

              <li>
                <h1 className="blog-header">
                  Boost Endorphis production
                </h1>

                <p>
                  When you exercise, your body produces endorphins which
                  makes you feel more pleasure, helps you relax, feel less physical
                  and emotional pain.
                </p>
              </li>

              <li>
                <h1 className="blog-header">Slowing cognitive decline in adults and the elderly.</h1>

                <div>
                  <p>
                    Exercises helps prevent cases of dementia in the elderly and
                    helps improve cognitive functions in youths and young adults.
                    It has been shown that women who were physically fit in their
                    middle ages were 60 percent less likely to develop dementia
                    than their peers.
                  </p>
                  
                  <p>
                    Sharper memory, verbal fluency, accurate reasoning were
                    observed in youths who made exercising a daily routine.
                  </p>
                </div>
              </li>

              <li>
                <h1 className="blog-header">Exercising can improve a sense of purpose</h1>

                <div>
                  <p className="my-4">
                    You just want to feel that connection to you, developing
                    positive emotions towards people, issues and general positivity
                    in life;
                    all these show you care for your mental health and exercising
                    will make you develop strength,build resilience and maintain a
                    high energy towards achieving your set goals,also building your
                    self worth.
                  </p>
                  
                  <p>
                    Trying to neglect the Indulgence in team sports isn't
                    completing the equation. Exercising is also in engaging in
                    sports like football,volleyball.
                    Studies have shown that tying out your working out
                    routine with your friends,team or small community will
                    decrease the feeling of loneliness, increase happiness and
                    act as a source of motivation to sticking with your routine.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <p className='blog-paragraph'>
            You can hit the gym, pick up your shoes.
            You can walk that distance, leave the house. Cycling, swimming are
            examples of other outdoor activities.
            Indoor exercises you can engage in includes: yoga, squat, sit
            ups, planks, aerobic dances and jumping jacks.
          </p>

          <p className="blog-paragraph">
            You deserve to be happy and exercising can take you out of that 'low energy'
            state. Set a routine, stick to it and share with friends if need be.
          </p>
        </article>
    </div>
  )
}

export default OneBlog;