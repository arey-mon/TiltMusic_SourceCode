import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Container from './../../components/wavecontainer/wavecontainer';

export default function Intro() {
	const context = useDocusaurusContext();
	const {siteConfig = {}} = context;

	const component = 'tilt-intro';

	return (
		<div className={component}>
			<Container
				componentClass={component}
				size={'medium'}
				bgColor={'light2'}
			>
				<div className={`${component}__title`} dangerouslySetInnerHTML={{__html: siteConfig.title}}></div>
				<div className={`${component}__content`}>
					{siteConfig.tagline}
				</div>
			</Container>
		</div>
	);
}
