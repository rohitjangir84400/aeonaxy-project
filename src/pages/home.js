import BringWork from "../components/bring_work";
import Content from "../components/content";
import CoolCompanies from "../components/cool_companies";
import Extract from "../components/extract";
import Flexibility from "../components/flexibility";
import Footer from "../components/footer";
import HonestWarning from "../components/honest_warning";
import MainSection from "../components/main_section";
import Make from "../components/make_it_happen";
import NavBar from "../components/navbar";
import RealFeedback from "../components/real_feedback";
import Signup from "../components/signup";
import Inventors from "../components/inventors";
import Helps from "../components/how_fibery_helps";

export default function Home(){
    return(
        <>
        <NavBar/>
        <MainSection/>
        <CoolCompanies/>
        <BringWork/>
        <HonestWarning content='Do you have the permission (or forgiveness) from your team to replace some of their tools?' likes='521' com='471' background='#FFEBF3' />
        <RealFeedback content='“We were finally able to have product planning, high-level executive views, marketing initiatives, content calendars, and async meeting organization all in one place while all referencing the same underlying data.“' name='Jason Williams'/>
        <Flexibility/>
        <HonestWarning content='We give you the basic building blocks: relation databases, visualizations, automation rules, rich-text editor, etc. but you need to have an idea of how your team operates.' likes='321' com='271' background='#F2EDFF'/>
        <RealFeedback content='“I had tried Coda, Notion, and a bunch of other similar tools, but the problem always was that it felt like a system built by others. With Fibery, it feels like the opposite. I build the system, and it just provides an interface to work with my data.“' name='Dax'/>
        <Extract/>
        <HonestWarning content='We wont teach you data analysis; so if you haven not done it before, you will need to invest some time & effort.' likes='183' com='71' background='#BDF2BD'/>
        <RealFeedback content='“Reports are great. You kinda need to get used to them for complex cases and set up your fields and entities properly, but when you do you can get so much information from your data.“' name='Anton Oparienko'/>
        <Helps/>
        <Make/>
        <Signup/>
        <Content/>
        <Inventors/>
        <Footer/>
        </>
    );
}