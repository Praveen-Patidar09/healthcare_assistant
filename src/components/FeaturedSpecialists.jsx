import React from 'react';

const specialistsData = [
    { name: 'Dr. Evelyn Reed', specialty: 'Cardiologist', image: 'https://i.imgur.com/2s4P0R3.jpg' },
    { name: 'Dr. Samuel Chen', specialty: 'Neurologist', image: 'https://i.imgur.com/G5g4g2E.jpg' },
    { name: 'Dr. Maria Garcia', specialty: 'Dermatologist', image: 'https://i.imgur.com/J3Gqj0F.jpg' },
    { name: 'Dr. Ben Carter', specialty: 'Pediatrician', image: 'https://i.imgur.com/y8OMw8m.jpg' },
];

const SpecialistCard = ({ name, specialty, image }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition duration-300">
        <img src={image} alt={name} className="w-full h-56 object-cover object-center" />
        <div className="p-4">
            <h3 className="font-bold text-lg text-primary">{name}</h3>
            <p className="text-secondary font-medium">{specialty}</p>
        </div>
    </div>
);

const FeaturedSpecialists = () => {
    return (
        <section id="specialists" className="py-20 bg-light-bg">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-primary">Meet Our Top Specialists</h2>
                    <p className="text-gray-600 mt-2">World-class experts available for you.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {specialistsData.map((doc, index) => (
                        <div key={index} className="animate-fadeInUp" style={{animationDelay: `${index * 0.2}s`}}>
                           <SpecialistCard {...doc} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedSpecialists;