'use client';

import React, { useState } from 'react';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children, isOpen, onToggle }) => {
  return (
    <div className="border-b border-gray-700 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full text-left py-4 px-0 flex justify-between items-center text-white font-semibold hover:text-blue-400 transition-colors"
      >
        <span className="text-3xl protest-strike-regular">{title}</span>
        <svg
          className={`w-5 h-5 transform transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[900px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="pb-4 text-secondary leading-relaxed open-sans-light max-h-[500px] overflow-y-auto custom-scrollbar">
          {children}
        </div>
      </div>
    </div>
  );
};

interface AccordionSectionProps {
  openSection: string | null;
  onSectionToggle: (section: string) => void;
}

export default function AccordionSection({ openSection, onSectionToggle }: AccordionSectionProps) {
  return (
    <div className="content-card">
      <AccordionItem
        title="VISION STATEMENT"
        isOpen={openSection === 'about'}
        onToggle={() => onSectionToggle('about')}
      >
        <p className="mb-4">
        At Cerverse, we believe everyone should have the freedom to create, but the most creative and impactful voices deserve to be discovered and rewarded.
        </p>
        <p className="mb-4">
        We combine open participation with transparent, community-driven curation—making it easy for readers to discover high-quality stories and for writers to connect with real audiences.
        Through on-chain transparency, personalized recommendations, and dynamic reward systems, Cerverse becomes more than a platform; it's an evolving, gamified storyworld where your choices have value.
        </p>
        <p  className="mb-4">
        Cerverse is not another amateur playground. It's a fair, engaging, and rewarding ecosystem—where talent is seen, readers are valued, and everyone can be a part of the next literary revolution.
        </p>
      </AccordionItem>

      <AccordionItem
        title="KEY PLATFORM FEATURES & FUNCTIONS"
        isOpen={openSection === 'vision'}
        onToggle={() => onSectionToggle('vision')}
      >
        
        <p className="mb-4">
        <b>Fair On-Chain Rewards:</b> Every meaningful interaction —reading, voting, commenting— can unlock real rewards (tokens, NFTs, badges) for both writers and readers.
        </p>
        <p className="mb-4">
        <b>Transparent Curation:</b> Community voting, reader reviews, and algorithmic recommendations bring the best stories to the top.
        </p>
        <p className="mb-4">
        <b>Personalized Discovery:</b> AI-powered suggestions, trending lists, and social signals help readers find hidden gems, not just popular content.
        </p>
        <p className="mb-4">
        <b>Branching Story Creation:</b> Writers can publish interactive stories with multiple paths and endings.
        </p>
        <p className="mb-4">
        <b>Creator Profiles & Leaderboards:</b> Writers build their brands, gain followers, and climb the leaderboard for extra visibility and bonuses.
        </p>
        <p className="mb-4">
        <b>Gamified Reader Experience:</b> Earn points, badges, and special NFT collectibles by exploring stories, participating in quests, and supporting writers.
        </p>
        <p className="mb-4">
        <b>Social Layer:</b> In-story commenting, reactions, and shareable achievements create an active and connected community.
        </p>
        <p className="mb-4">
        <b>Open Participation, Not Open Chaos:</b> Everyone can join, but only the most valuable and beloved content is rewarded and spotlighted.
        </p>
        
      </AccordionItem>

      <AccordionItem
        title="FAQ"
        isOpen={openSection === 'faq'}
        onToggle={() => onSectionToggle('faq')}
      >
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-primary mb-2 protest-strike-regular">1. What is Cerverse?</h4>
            <p className="text-secondary">
              Cerverse is an on-chain, interactive storytelling platform where writers create branching stories and readers actively participate, unlock rewards, and help shape which stories succeed. Unlike traditional writing platforms, Cerverse uses blockchain, community curation, and gamified incentives to make every story meaningful and every reader's choice valuable.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-primary mb-2 protest-strike-regular">2. Is Cerverse like Wattpad or just for amateur writers?</h4>
            <p className="text-secondary">
              No. Cerverse is open to everyone, but it's not an unfiltered playground. Through transparent curation (community votes, recommendations, and reward systems), the most original, impactful, and engaging works rise to the top—so readers can discover real talent and writers can be fairly rewarded.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-primary mb-2 protest-strike-regular">3. How does Cerverse reward writers and readers?</h4>
            <p className="text-secondary">
              Every interaction—reading, choosing, commenting, voting—can generate rewards on-chain: tokens, NFTs, badges, and unique collectibles. Writers earn by attracting readers and positive feedback; readers earn by exploring, voting, and supporting new talent.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-primary mb-2 protest-strike-regular">4. How will I find good stories?</h4>
            <p className="text-secondary">
              Cerverse uses social discovery, curated lists, algorithmic recommendations, and visible community feedback to surface the most engaging, highest-quality content—so you won't need to spend hours digging through endless posts to find something great.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-primary mb-2 protest-strike-regular">5. How does curation work?</h4>
            <p className="text-secondary">
              Content is ranked by a combination of community votes, reading engagement, reviews, and algorithmic analysis. Editors' picks, trending lists, and dynamic leaderboards help surface the best stories, new talent, and under-the-radar gems.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-primary mb-2 protest-strike-regular">6. Can anyone publish on Cerverse?</h4>
            <p className="text-secondary">
              Yes! Cerverse is open to all writers, regardless of experience. But only the most compelling stories, as determined by the community, will get maximum visibility and rewards.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-primary mb-2 protest-strike-regular">7. Is Cerverse free to use?</h4>
            <p className="text-secondary">
              Reading basic content and joining the community is free. Some premium storylines, quests, or advanced features may require micro-payments, but participation and discovery are always accessible.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-primary mb-2 protest-strike-regular">8. How does Cerverse use blockchain?</h4>
            <p className="text-secondary">
              All key actions (publishing, voting, rewarding) are recorded on-chain for transparency, fairness, and security. NFT and token systems power rewards, collectibles, and proof of contribution.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-primary mb-2 protest-strike-regular">9. How is Cerverse different from other writing platforms?</h4>
            <p className="text-secondary">
              Cerverse combines interactive stories, on-chain transparency, real rewards, community-driven curation, and gamified experiences—making it a living storyworld where readers and writers shape the ecosystem together.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-primary mb-2 protest-strike-regular">10. Who is Cerverse for?</h4>
            <p className="text-secondary">
              Cerverse is for writers who want to create, be discovered, and get rewarded. It's for readers seeking more than passive consumption—people who want to participate, support talent, and get value for their choices. And it's for anyone excited about the future of digital storytelling.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-primary mb-2 protest-strike-regular">11. How do I join Cerverse?</h4>
            <p className="text-secondary">
              Simply sign up on our landing page, join the early-access waitlist, and follow us on social media for updates. The first explorers will get exclusive rewards!
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-primary mb-2 protest-strike-regular">12. Can I make real money on Cerverse?</h4>
            <p className="text-secondary">
              Yes—through token rewards, NFT sales, community tipping, and premium story features, both writers and readers have multiple opportunities to earn real value.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-primary mb-2 protest-strike-regular">13. How do I become a top writer or influencer on Cerverse?</h4>
            <p className="text-secondary">
              Create compelling, interactive stories, engage your readers, participate in community events, and climb the leaderboards. The best content and most active community members will always get noticed (and rewarded).
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-primary mb-2 protest-strike-regular">14. How do I contact the team or become a contributor?</h4>
            <p className="text-secondary">
              You can reach out through our contact form, join our Discord/Twitter community, or email us directly. We're looking for writers, readers, developers, project managers, and Web3 enthusiasts to build Cerverse together!
            </p>
          </div>
        </div>
      </AccordionItem>
    </div>
  );
} 