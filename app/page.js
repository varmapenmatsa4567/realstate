import Card from "@/components/Card";
import FilterBar from "@/components/FilterBar";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="bg-white w-screen">
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
    </div>
  );
}
