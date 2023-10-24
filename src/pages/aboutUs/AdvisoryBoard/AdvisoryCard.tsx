interface AdvisoryProps {
  image: string;
  name: string;
  position: string;
}

const AdvisoryCard: React.FC<AdvisoryProps> = ({name, image, position}) => {
return (
  <div className="border p-2 shadow mt-6 ">
      <img src={image} alt="advisor" className="h-[24rem] object-cover w-full  rounded" />
      <div className="bg-gray-500 text-white mt-4 p-2">
          <center>{name}</center>
          <center><b>{position}</b></center>
      </div>
  </div>
)
}

export default AdvisoryCard;
