import { useEffect, useState } from "react";

const Services = () => {
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch('/json/services.json')
            .then(res => res.json())
            .then(data => setService(data.services))
    }, [])
    console.log(service);
    return (
        <section className="mt-16 px-4 max-w-screen-2xl mx-auto">
            <h3 className="text-3xl font-medium">You need it we&apos;ve got it.</h3>
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-16">
            {service.map(item=> <div key={item.id} className="text-center">
                    <p className="border-b-[1px] pb-2 inline-block px-2 mb-2 border-black">icon</p>
                    <p className="text-base mb-1">{item.name}</p>
                    <p className="text-xs">{item.shortDesc}</p>
                </div>)}
                
            </div>
        </section>
    );
};

export default Services;