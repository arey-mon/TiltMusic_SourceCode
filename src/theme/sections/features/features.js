import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Container from './../../components/container/container';
import Heading from './../../components/heading/heading';

const forall_feature_list = [
    {
        icon: 'red',
        title: '[Fans] Discover new music',
        desc: 'Find the hottest releases and get recommendations' 
    },
    {
        icon: 'purple',
        title: '[Fans] Enjoy various sets of offers',
        desc: 'Take a part of the sound: creators get 95% of the revenues'
    },
    {
        icon: 'red',
        title: '[Fans] Rank to the top',
        desc: 'Do just like usual, and access exclusive content & extras' 
    },
];

const forcreators_feature_list = [
    {
        icon: 'red',
        title: '[Artists] Connect with the world',
        desc: 'Create your gallery, connect with a global marketplace, import physical or digital products and Mint NFTs on web 3.0.' 
    },
    {
        icon: 'purple',
        title: '[Artists] Support your fans',
        desc: 'Offer exclusive bonuses, challenge your community and reward your best fans'
    },
    {
        icon: 'red',
        title: '[Artits] Increase your fanbase',
        desc: 'Benefit from highlights and boosters and interact with a global communitys' 
    },
];



export default function Features() {

	const context = useDocusaurusContext();
	const {siteConfig = {}} = context;

	const component = 'tilt-features';

    const items0 = forall_feature_list.map((item, index) => {
		const {
			icon,
			title,
			desc,
		} = item;

		return (
			<div className={`${component}__item`} key={index}>
				<div className={`${component}__title ${component}__title--${icon}`}>
					{title}
				</div>
				<div className={`${component}__desc`}>
					{desc}
				</div>
			</div>
		)
	});

    const items1 = forcreators_feature_list.map((item, index) => {
		const {
			icon,
			title,
			desc,
		} = item;

		return (
			<div className={`${component}__item`} key={index}>
				<div className={`${component}__title ${component}__title--${icon}`}>
					{title}
				</div>
				<div className={`${component}__desc`}>
					{desc}
				</div>
			</div>
		)
	});

    return (
		<div className={component}>
			<Container
				componentClass={component}
				size={'medium'}
                bgColor={'light0'}
			>
				<Heading
					componentClass={component}
					title={'Artists and Fans: a joint venture'}
					align={'middle'}
				/>
				<div className={`${component}__content`}>
					{items0}
					{items1}
				</div>
			</Container>
		</div>
	)
}
