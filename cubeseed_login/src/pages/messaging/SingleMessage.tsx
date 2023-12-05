import React from "react"

const SingleMessage = () => {
  // const [formData,setFormData]=useState([]);

  // useEffect(()=>{
  //     fetch('')
  //     .then((Response)=>Response.json)
  //     .then((data)=>{
  //         const valuesArray = Object.values(data);
  //         setFormData(valuesArray[0])
  //     })
  //     .catch((error)=>{
  //         console.error('Error fetching messages',error);

  //     })
  // },[formData])
  return (
    <>
      <div className=" text-md flex   flex-col items-end  gap-5 p-4  text-gray-900 ">
        <div className="flex w-full flex-col gap-5 ">
          <p className=" h-fit w-fit max-w-[70%] rounded-lg rounded-bl-none bg-gray-200 p-2 shadow-lg ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quasi
            aut vitae amet? Vel exercitationem repudiandae magni aperiam
            distinctio! Autem cupiditate consequuntur, amet corporis asperiores
            illo voluptatem pariatur maxime commodi dolores possimus quaerat
            deserunt eius ipsa ex reiciendis magnam beatae laudantium, enim
            velit iure repellat, nobis placeat. Autem sit aut inventore
            exercitationem, soluta, ipsa perferendis deserunt dicta, possimus
            quos repellendus facilis! Incidunt eum odit minima vero perspiciatis
            deserunt consequatur ratione. Porro, ipsam dolores vitae consectetur
            hic repellat ea? Expedita assumenda voluptatum a sequi eligendi odit
            corrupti. Ea, vero, dolores iure porro dolore inventore veritatis
            atque ex ipsam non mollitia odio?
          </p>

          <p className=" h-fit w-fit max-w-[70%] rounded-lg rounded-bl-none bg-gray-200 p-2 shadow-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quasi
            aut vitae amet? Vel exercitationem repudiandae magni aperiam
            distinctio! Autem cupiditate consequuntur, amet corporis asperiores
            illo voluptatem pariatur maxime commodi dolores possimus quaerat
            deserunt eius ipsa ex reiciendis magnam beatae laudantium, enim
            velit iure repellat, nobis placeat. Autem sit aut inventore
            exercitationem, soluta, ipsa perferendis deserunt dicta, possimus
            quos repellendus facilis! Incidunt eum odit minima vero perspiciatis
            deserunt consequatur ratione. Porro, ipsam dolores vitae consectetur
            hic repellat ea? Expedita assumenda voluptatum a sequi eligendi odit
            corrupti. Ea, vero, dolores iure porro dolore inventore veritatis
            atque ex ipsam non mollitia odio?
          </p>
        </div>

        <p className=" h-fit w-fit rounded-lg rounded-br-none bg-gray-200 p-2  shadow-lg ">
          Lorem ipsum dolor sit, amet consectetur adipisicing .
        </p>
      </div>
    </>
  )
}

export default SingleMessage
