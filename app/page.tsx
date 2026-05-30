import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import FeaturedProducts from "@/components/FeaturedProducts";
import Timeline from "@/components/Timeline";
import Qualities from "@/components/Qualities";
import Testimonials from "@/components/Testimonials";
import ServiceStats from "@/components/ServiceStats";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";
import ImageGrid from "@/components/ImageGrid";
import { getTimelineData, getQualities, getImageGridPosts, getFeaturedBlogs } from "@/src/services/api";

export default async function Home() {
  const [timelineData, qualities, imageGridPosts, featuredBlogs] = await Promise.all([
    getTimelineData(),
    getQualities(),
    getImageGridPosts(),
    getFeaturedBlogs()
  ]);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Banner />
      <FeaturedProducts />
      <ImageGrid posts={imageGridPosts} />
      <Testimonials />
      <ServiceStats />
      <Timeline data={timelineData} />
      <Qualities data={qualities} />
      <BlogSection blogs={featuredBlogs} />
      <Footer />
    </main>
  );
}
