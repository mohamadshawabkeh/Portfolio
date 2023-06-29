import React from "react";

function article_1() {
	return {
		date: "26/3-19/10 in 2023",
		title: "Reading Topics",
		description:
			"In intership, we had several topic to read and learn about them, all of items are decumented in the following: ",
		keywords: [
			"The Benefits of Cloud Computing",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Content of reading</div>
					<a href="https://mohamadshawabkeh.github.io/reading-notes/">
						<img
							src="data:image/png;base64,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"
							alt="random"
							className="randImage"
						/>
					</a>
				</div>
			</React.Fragment>
		),
	};
}

// function article_2() {
// 	return {
// 		date: "7 May 2023",
// 		title: "Artificial Intelligence in Healthcare",
// 		description:
// 			"AI is transforming the healthcare industry, from improving patient outcomes to streamlining operations. Discover the latest applications of this game-changing technology.",
// 		style: ``,
// 		keywords: [
// 			"Artificial Intelligence in Healthcare",
// 			"Tharindu",
// 			"Tharindu N",
// 			"Tharindu Nayanajith",
// 		],
// 		body: (
// 			<React.Fragment>
// 				<h1>Content of article 2</h1>
// 			</React.Fragment>
// 		),
// 	};
// }

const myArticles = [article_1];  //article_2

export default myArticles;
