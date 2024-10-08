

interface HonorCard {
    card: {
        name: string;
        image: string;
    }
}


function HonorCard({card}:  HonorCard) {  
    
    return (
        <div className="w-[400px] h-[300px] rounded-3xl shadow-[0px_2px_2px_2px_rgba(0,0,0,0.25)]
                        border-2 border-[#39906A] overflow-hidden"
            >
            <img src={card.image} className="w-full h-[80%] object-cover" alt="noalt" />
            <div className="flex items-center justify-center h-[20%]">
                <p className="text-center text-xl">{card.name}</p>
            </div>
        </div>
        
    )
}


export default HonorCard