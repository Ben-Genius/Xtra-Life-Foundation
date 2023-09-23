import { Button, Box, Stack, Card } from "@mantine/core";
import { BsHeart } from "react-icons/bs";
import { GiMissileLauncher } from "react-icons/gi"
import { FaPersonDotsFromLine } from "react-icons/fa6"
import img1 from '../../../assets/sanitation.png';
import img2 from '../../../assets/hunger.png';
import img4 from '../../../assets/goal10.png';
import img5 from '../../../assets/goal1.png';
import img6 from '../../../assets/goal-16.png';
import img7 from '../../../assets/climate.png';

const OurStory = () => {
  const images: Array<string> = [img1, img2, img4, img5, img6, img7];

  return (
    <>
      <div
        className="bg-cover text-white max-w-full h-[17rem] sm:h-screen  bg-center bg-no-repeat bg-imgSm sm:bg-imgMd lg:bg-imgLg"

      >
        <div className="p-3 md:p-5 w-full mb-3 flex flex-col items-center h-full justify-center relative">
          <h1 className="font-bold text-5xl sm:6xl text-center font-sans">For The Future Ghana Story </h1>

        </div>


      </div>
      <div className="p-5 md:p-7 lg:p-8 xl:p-12 mx-2 md:mx-8 storyBackground text-white lg:relative mt-10 lg:-mt-[21rem] xl:-mt-[23rem]  bg-violet-400  md:red-blue-500 lg:bg-blue-600 xl:bg-slate-500 leading-7 ">
        <h2 className=" font-bold text-xl whitespace-nowrap sm:text-4xl pb-8 ">Background of Xtra Life Foundation </h2>
        <i className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center text-black">"We exist solely for this generation and the generation to come. We believe Ghana can be a better place."</i>
        <p className="mt-6">Exercitation fugiat magna enim mollit.Velit enim id in incididunt anim occaecat velit laboris nisi qui commodo.Magna anim Lorem eiusmod anim in ex exercitation occaecat.Voluptate est excepteur labore dolor reprehenderit.Consequat quis amet dolore eu aliqua ipsum.
          Dolore qui minim officia do incididunt do dolor incididunt labore Lorem laboris sunt occaecat.Id consectetur nulla occaecat duis voluptate magna quis voluptate et id labore anim elit.
        </p>
        <div className="h-6"></div>
        <h5> --2016 </h5>
        <div className="h-6"></div>
        <p className="max-w-3xl sm:max-w-full">Elit do non Lorem ea tempor cupidatat cillum veniam veniam est laboris nisi incididunt mollit.Dolore sunt eu excepteur cupidatat non aliquip eu cillum irure Lorem ad nisi pariatur mollit.Exercitation labore dolor eiusmod exercitation in laborum et proident minim eiusmod deserunt.
          Anim labore irure et ad reprehenderit deserunt.Adipisicing laborum nulla aliqua dolore et cillum aliquip fugiat.
          Do aliqua amet elit do officia.Velit amet et sint dolor laboris velit id aliqua incididunt sunt.Laboris ex voluptate duis sint magna do.Occaecat consequat nisi ipsum eiusmod in cupidatat amet laboris.Voluptate irure adipisicing cupidatat pariatur.Pariatur excepteur mollit nulla tempor ut magna dolore esse duis incididunt aliqua.
          Quis voluptate anim minim incididunt Lorem cupidatat exercitation laboris ut.Sunt amet sint aute tempor labore exercitation magna excepteur culpa ipsum adipisicing aliqua anim aliquip.
          Non et mollit ea aute labore est ut adipisicing adipisicing Lorem nulla.Commodo pariatur nostrud magna enim commodo in laboris voluptate velit veniam.Veniam ex deserunt consequat duis commodo laborum sint aliqua irure sit incididunt laborum laboris anim.
          Commodo nulla ex magna ipsum nostrud ad cupidatat id aliquip.Nostrud adipisicing id Lorem ullamco.Deserunt dolor ad ex do culpa Lorem eu ea.
          Minim et quis laboris est cupidatat pariatur est cupidatat reprehenderit mollit veniam non ullamco sit.
          Nostrud ipsum duis cillum cupidatat sunt laborum et aliqua exercitation occaecat adipisicing laborum.Duis nulla anim exercitation nostrud officia proident consectetur proident deserunt deserunt quis.
        </p>

        <div className="h-6"></div>
        <h5> --2017 </h5>
        <div className="h-6"></div>
        <p className="max-w-3xl sm:max-w-full">Elit do non Lorem ea tempor cupidatat cillum veniam veniam est laboris nisi incididunt mollit.Dolore sunt eu excepteur cupidatat non aliquip eu cillum irure Lorem ad nisi pariatur mollit.Exercitation labore dolor eiusmod exercitation in laborum et proident minim eiusmod deserunt.
          Anim labore irure et ad reprehenderit deserunt.Adipisicing laborum nulla aliqua dolore et cillum aliquip fugiat.
          Do aliqua amet elit do officia.Velit amet et sint dolor laboris velit id aliqua incididunt sunt.Laboris ex voluptate duis sint magna do.Occaecat consequat nisi ipsum eiusmod in cupidatat amet laboris.Voluptate irure adipisicing cupidatat pariatur.Pariatur excepteur mollit nulla tempor ut magna dolore esse duis incididunt aliqua.
          Quis voluptate anim minim incididunt Lorem cupidatat exercitation laboris ut.Sunt amet sint aute tempor labore exercitation magna excepteur culpa ipsum adipisicing aliqua anim aliquip.
          Non et mollit ea aute labore est ut adipisicing adipisicing Lorem nulla.Commodo pariatur nostrud magna enim commodo in laboris voluptate velit veniam.Veniam ex deserunt consequat duis commodo laborum sint aliqua irure sit incididunt laborum laboris anim.
          Commodo nulla ex magna ipsum nostrud ad cupidatat id aliquip.Nostrud adipisicing id Lorem ullamco.Deserunt dolor ad ex do culpa Lorem eu ea.
          Minim et quis laboris est cupidatat pariatur est cupidatat reprehenderit mollit veniam non ullamco sit.
          Nostrud ipsum duis cillum cupidatat sunt laborum et aliqua exercitation occaecat adipisicing laborum.Duis nulla anim exercitation nostrud officia proident consectetur proident deserunt deserunt quis.
        </p>
        <div className="h-6"></div>
        <h5> --2018 </h5>
        <div className="h-6"></div>
        <p className="max-w-3xl sm:max-w-full">Elit do non Lorem ea tempor cupidatat cillum veniam veniam est laboris nisi incididunt mollit.Dolore sunt eu excepteur cupidatat non aliquip eu cillum irure Lorem ad nisi pariatur mollit.Exercitation labore dolor eiusmod exercitation in laborum et proident minim eiusmod deserunt.
          Anim labore irure et ad reprehenderit deserunt.Adipisicing laborum nulla aliqua dolore et cillum aliquip fugiat.
          Do aliqua amet elit do officia.Velit amet et sint dolor laboris velit id aliqua incididunt sunt.Laboris ex voluptate duis sint magna do.Occaecat consequat nisi ipsum eiusmod in cupidatat amet laboris.Voluptate irure adipisicing cupidatat pariatur.Pariatur excepteur mollit nulla tempor ut magna dolore esse duis incididunt aliqua.
          Quis voluptate anim minim incididunt Lorem cupidatat exercitation laboris ut.Sunt amet sint aute tempor labore exercitation magna excepteur culpa ipsum adipisicing aliqua anim aliquip.
          Non et mollit ea aute labore est ut adipisicing adipisicing Lorem nulla.Commodo pariatur nostrud magna enim commodo in laboris voluptate velit veniam.Veniam ex deserunt consequat duis commodo laborum sint aliqua irure sit incididunt laborum laboris anim.
          Commodo nulla ex magna ipsum nostrud ad cupidatat id aliquip.Nostrud adipisicing id Lorem ullamco.Deserunt dolor ad ex do culpa Lorem eu ea.
          Minim et quis laboris est cupidatat pariatur est cupidatat reprehenderit mollit veniam non ullamco sit.
          Nostrud ipsum duis cillum cupidatat sunt laborum et aliqua exercitation occaecat adipisicing laborum.Duis nulla anim exercitation nostrud officia proident consectetur proident deserunt deserunt quis.
        </p>
        <Button className="bg-red-400 h-[3rem] mt-7 rounded-lg">
          DOWNLOAD BROCHURE HERE
        </Button>
      </div>
      <div className="bg-gray-600 flex flex-col px-7 pt-10 sm:pt-0 md:h-screen items-center justify-center pb-4 ">
        <h1 className="font-bold text-center max-w-[43rem] mx-auto text-white md:text-5xl">Your "Little" Help Us Transform The Lives Of Many Children
        </h1>
        <div className="text-white p-3 md:flex items-center justify-between max-w-full md:space-x-10">
          <Stack>
            <Box className="max-w-sm mx-auto">
              <FaPersonDotsFromLine size='3rem' color='white' className="mt-10" />
              <h1 className="font-bold text-4xl pb-4 mt-6">Our Objective</h1>
              <p>
                Ad voluptate aliquip laboris esse ea eiusmod sint cupidatat do.  Ut tempor pariatur cupidatat exercitation elit ipsum sint cupidatat.Eiusmod sunt culpa elit voluptate sint excepteur irure culpa et qui non.Labore ea tempor dolore et dolore labore ea labore tempor labore sint in irure.

              </p>
            </Box>
          </Stack>
          <Box className="max-w-sm mx-auto">
            <BsHeart size='3rem' color='white' className="mt-10" />
            <h1 className="font-bold text-4xl pb-4 mt-6">Our Vision</h1>
            <p>Occaecat fugiat id aliqua deserunt dolore laborum excepteur ut ea magna aliquip irure.Exercitation magna aliqua adipisicing qui voluptate proident sunt tempor amet est officia.
              Deserunt labore mag
            </p>
          </Box>
          <Box className="max-w-sm mx-auto">
            <GiMissileLauncher size='3rem' color='white' className="mt-10" />
            <h1 className="font-bold text-4xl pb-4 mt-6">Our Mission</h1>
            <p>Amet sit mollit cupidatat dolor est qui ipsum.Ut velit id est proident reprehenderit sunt ullamco.
              Anim aliquip id non nostrud ea.Officia eu occaecat do do do aliqua aliqua aliquip adipisicing.Nisi exercitation ea labore duis minim quis et elit id aliquip veniam commodo ut.
              Dolor exercitation sint ipsum sunt qui laboris aliqua aliqua.
            </p>
          </Box>
        </div>
      </div>

      <div className="mb-10 p-2 font-bold xl:max-w-[80%] mx-auto">
        <center>
          <h1 className="text-red-400">Our Sustainable Development Goals</h1>

        </center>
        <p>Voluptate ea adipisicing duis excepteur culpa aliquip non incididunt ex.Velit irure eiusmod eiusmod cillum do consequat.Et elit adipisicing labore enim magna sunt consectetur.
          Do sint labore enim dolor dolore enim adipisicing ipsum.Reprehenderit anim eiusmod incididunt reprehenderit dolore eiusmod nulla laborum velit.Labore esse sit quis pariatur ut reprehenderit tempor duis.
          Irure ut labore deserunt commodo enim cillum.Labore ea pariatur aute esse et aliquip et adipisicing irure sint nulla velit.Aliquip deserunt veniam cillum amet elit enim culpa ad dolor id.Elit dolor proident enim ea ea incididunt eu do ad aute laborum enim elit.
          Lorem velit esse ut ullamco deserunt.Labore laborum laborum est in id non aliqua nulla ea.Lorem voluptate non et enim voluptate ex nulla eiusmod et culpa cupidatat mollit aliqua.
        </p>
        <div className="grid grid-cols-1 mt-10 sm:grid-cols-2 sm:gap-0 md:gap-5 md:grid-cols-3 gap-4 place-items-center ">
        {images.map((image, index) => (
        <img key={index} src={image} alt={`image-${index}`} />
      ))}
        </div>

      </div>
    </>
  );
};
export default OurStory;