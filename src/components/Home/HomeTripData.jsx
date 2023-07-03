import React, {  useEffect, useState } from 'react'
import { db } from '../../config/FirebaseConfig';
import { collection, getDocs } from 'firebase/firestore';



function HomeTripData() {
    const currentDate = new Date();
    const year = currentDate.getFullYear().toString().slice(-4);
    const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
    const day = currentDate.getDate().toString().padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;
    const [totalDocs, setTotalDocs] = useState(0);

    const getTrips = async () => {
        const querySnapshot = await getDocs(collection(db, "RouteList", "R1", formattedDate, "All", "Pickup"));
        const documentIds = querySnapshot.docs.map((doc) => doc.id);
        const totalDocs = documentIds.length;
        setTotalDocs(totalDocs);
      };
      
      useEffect(() => {
        getTrips();
      });

    return (
        <>
            <div className="flex flex-col p-2 gap-2 ">
                <div className="flex flex-row gap-2 items-center">
                    <label htmlFor="from" className="font-medium text-lg text-[#222831] font-sans ">
                        From
                    </label>
                    <input
                        className="appearance-none block w-full text-gray-700 border-gray-600 border-2 rounded-lg py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        type="date"
                        id="from"
                       
                    />
                </div>
                <div className="flex flex-row gap-2 items-center mt-2">
                    <input
                        className="appearance-none block w-full text-gray-700 border-gray-600 border-2 rounded-lg py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        type="date"
                        id="to"
                       
                    />
                    <label className="font-medium text-lg font-sans cursor-pointer" >
                        To
                    </label>
                </div>
            </div>

            <div className='m-2 md:flex-col md:flex '>
                <div class=" h-auto grid grid-cols-2 grid-rows-2 gap-5 ">
                    <div class="border-[3px] border-[#00ABB3] rounded-lg py-2 flex flex-col justify-center items-center">
                        <p class="text-sm  text-[#222831] font-semibold  text-center font-sans">Total Trip</p>
                        <p class="text-4xl text-[#00ABB3] font-bold mt-1 text-center font-sans">{totalDocs}</p>
                    </div>
               
                    <div class="rounded-lg border-[3px] border-[#3A1078] py-2 flex flex-col justify-center items-center">
                        <p class="text-sm  text-[#222831] font-semibold text-center">Not Alloted</p>
                        <p class="text-4xl text-[#3A1078] font-bold mt-1 text-center font-sans">00</p>
                    </div>
                    <div class="rounded-lg border-[3px] border-[#FF8B13] py-2 flex flex-col justify-center items-center">
                        <p class="text-sm  text-center font-semibold text-[#222831] font-sans">Alloted</p>
        
                        <p class="text-4xl text-[#FF8B13] font-bold mt-1 text-center font-sans">00</p>
                    </div>
                    <div class="rounded-lg border-[3px] border-[#03C988] py-2 flex flex-col justify-center items-center">
                        <p class="text-sm  text-center font-semibold font-sans ">Completed</p>
                        <p class="text-4xl text-[#03C988] font-bold mt-1 text-center ">00</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeTripData