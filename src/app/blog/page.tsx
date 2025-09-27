import { Header } from '@/components/home/Header';
import BlogSection from '@/components/blog/BlogSection';
import ExpertiseSection from '@/components/blog/ExpertiseSection';
import ArticlesSection from '@/components/blog/ArticlesSection';

export default function BlogPage() {
  return (
    <div>
      <Header />
      <div className="pt-20">
        <BlogSection />
        <ExpertiseSection />
        <ArticlesSection />
      </div>
    </div>
  );
}