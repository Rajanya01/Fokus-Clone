import React from 'react';
import './style.css';

export default function Page() {
    const Creators = {
        Asish: {
            name: "Asish Chanchalani",
            img: "https://www.fokus.shop/cdn/shop/files/ashishchanchlani.jpg?v=1738667110&width=1920",
            title: "“Fokus—naam hi nahi, ek vibe hai! The branding, the taste, the whole energy of it is so addictive that it’s effortlessly becoming my daily companion.”"
        },
        Scout: {
            name: "Tanmay “Scout”",
            img: "https://www.fokus.shop/cdn/shop/files/Scout.jpg?v=1738666810&width=1920",
            title: "“Being among the first to try Fokus, I knew from the first sip—this wasn’t just a drink; it was an experience! Now, I proudly say I’m its biggest fan.”"
        },
        Purav: {
            name: "Purav Jha",
            img: "https://www.fokus.shop/cdn/shop/files/purav_jha.jpg?v=1738666979&width=1920",
            title: "“Is 400ml ki bottle mein itni cheezein hai! Gym se lekar shoot tak, har jagah Fokus mera saath dega to keep me going all day long.”"
        },
    };

    return (
        <div className="h-[800px] w-full bg-[#f8f7d8] flex flex-col items-center">
            <h1 className="text-5xl mt-8">WHAT YOUR FAVOURITES SAY</h1>
            <div className="flex flex-wrap justify-center gap-6 mt-8">
                {Object.values(Creators).map((creator, index) => (
                    <div key={index} className="h-[600px] w-[450px] border-2 border-black flex flex-col items-center text-center bg-white rounded-lg 
                    shadow-[0px_5px_0px_0px_rgba(0,0,0)] hover:shadow-[0px_5px_0px_0px_rgba(0,0,0,0.4)] transition-all duration-300 ease-in-out">
                        <img src={creator.img} alt={creator.name} className="h-[430px] w-full object-cover rounded-t-md" />
                        <h2 className="text-[17px] font-bold mt-4">{creator.name}</h2>
                        <p className="mt-2 px-2">{creator.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
