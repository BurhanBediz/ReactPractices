import Aders from "./components/Aders";
import Bders from "./components/Bders";
import Cders from "./components/Cders";
import Clock from "./components2/clock";
import Clock2 from "./components5/clock";
import Liste from "./components2/Liste";
import Table from "./components2/Table";
import Tablo from "./components2/Tablo";
import students from "./assets/data/Students.json"
import Kisi from "./components3/Kisi"
import "./assets/css/style.css"
import Cards from "./component4/Cards";
import Akis from "./component4/Akis";
/* import ImagePractice from "./component4/image-practice"; */
import ProfileCard from "./component4/ProfileCard";
import Counter from "./components5/Counter";
import RandomImage from "./components5/RandomImage";
import Bilgiler from "./components6/Bilgiler";
import Tours from "./components6/Tours";





function App() {
  return <div className="App">
   {/*  <Aders/>
    <Bders/>
    <Cders/> */}
    {/* <Tablo/> */}
    {/* <Liste/>
    <Table/> */}
    {/* <Clock color="red" bgColor="blue"/> */}
  {/*   <div className="card"> 
    {students.map((student,index)=>{
      const {isim,img,yas,kurs} = student
      return (
        
        <Kisi key = {index} ad={isim} img={img}  yas = {yas} kurs={kurs}/>
      )
    })}
    </div> */}
    
   {/*  <div className="yanyana"> 
    {students.map((student,index)=>{
      const {isim,img,yas,kurs} = student
      return (
        
        <Cards key = {index} ad={isim} img={img}  yas = {yas} kurs={kurs}/>
      )
    })}
    </div>
   <Akis/> */}
  {/* <ProfileCard name="Oya Oy" location="İzmir, Turkey" shots="6" followers="1236000" followings="2568"/>
  <ProfileCard name="Ayşe Er" location="İstanbul, Turkey" shots="8" followers="824000" followings="45638"/> */}
  {/* <Clock color="red" bgColor="blue"/> */}
  {/* <Clock2 color="red" bgColor="blue"/>
  <Clock2/>
  <Counter/> */}
  {/* <RandomImage/> */}
{/*   <Bilgiler/> */}
  <Tours/>
  </div>;
}

export default App;
