import Card from "@/components/Card";
import FilterBar from "@/components/FilterBar";
import Navbar from "@/components/Navbar";
import PageBox from "@/components/PageBox";
import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineTwitter } from "react-icons/ai";

export default function Home() {
  return (
    <div className="bg-white w-screen text-black">
      <div className="w-screen p-5 shadow-md">
        <Navbar/>
        <FilterBar/>
      </div>
      <div className="p-5">
        <h1 className="text-black text-[1.70rem] font-bold">Commercial Real Estate Brampton</h1>
        <p className="text-black text-sm font-medium my-3">203 Properties for Sale</p>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          <Card 
            img="https://photos.zolo.ca/21-23-union-street-brampton-W9012085-1-p768.jpg?2024-07-04+12%3A56%3A03"
          />
          <Card
            img="https://photos.zolo.ca/13-80-pertosa-drive-brampton-W9010948-1-p768.jpg?2024-07-05+09%3A27%3A03"
          />
          <Card
            img="https://photos.zolo.ca/18-2051-williams-parkway-brampton-W9010215-1-p768.jpg?2024-07-04+13%3A10%3A03"
          />
          <Card
            img="https://photos.zolo.ca/12-17-worthington-avenue-brampton-W9008524-1-p768.jpg?2024-07-03+13%3A27%3A03"
          />
          <Card
            img="https://photos.zolo.ca/17-chapel-street-brampton-W8482036-4-p768.jpg?2024-06-26+19%3A09%3A03"
          />
          <Card
            img="https://photos.zolo.ca/16-171-advance-boulevard-brampton-W9007668-1-p768.jpg?2024-07-02+17%3A23%3A04"
          />
          <Card
            img="https://photos.zolo.ca/b-212-9300-goreway-drive-brampton-W8490624-1-p768.jpg?2024-06-29+16%3A03%3A02"
          />
          <Card
            img="https://photos.zolo.ca/205-6475-mayfield-road-brampton-W8485896-1-p768.jpg?2024-06-27+18%3A07%3A05"
          />
          <Card
            img="https://photos.zolo.ca/2-8235-financial-drive-brampton-W8485728-1-p.jpg?2024-06-27+16%3A53%3A02"
          />
        </div>
      </div>
      <div className="mt-5 flex flex-col justify-center items-center">
        <p className="">Showing results</p>
        <p>1 - 36 of 203</p>
        <div className="flex gap-2 my-5">
          <PageBox pageNo="1" isCurrent={true}/>
          <PageBox pageNo="2"/>
          <PageBox pageNo="3"/>
          <PageBox pageNo="4"/>
          <PageBox pageNo="5"/>
          <PageBox pageNo="6"/>
          <PageBox pageNo=">"/>
        </div>
      </div>
      <div className="border-[#e5e5e5] border-t-[1px] mx-16 my-10"></div>
      <p className="mx-16 my-10 text-base">
      The listing data above is provided under copyright by the Canadian Real Estate Association. The listing data is deemed reliable but is not guaranteed accurate by the Canadian Real Estate Association nor Zolo.
      </p>
      <div className="border-[#e5e5e5] border-t-[1px] mx-16 my-10"></div>
      <div className="mx-16 flex justify-center items-center gap-4">
        <a className="hover:underline font-semibold cursor-pointer">Careers</a>
        <a className="hover:underline font-semibold cursor-pointer">Zolo Reality</a>
        <a className="hover:underline font-semibold cursor-pointer">Contact</a>
        <a className="hover:underline font-semibold cursor-pointer">Privacy & Terms</a>
        <a className="hover:underline font-semibold cursor-pointer">Sitemap</a>
        <a className="hover:underline font-semibold cursor-pointer">Mobile</a>
      </div>
      <div className="flex items-center justify-center gap-2 mt-6">
        <GrFacebookOption size={40} className="text-[#212121] p-2 rounded-full border-[#e5e5e5] border-[1px] cursor-pointer hover:border-black"/>
        <AiOutlineTwitter
         size={40} className="text-[#212121] p-2 rounded-full border-[#e5e5e5] border-[1px] hover:border-black cursor-pointer"/>
      </div>
      <div className="bg-white h-10"></div>
    </div>
  );
}
