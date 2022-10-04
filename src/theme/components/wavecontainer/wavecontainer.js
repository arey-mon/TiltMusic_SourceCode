import React from 'react';

export default function Container(props) {

	const component = 'tilt-wavecontainer';

	const {
		componentClass,
		size='default',
		spacingTop='default',
		spacingBottom='default',
		bgColor='none',
		children,
	} = props;

	return (
		<>
			{children &&
				<div className={`
					${component}
					${component}__spacing-top--${spacingTop}
					${component}__spacing-bottom--${spacingBottom}
					${component}__bg-color--${bgColor}
					${component}__${componentClass}
				`}>
					<div className={`
						${component}__inner
						${component}__inner-size--${size}
					`}>
				 		{children}
					</div>
					<svg class={`waves ${component}-waves`} viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
						<defs>
							<path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
						</defs>
						<g class="parallax">
							<use href="#gentle-wave" x="48" y="0" fill="rgba(254,252,254,0.1)" />
							<use href="#gentle-wave" x="47" y="3" fill="rgba(254,252,254,0.2)" />
							<use href="#gentle-wave" x="46" y="5" fill="rgba(254,252,254,0.3)" />
							<use href="#gentle-wave" x="45" y="8" fill="rgba(254,252,254,0.4)" />
							<use href="#gentle-wave" x="44" y="10" fill="rgba(254,252,254,0.5)" />
							<use href="#gentle-wave" x="43" y="13" fill="rgba(254,252,254,0.6)" />
							<use href="#gentle-wave" x="42" y="15" fill="rgba(254,252,254,0.7)" />
							<use href="#gentle-wave" x="41" y="18" fill="rgba(254,252,254,0.8)" />
							<use href="#gentle-wave" x="40" y="20" fill="rgba(254,252,254,0.9)" />
							<use href="#gentle-wave" x="39" y="23" fill="#fefcfc" />
						</g>
					</svg>
				</div>
			}
		</>
	);
}
