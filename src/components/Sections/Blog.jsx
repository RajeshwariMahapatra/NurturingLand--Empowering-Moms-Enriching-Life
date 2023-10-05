// section for featuring top 6 blogs

import React, { useEffect, useState } from "react";
import styled from "styled-components";
// Components
import BlogBox from "../Elements/BlogBox";
import FullButton from "../Buttons/FullButton";
import TestimonialSlider from "../Elements/TestimonialSlider";
// import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

export default function Blog() {
	const [data, setdata] = useState([]);
	const [idi, setidi] = useState([]);
	const getData = async () => {
		let temp = [];
		let ids = [];
		let i = 0;
		const querySnapshot = await getDocs(collection(db, "AllBlogs"));
		querySnapshot.forEach((doc) => {
			// doc.data() is never undefined for query doc snapshots
			if (i < 3) {
				ids.push(doc.id);
				temp.push(doc.data());
				i++;
			} else {
				return;
			}
		});
		setidi(ids);
		setdata(temp);
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<Wrapper id="blog" style={{ marginTop: "50px" }}>
			<div className="whiteBg">
				<div className="container">
					<HeaderInfo>
						<h1 className="font40 extraBold">Our Blog Stories</h1>
						<p className="font13">
							This is the place where our user aware the community
							<br />
							and contribute in a constructive manner.
						</p>
					</HeaderInfo>
					<div className="row textCenter">
						{data.map((item, idx) => (
							<div
								key={idx + 1}
								className="col-xs-12 col-sm-4 col-md-4 col-lg-4"
							>
								<BlogBox
									id={idi[idx]}
									title={item.title}
									text={item.text.slice(0, 100)}
									tag={item.tag}
									author={`${item.name} , ${item.Date}`}
								/>
							</div>
						))}
						{/* <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
							<BlogBox
								title="New Office!"
								text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
								tag="company"
								author="Luke Skywalker, 2 days ago"
							/>
						</div>
						<div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
							<BlogBox
								title="New Office!"
								text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
								tag="company"
								author="Luke Skywalker, 2 days ago"
							/>
						</div> */}
					</div>
					{/* <div className="row textCenter">
						<div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
							<BlogBox
								title="New Office!"
								text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
								tag="company"
								author="Luke Skywalker, 2 days ago"
							/>
						</div>
						<div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
							<BlogBox
								title="New Office!"
								text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
								tag="company"
								author="Luke Skywalker, 2 days ago"
							/>
						</div>
						<div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
							<BlogBox
								title="New Office!"
								text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
								tag="company"
								author="Luke Skywalker, 2 days ago"
							/>
						</div>
					</div> */}
				</div>
			</div>
			<div className="lightBg" style={{ padding: "50px 0" }}>
				<div className="container">
					<HeaderInfo>
						<h1 className="font40 extraBold">Medical Insights</h1>
						<p className="font13">
							Pregnancy 
							<br />During pregnancy, a woman's body undergoes incredible changes to support the growth and development of the baby. From the moment of conception, the body starts producing hormones like progesterone and estrogen to create a nurturing environment for the fetus. As the pregnancy progresses, the baby's organs and systems begin to form, and the mother experiences physical and emotional changes.
						</p>
					</HeaderInfo>
					<TestimonialSlider />
				</div>
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.section`
	width: 100%;
	padding-top: 20px;
`;
const HeaderInfo = styled.div`
	margin-bottom: 30px;
	@media (max-width: 860px) {
		text-align: center;
	}
`;
