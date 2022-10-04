import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Intro from '../theme/sections/intro/intro';
import Features from '../theme/sections/features/features';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>

/*<header className="bg-blue-800">
<div className="container mx-auto text-center py-24">
  <h1 className="text-4xl font-bold text-white">{siteConfig.title}</h1>
  <p className="text-xl py-6 text-white">{siteConfig.tagline}</p>
Considérant
  <div className="py-10">
    <Link
      className="bg-white rounded-md text-gray-500 px-4 py-2"
      to="/docs/intro"
    >
      Docusaurus Tutorial - 5min ⏱️
    </Link>
  </div>
</div>
</header>*/
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
			title={siteConfig.title}
			description={siteConfig.tagline}
			keywords={siteConfig.customFields.keywords}
			//metaImage={useBaseUrl(`img/${siteConfig.customFields.image}`)}
			wrapperClassName={'page-home'}
		>
			<Intro />, 
      <Features></Features>
		</Layout>
  );
}
