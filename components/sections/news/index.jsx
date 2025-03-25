"use client";

import { useState, useMemo } from 'react';
import { NewsContainer } from './news-container';
import { NewsHeader } from './news-header';
import { NewsTabs } from './news-tabs';
import { NewsCarousel } from './news-carousel';
import { newsItems } from './news-data';

export function NewsSection() {
  const [activeTab, setActiveTab] = useState('All');

  const filteredNews = useMemo(() => {
    if (activeTab === 'All') return newsItems;
    return newsItems.filter(item => 
      item.category.toLowerCase() === activeTab.toLowerCase()
    );
  }, [activeTab]);

  return (
    <section className="bg-white pt-0 py-4">
      <NewsContainer>
        <NewsHeader />
        <div className="space-y-8">
          {/* <NewsTabs activeTab={activeTab} setActiveTab={setActiveTab} /> */}
          <NewsCarousel items={filteredNews} />
        </div>
      </NewsContainer>
    </section>
  );
}