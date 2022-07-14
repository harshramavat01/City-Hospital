import React from 'react'
import List from '../component/List'

const Doctors = () => {
    const doctorData = [
        {
            image: '../assets/img/doctors/doctors-1.jpg',
            doctorName: 'Atha Smith',
            post: 'Chief Medical Officer',
            description: 'Duis sagittis rutrum neque, quis tincidunt arcu pretium ac.'
        },
        {
            image: '../assets/img/doctors/doctors-2.jpg',
            doctorName: 'John White',
            post: 'Anesthesiologist',
            description: 'Aenean ac turpis ante. Mauris velit sapien.'
        }, 
        {
            image: '../assets/img/doctors/doctors-3.jpg',
            doctorName: 'Umika Loha',
            post: 'Cardiology',
            description: 'Curabitur luctus eleifend odio. Phasellus placerat mi.'
        }, 
        {
            image: '../assets/img/doctors/doctors-4.jpg',
            doctorName: 'Daimy Smith',
            post: 'Neurosurgeon',
            description: 'Morbi vulputate, tortor nec pellentesque molestie, eros nisi ornare purus.'
        },
    ]
    return (
        <>
            <section id="doctors" className="doctors">
                <div className="container">
                    <div className="section-title">
                        <h2>Doctors</h2>
                        <p>Duis sagittis rutrum neque, quis tincidunt arcu pretium ac. Suspendisse sem risus, molestie vitae arcu et,
                            tincidunt viverra erat. Quisque in lectus id nulla viverra sodales in a risus. Aliquam ut sem ex. Duis viverra
                            ipsum lacus, ut pharetra arcu sagittis nec. Phasellus a eleifend elit.</p>
                    </div>
                    <div className="row">
                        <List data={doctorData}/>
                        
                    </div>
                </div>
            </section>


        </>
    )
}

export default Doctors
