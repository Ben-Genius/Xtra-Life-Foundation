import { Paper } from "@mantine/core";

const Community = () => {
  const cardsData = [
    {
      image:
        "https://images.unsplash.com/photo-1487546331507-fcf8a5d27ab3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
      title: "Our Objective ",
      description:
        "Our 2023/24 Objective is to be able to raise GHC 500,000 for phase one of construction For The Future Village which would cater for the needs of underprivileged children in Ghana."
    },
    {
      image:
        "https://images.unsplash.com/photo-1511524511424-6fd4e055e7ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
      title: "Vision Statement",
      description:
        "To expand our community beyond pioneers and members to include stakeholders and beneficiaries, to join us in our quest to create and develop society that is more ethical and open to positive change"
    },
    {
      image:
        "https://images.unsplash.com/photo-1547496614-cefe5757271a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
      title: "Mission Statement ",
      description:
        "Our aim is to reach out to disadvantaged children in Ghana through the organizing of outreaches, donations, and sensitization projects. We have organized over fifteen (15) charity events and projects since 2016 and impacted the lives of over 3000 underprivileged children."
    }
  ];

  return (
    <div className="w-full mx-auto  bg-blue-300 py-6">
      <div className="w-[97%] sm:w-full mx-auto">
        <h1 className="text-white font-bold max-w-4xl text-2xl sm:text-3xl md:text-4xl mx-auto p-2 text-center">
          One of the Largest Global Shifts in the World Trending In our Missive
          Community Now!
        </h1>
        <div className="md:flex items-center justify-center  mx-auto">
          {cardsData.map((card, index) => (
            <Card
              key={index}
              image={card.image}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Community

interface Props {
    image: string;
    title: string;
    description: string
}

const Card = ({ image, title, description }: Props) => {
  return (
    <Paper className="flex flex-col items-center p-8 mx-auto h-auto  md:w-[25rem] w-11/12 relative mb-10 md:mb-0 mt-10 transition duration-500 ease-in-out transform hover:scale-105">
      <img
        src={image}
        alt="Card Illustration"
        className="w-11/12 sm:w-[25rem] relative mx-auto -mt-10"
      />
      <h2 className="text-2xl sm:text-3xl  font-sans md:text-4xl font-bold mb-2 text-orange-600 mt-5">
        {title}
      </h2>
      <p className="text-center md:text-md text-sm max-w-sm text-gray-400">{description}</p>
    </Paper>
  );
};

