import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Experience"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="https://jordanict.com/2021/sites/default/files/images/logos/ASAC-01.jpg"
								alt="ASAC"
								className="work-image"
							/>
							<div className="work-title">Internship</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">26/3/2023- 19/10/2023</div>
						</div>

						{/* <div className="work">
							<img
								src="./twitter.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Twitter</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">2019 - Present</div>
						</div> */}
					</div>
				}
			/>
		</div>
	);
};

export default Works;
