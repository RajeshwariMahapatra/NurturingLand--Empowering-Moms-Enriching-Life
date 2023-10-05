import React, { useState } from "react";
import { jsPDF } from "jspdf";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import moment from "moment";
import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import EventNoteIcon from "@mui/icons-material/EventNote";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Hidden from "@mui/material/Hidden";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import "./TrackPeriod.css";
import TrackResults from "./TrackResults";
import TopNavbar from "../Nav/TopNavbar";
import Footer from "../Sections/Footer";
import { toast, Toaster } from "react-hot-toast";


function TrackPeriod() {
	const [date, setDate] = useState(moment()); // current time
	const [focusedInput, setFocusedInput] = useState(false);
	const [count, setCount] = useState(5);
	const [cycleCount, setCycleCount] = useState(28);
	const [doReveal, setDoReveal] = useState(false);

	// const handleDaysLast = (isMinus) => {
	// 	if (isMinus) {
	// 		if (count > 1) {
	// 			setCount(count - 1);
	// 		} else {
	// 			setCount(10);
	// 		}
	// 	} else {
	// 		if (count >= 10) {
	// 			setCount(1);
	// 		} else {
	// 			setCount(count + 1);
	// 		}
	// 	}
	// };

	const handleVaccination = (isMinus, childAge) => {
		// Define age thresholds for different vaccines
		const ageThresholds = [2, 4, 6, 12, 18]; // Age thresholds in months
		const vaccines = [
			"Hepatitis B Vaccine",
			"Polio Vaccine",
			"DTaP Vaccine",
			"Hib Vaccine",
			"MMR Vaccine",
			"Varicella Vaccine",
		];
	
		// Determine the current vaccine based on child's age
		let currentVaccine = "";
	
		for (let i = 0; i < ageThresholds.length; i++) {
			if (childAge <= ageThresholds[i]) {
				currentVaccine = vaccines[i];
				break;
			}
		}
	
		if (isMinus) {
			// Reduce child's age
			childAge = childAge - 1;
			if (childAge < 0) {
				childAge = 0;
			}
		} else {
			// Increase child's age
			childAge = childAge + 1;
			if (childAge > ageThresholds[ageThresholds.length - 1]) {
				childAge = ageThresholds[ageThresholds.length - 1];
			}
		}
	
		// Display the current vaccine based on child's age
		console.log(`Current Recommended Vaccine for ${childAge} months: ${currentVaccine}`);
	
		// Here you can set the updated childAge state if needed.
		// setChildAge(childAge);
	};
	

	
	const generatePDF = () => {
		var doc = new jsPDF("l", "pt", "A3");
		doc.html(document.querySelector("#Results"), {
			callback: function (pdf) {
				pdf.save("Tracker_Results.pdf");
			},
		});
		toast.success("PDF Generated");
	};

	return (
		<>
			<Toaster
				position="top-center"
				reverseOrder={false}
				gutter={8}
				containerClassName=""
				containerStyle={{}}
				toastOptions={{
					// Define default options
					className: "",
					duration: 5000,
					style: {
						background: "#FA4C86",
						color: "#fff",
					},

					// Default options for specific types
					success: {
						duration: 3000,
						theme: {
							primary: "#FA4C86",
							secondary: "black",
						},
					},
				}}
			/>
			<TopNavbar />
			<div
				style={{
					height: "100vh",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Box>
					{!doReveal && (
				<Grid container
				style={{
				  backgroundColor: "#E8DEFF",
				  textAlign: "center",
				  borderRadius: "15px",
				  padding: "10px",
				}}
			  >
				<Grid item xs={12} md={4}>
				  <Box my={2}>
					<Typography variant="h6">
					  Enter the Date of Birth
					</Typography>
				  </Box>
				</Grid>
				<Grid item xs={12} md={4}>
				  <Box my={3}>
					<Grid
					  container
					  style={{ textAlign: "center", display: "flex" }}
					>
					  <Grid item xs={6}>
						<SingleDatePicker
						  date={date}
						  onDateChange={(date) => setDate(date)}
						  focused={focusedInput}
						  onFocusChange={({ focused }) => setFocusedInput(focused)}
						  id="your_unique_id"
						  numberOfMonths="1"
						  displayFormat={() => "D"}
						  isOutsideRange={() => false} // Allow all dates
						  customInputIcon={<EventNoteIcon />}
						/>
					  </Grid>
					  <Grid item xs={6} style={{ textAlign: "left" }}>
						<Box onClick={() => setFocusedInput(true)}>
						  <Box className="date-day">{date.format("dddd")}</Box>
						  <Box className="date-day">{date.format("MMMM")}</Box>
						</Box>
					  </Grid>
					</Grid>
				  </Box>
				</Grid>
			  
				{/* Button Code */}
				<Grid item xs={12} style={{ textAlign: "center" }}>
				  {!doReveal ? (
					<Box my={3}>
					  <Button
						variant="contained"
						className="track-button"
						onClick={() => setDoReveal(true)}
					  >
						Track Now
					  </Button>
					</Box>
				  ) : (
					<Box my={3}>
					  <Button
						component="a"
						href="#Results"
						color="secondary"
						variant="contained"
					  >
						Look below
					  </Button>
					</Box>
				  )}
				</Grid>
			  </Grid>
		)}
					<Box></Box>












					{/* Results */}
					{doReveal ? (
						<Box mt={10}>
							<Grid container id="Results">
								<Grid item xs={12} style={{ textAlign: "center" }}>
									<Box
										my={2}
										style={{
											display: "flex",
											justifyContent: "center",
											columnGap: "20px",
										}}
									>
										<Button
											component="a"
											href="/track"
											className="track-button"
											style={{ color: "white", fontWeight: "500" }}
										>
											Back
										</Button>
										<Typography variant="h5">
											Vaccination estimation for the next 3 months
										</Typography>
									</Box>
								</Grid>
								<Grid item xs={12}>
									<Box style={{ display: "flex", justifyContent: "center" }}>
										{/* ========================================= RESULTS ========================================= */}
										<TrackResults
											startPeriodDate={date}
											daysLast={count}
											cycleCount={cycleCount}
										/>
									</Box>
								</Grid>
							</Grid>
							<Grid container>
								<Grid item xs={12} style={{ textAlign: "center" }}>
									<Box mt={5}>
										<Typography variant="subtitle1" color="text.secondary">
											Please note that this is only an estimation of your
											menstrual cycle.
										</Typography>
									</Box>
									<Box mt={3}>
										<Hidden smUp>
											<Button
												variant="contained"
												startIcon={<FileDownloadIcon />}
												className="track-button"
												onClick={generatePDF}
											>
												Download current month
											</Button>
										</Hidden>
										<Hidden smDown>
											<Button
												variant="contained"
												startIcon={<FileDownloadIcon />}
												className="track-button"
												onClick={generatePDF}
											>
												Download your calendar
											</Button>
										</Hidden>
									</Box>
									{/* <Box mt={10}>
										<Typography variant="h4" style={{ fontStyle: "italic" }}>
											Want to use a more personalized tracker?
										</Typography>
									</Box>
									<Box mt={3}>
										<Button
											variant="contained"
											size="large"
											style={{ backgroundColor: "#9867C5" }}
											component="a"
											href="/login"
										>
											Create a free account with us
										</Button>
									</Box>
									<Box mt={3}>
										<Typography variant="subtitle1" color="text.secondary">
											Sign up to gain access to more features and reminders with
											just a click. It's that simple.
										</Typography>
									</Box> */}
								</Grid>
							</Grid>
						</Box>
					) : null}
				</Box>
			</div>
			<Footer />
		</>
	);
}

export default TrackPeriod;