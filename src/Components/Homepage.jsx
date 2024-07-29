import React from 'react'
import image1 from './Style/Images_Icons/Image1.jpg'
import image2 from './Style/Images_Icons/Image2.jpg'

const Homepage = (props) => {
  return (
    <div className={`p-1 text-${props.text1} bg-${props.bgCol} mt-5`}>
      <div className={`p-1 text-${props.text1} bg-${props.bgCol} my-5`}>
        <div className='flex items-center justify-around w-full my-4'>
          <div className='w-1/3 '>
            <img src={image1} alt="" className='w-full '/>
          </div>
          <div className='w-1/2'>
          <h2 className={`font-["SF_Pro_Text"] text-${props.text} text-3xl font-semibold my-2  tracking-wide`}> GYM Information</h2>
          <p className='font-["SF_Pro_Display"] text-sm text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod deleniti cum totam accusamus asperiores sapiente sunt modi quam repellat ad temporibus saepe, numquam eaque enim in corporis perferendis itaque inventore cumque ipsum unde laboriosam at voluptas architecto? Molestiae eaque consequatur assumenda explicabo, cum natus! Omnis ex quod dolores suscipit quibusdam rerum fugiat minima veniam commodi repellat facere adipisci neque qui placeat, exercitationem, odit reprehenderit officia praesentium. Expedita ipsam incidunt sed fuga deleniti sunt aperiam rem cum numquam voluptas repellendus dicta, eveniet dolorem soluta sapiente? Provident magnam fugit corporis accusantium nulla qui tenetur quos, illo deserunt voluptatibus impedit cum, iste aliquam ullam sed minus veritatis architecto quas quis laudantium. Esse neque alias, voluptates, dolorem autem quidem enim ad impedit minima nostrum eveniet rerum tempora assumenda exercitationem aspernatur pariatur ab ut, cumque facilis. Blanditiis rerum beatae nemo quisquam facere. Voluptatibus earum qui repudiandae, beatae porro possimus eaque voluptas iusto molestias, nam laboriosam!</p>
          </div>
        </div>
        <div className='flex items-center justify-around w-full my-4'>
          
          <div className='w-1/3'>
          <h2 className={`font-["SF_Pro_Text"] text-${props.text} text-3xl font-semibold my-2 tracking-wide`}> GYM Equipements</h2>
          <p className='font-["SF_Pro_Display"] text-sm text-justify'>Choosing the appropriate equipment is challenging, especially if the gym owner wants to make sure that their members get the finest workout experience. The 15 pieces of essential basic gym equipment that every gym needs to meet the needs of gym members, including cardio and strength training apparatus are discussed below. 

Listed below are the 15 item gym equipment list for start up gyms. <br />

1. Resistance Bands <br />

2. Treadmills <br />

3. Free Weights <br />

4. Battle Ropes <br />

5. Rowing Machines <br />

6. Ellipticals <br />

7. Weight Benches <br />

8. Power Racks <br />

9. Cable Machines <br />

10. Cardio Equipment <br />

11. Suspension Trainers <br />

12. Weighted Sleds <br />

13. Stability Balls <br />

14. Spin Bikes <br />

15. Dumbbells <br /></p>
          </div>
          <div className='w-1/2 '>
            <img src={image2} alt="" className='w-full '/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage
