import Layout from "@/components/layout/Layout";
import Banner from "@/components/sections/home1/Banner";
import ServicesOne from "@/components/sections/home1/ServicesOne";
import EventOne from "@/components/sections/home1/EventOne";
import SlidingText from "@/components/sections/home1/SlidingText";
import BuyTicket from "@/components/sections/home1/BuyTicket";
import TeamOne from "@/components/sections/home1/TeamOne";
import EventDirection from "@/components/sections/home1/EventDirection";
import GalleryOne from "@/components/sections/home1/GalleryOne";
import ScheduleOne from "@/components/sections/home1/ScheduleOne";
import Brand from "@/components/sections/home1/Brand";
import CTAOne from "@/components/sections/home1/CTAOne";
export default function Home() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <Banner />
        <Brand />
        <SlidingText />
        <ServicesOne />
        <EventOne />
        <BuyTicket />
        <TeamOne />
        <EventDirection />
        <GalleryOne />
        <ScheduleOne />
        <CTAOne />
      </Layout>
    </>
  );
}
