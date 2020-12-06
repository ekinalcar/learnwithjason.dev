import { h, Fragment } from 'preact';
import { SectionFeaturedEpisodes } from '../components/section-featured-episodes.js';
import { SectionHero } from '../components/section-hero.js';
import { SectionNextEpisode } from '../components/section-next-episode.js';
import { SectionSponsors } from '../components/section-sponsors.js';
import { SectionTopics } from '../components/section-topics.js';

export default ({ sponsors }) => (
  <Fragment>
    <SectionHero />
    <SectionNextEpisode />
    <SectionFeaturedEpisodes />
    <SectionSponsors sponsors={sponsors} />
    <SectionTopics />
  </Fragment>
);
