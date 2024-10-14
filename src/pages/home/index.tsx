import {
  AssetSection,
  CommunitySection,
  DownloadSection,
  GoalsSection,
  HeroSection,
  RegulationSection,
  SavingSection,
  Testimonials,
} from "@/components";
import { Layout } from "@/lib";

export default function Home() {
  return (
    <Layout>
      <div className="w-full px-sm">
        <div className="mx-auto max-w-wide">
          <HeroSection />
          <GoalsSection />
          <AssetSection />
          <div className="hidden lg:block">
            <SavingSection />
          </div>
        </div>
        <div>
          <RegulationSection />
          <Testimonials />
        </div>
        <div className="mx-auto max-w-wide">
          <CommunitySection />
          <DownloadSection />
        </div>
      </div>
    </Layout>
  );
}
