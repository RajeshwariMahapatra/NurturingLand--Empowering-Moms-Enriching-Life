// health services section trackers included

import React from "react";
import styled from "styled-components";
// Components
import ProjectBox from "../Elements/ProjectBox";
import FullButton from "../Buttons/FullButton";
import { Link } from "react-router-dom";
// Assets
import Gynaec from "../../assets/img/gynaec.png";
import Vaccine from "../../assets/img/vaccine.png";
import ChildGrowth from "../../assets/img/child_growth.png";
import Nutrition from "../../assets/img/nutrition.jpg";
// import ProjectImg5 from "../../assets/img/projects/5.png";
// import ProjectImg6 from "../../assets/img/projects/6.png";
// import AddImage2 from "../../assets/img/add/add2.png";

export default function Projects() {
	return (
		<Wrapper id="projects">
			<div className="whiteBg">
				<div className="container">
					<HeaderInfo>
						<h1 className="font40 extraBold">Health Services for you</h1>
						<p className="font13">
							Period days are never easy. So here's our simple Healthcare to
							make them less worser
							<br />
							Share your location and get to the nearest doctor's clinic.
						</p>
					</HeaderInfo>
					<div className="row textCenter">
						<div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
							<Link to={"/appointment"}>
								<ProjectBox
									img={
										Gynaec
									}
									title="Get Gynaecologist's care"
									text="Take an appointment from the nearest gynaecologist"
								/>
							</Link>
						</div>
						<div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
							<Link to={"/"}>
								<ProjectBox
									img={
										Nutrition
									}
									title="Nutrition Status"
									text="Get to the nearest medical store for pills or pads"
								/>
							</Link>
						</div>
						<div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
							<Link to={"/track"}>
								<ProjectBox
									img={Vaccine}
									title="Vaccine Tracker"
									text="Get an complete details of your period cycles, mood swings ,diet chart and sleep cycle "
								/>
							</Link>
						</div>
						<div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
							<Link to={"/signup"}>
								<ProjectBox
									img={
										ChildGrowth
									}
									title="Child Growth"
									text="Get an complete details of your period cycles, mood swings , diet chart and sleep cycle "
								/>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.section`
	width: 100%;
`;
const HeaderInfo = styled.div`
	@media (max-width: 860px) {
		text-align: center;
	}
`;
const Advertising = styled.div`
	padding: 100px 0;
	margin: 100px 0;
	position: relative;
	@media (max-width: 1160px) {
		padding: 60px 0 40px 0;
	}
	@media (max-width: 860px) {
		flex-direction: column;
		padding: 0 0 30px 0;
		margin: 80px 0 0px 0;
	}
`;
const ButtonsRow = styled.div`
	@media (max-width: 860px) {
		justify-content: space-between;
	}
`;
const AddLeft = styled.div`
	position: relative;
	width: 50%;
	p {
		max-width: 475px;
	}
	@media (max-width: 860px) {
		width: 80%;
		order: 2;
		text-align: center;
		h2 {
			line-height: 3rem;
			margin: 15px 0;
		}
		p {
			margin: 0 auto;
		}
	}
`;
const AddRight = styled.div`
	width: 50%;
	@media (max-width: 860px) {
		width: 80%;
		order: 2;
	}
`;
const AddLeftInner = styled.div`
	width: 100%;
	position: absolute;
	top: -300px;
	left: 0;
	@media (max-width: 1190px) {
		top: -250px;
	}
	@media (max-width: 920px) {
		top: -200px;
	}
	@media (max-width: 860px) {
		order: 1;
		position: relative;
		top: -60px;
		left: 0;
	}
`;
const ImgWrapper = styled.div`
	width: 100%;
	padding: 0 15%;
	img {
		width: 100%;
		height: auto;
	}
	@media (max-width: 400px) {
		padding: 0;
	}
`;
