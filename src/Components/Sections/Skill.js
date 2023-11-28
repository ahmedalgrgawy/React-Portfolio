import React from 'react';
import skill1 from '../../images/ui-design.png';
import skill2 from '../../images/website-design.png';
import skill3 from '../../images/app-design.png';

export const Skill = () => {
    return (
        <section className='skills' id='skills'>

            <h1 className='skillTitle'>
                What I Do
            </h1>

            <p className='secP'>ada daad sss sadad adad a adadsad da</p>

            <div className='skillRows'>

                <div className='skillRow'>

                    <img src={skill1} alt=''></img>

                    <div className='text'>

                        <h2>Skill Name</h2>

                        <p>Skill Desc Text</p>

                    </div>

                </div>

                <div className='skillRow'>

                    <img src={skill2} alt=''></img>

                    <div className='text'>

                        <h2>Skill Name</h2>

                        <p>Skill Desc Text</p>

                    </div>

                </div>

                <div className='skillRow'>

                    <img src={skill3} alt=''></img>

                    <div className='text'>

                        <h2>Skill Name</h2>

                        <p>Skill Desc Text</p>

                    </div>

                </div>

            </div>

        </section>
    )
}
