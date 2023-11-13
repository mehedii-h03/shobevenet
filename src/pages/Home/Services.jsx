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
        <section className="mt-32 px-4 lg:px-0 max-w-screen-2xl mx-auto">
            <h3 className="text-3xl font-medium text-secondary-color">You need it we&apos;ve got it.</h3>
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-14 text-secondary-color">
                {service.map(item => <div key={item.id} className="text-center">
                    <i className={`border-b inline-block px-2 mb-2 border-secondary-color text-2xl ${item.iconClass}`}></i>

                    {/* <img className="border-b pb-2 inline-block px-2 mb-2 border-secondary-color h-11 w-11" src={item.icon} alt="" /> */}
                    <p className="text-2xl font-medium mb-1">{item.name}</p>
                    <p className="text-sm">{item.shortDesc}</p>
                </div>)}

            </div>
        </section>
    );
};

export default Services;