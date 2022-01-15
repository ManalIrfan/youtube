import "./intro.css";
import bg from "../../img/rightpic.jpg";
const intro = () => {
	return (
		<div className="i">
			<div className="i-left">
				<div className="i-left-wrapper">
					<h2 className="i-intro">Hello, My name is</h2>
					<h1 className="i-name">Manal Irfan</h1>
					<div className="i-title">
						<div className="i-title-wrapper">
							<div className="i-title-item">Web Designer</div>
							<div className="i-title-item">Web Developer</div>
							<div className="i-title-item">UI/UX Designer</div>
							<div className="i-title-item">System Adminstration</div>
							<div className="i-title-item">Machine Learning</div>
						</div>
					</div>
					<div className="i-desc">
						A tech enthusiast who likes to explore and learn new things. From
						building websites to diving into the world of Artifical
						Intelligence.
					</div>

					{/* <div className="i-button">
                    <button>Contact Me</button>
                </div> */}
				</div>
				{/* <svg width="24px" className="i-scroll" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5L12.5303 4.46967C12.2374 4.17678 11.7626 4.17678 11.4697 4.46967L12 5ZM12 13L11.4697 13.5303C11.7626 13.8232 12.2374 13.8232 12.5303 13.5303L12 13ZM9.46967 6.46967C9.17678 6.76256 9.17678 7.23744 9.46967 7.53033C9.76256 7.82322 10.2374 7.82322 10.5303 7.53033L9.46967 6.46967ZM13.4697 7.53033C13.7626 7.82322 14.2374 7.82322 14.5303 7.53033C14.8232 7.23744 14.8232 6.76256 14.5303 6.46967L13.4697 7.53033ZM10.5303 10.4697C10.2374 10.1768 9.76256 10.1768 9.46967 10.4697C9.17678 10.7626 9.17678 11.2374 9.46967 11.5303L10.5303 10.4697ZM14.5303 11.5303C14.8232 11.2374 14.8232 10.7626 14.5303 10.4697C14.2374 10.1768 13.7626 10.1768 13.4697 10.4697L14.5303 11.5303ZM3.25 10V14H4.75V10H3.25ZM20.75 14V10H19.25V14H20.75ZM11.25 5V13H12.75V5H11.25ZM11.4697 4.46967L9.46967 6.46967L10.5303 7.53033L12.5303 5.53033L11.4697 4.46967ZM11.4697 5.53033L13.4697 7.53033L14.5303 6.46967L12.5303 4.46967L11.4697 5.53033ZM12.5303 12.4697L10.5303 10.4697L9.46967 11.5303L11.4697 13.5303L12.5303 12.4697ZM12.5303 13.5303L14.5303 11.5303L13.4697 10.4697L11.4697 12.4697L12.5303 13.5303ZM20.75 10C20.75 5.16751 16.8325 1.25 12 1.25V2.75C16.0041 2.75 19.25 5.99594 19.25 10H20.75ZM12 22.75C16.8325 22.75 20.75 18.8325 20.75 14H19.25C19.25 18.0041 16.0041 21.25 12 21.25V22.75ZM3.25 14C3.25 18.8325 7.16751 22.75 12 22.75V21.25C7.99594 21.25 4.75 18.0041 4.75 14H3.25ZM4.75 10C4.75 5.99594 7.99594 2.75 12 2.75V1.25C7.16751 1.25 3.25 5.16751 3.25 10H4.75Z" fill="rgba(215,162,119,255)"/>
</svg> */}
			</div>
			<div className="i-right">
				<svg
					width="363"
					height="84"
					className="rectangle"
					viewBox="0 0 363 84"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<rect width="363" height="139" fill="url(#paint0_linear_117_3)" />
					<defs>
						<linearGradient
							id="paint0_linear_117_3"
							x1="2.03097e-07"
							y1="69.7527"
							x2="363"
							y2="69.7527"
							gradientUnits="userSpaceOnUse"
						>
							<stop stop-color="#CD936B" />
							<stop offset="1" stop-color="#A36E4E" />
						</linearGradient>
					</defs>
				</svg>

				<svg width="468" height="468" className="circle" viewBox="0 0 468 468" fill="none" xmlns="http://www.w3.org/2000/svg">
					<circle cx="234" cy="234" r="234" fill="url(#paint0_linear_117_2)" />
					<defs>
						<linearGradient id="paint0_linear_117_2" x1="433.751" y1="348.66" x2="14.4655" y2="193.582" gradientUnits="userSpaceOnUse">
							<stop stop-color="#A36E4E" />
							<stop offset="1" stop-color="#CE936B" />
						</linearGradient>
					</defs>
				</svg>

				<svg className="dots" width="503" height="153" viewBox="0 0 503 153" xmlns="http://www.w3.org/2000/svg">
					<circle cx="4" cy="4" r="4" fill="white" />
					<circle cx="4" cy="33" r="4" fill="white" />
					<circle cx="4" cy="62" r="4" fill="white" />
					<circle cx="4" cy="91" r="4" fill="white" />
					<circle cx="4" cy="120" r="4" fill="white" />
					<circle cx="4" cy="149" r="4" fill="white" />
					<circle cx="37" cy="4" r="4" fill="white" />
					<circle cx="37" cy="33" r="4" fill="white" />
					<circle cx="37" cy="62" r="4" fill="white" />
					<circle cx="37" cy="91" r="4" fill="white" />
					<circle cx="37" cy="120" r="4" fill="white" />
					<circle cx="37" cy="149" r="4" fill="white" />
					<circle cx="70" cy="4" r="4" fill="white" />
					<circle cx="70" cy="33" r="4" fill="white" />
					<circle cx="70" cy="62" r="4" fill="white" />
					<circle cx="70" cy="91" r="4" fill="white" />
					<circle cx="70" cy="120" r="4" fill="white" />
					<circle cx="70" cy="149" r="4" fill="white" />
					<circle cx="103" cy="4" r="4" fill="white" />
					<circle cx="103" cy="33" r="4" fill="white" />
					<circle cx="103" cy="62" r="4" fill="white" />
					<circle cx="103" cy="91" r="4" fill="white" />
					<circle cx="103" cy="120" r="4" fill="white" />
					<circle cx="103" cy="149" r="4" fill="white" />
					<circle cx="136" cy="4" r="4" fill="white" />
					<circle cx="136" cy="33" r="4" fill="white" />
					<circle cx="136" cy="62" r="4" fill="white" />
					<circle cx="136" cy="91" r="4" fill="white" />
					<circle cx="136" cy="120" r="4" fill="white" />
					<circle cx="136" cy="149" r="4" fill="white" />
					<circle cx="169" cy="4" r="4" fill="white" />
					<circle cx="169" cy="33" r="4" fill="white" />
					<circle cx="169" cy="62" r="4" fill="white" />
					<circle cx="169" cy="91" r="4" fill="white" />
					<circle cx="169" cy="120" r="4" fill="white" />
					<circle cx="169" cy="149" r="4" fill="white" />
					<circle cx="202" cy="4" r="4" fill="white" />
					<circle cx="202" cy="33" r="4" fill="white" />
					<circle cx="202" cy="62" r="4" fill="white" />
					<circle cx="202" cy="91" r="4" fill="white" />
					<circle cx="202" cy="120" r="4" fill="white" />
					<circle cx="202" cy="149" r="4" fill="white" />
					<circle cx="235" cy="4" r="4" fill="white" />
					<circle cx="235" cy="33" r="4" fill="white" />
					<circle cx="235" cy="62" r="4" fill="white" />
					<circle cx="235" cy="91" r="4" fill="white" />
					<circle cx="235" cy="120" r="4" fill="white" />
					<circle cx="235" cy="149" r="4" fill="white" />
					<circle cx="268" cy="4" r="4" fill="white" />
					<circle cx="268" cy="33" r="4" fill="white" />
					<circle cx="268" cy="62" r="4" fill="white" />
					<circle cx="268" cy="91" r="4" fill="white" />
					<circle cx="268" cy="120" r="4" fill="white" />
					<circle cx="268" cy="149" r="4" fill="white" />
					<circle cx="301" cy="4" r="4" fill="white" />
					<circle cx="301" cy="33" r="4" fill="white" />
					<circle cx="301" cy="62" r="4" fill="white" />
					<circle cx="301" cy="91" r="4" fill="white" />
					<circle cx="301" cy="120" r="4" fill="white" />
					<circle cx="301" cy="149" r="4" fill="white" />
					<circle cx="334" cy="4" r="4" fill="white" />
					<circle cx="334" cy="33" r="4" fill="white" />
					<circle cx="334" cy="62" r="4" fill="white" />
					<circle cx="334" cy="91" r="4" fill="white" />
					<circle cx="334" cy="120" r="4" fill="white" />
					<circle cx="334" cy="149" r="4" fill="white" />
					<circle cx="367" cy="4" r="4" fill="white" />
					<circle cx="367" cy="33" r="4" fill="white" />
					<circle cx="367" cy="62" r="4" fill="white" />
					<circle cx="367" cy="91" r="4" fill="white" />
					<circle cx="367" cy="120" r="4" fill="white" />
					<circle cx="367" cy="149" r="4" fill="white" />
					<circle cx="400" cy="4" r="4" fill="white" />
					<circle cx="400" cy="33" r="4" fill="white" />
					<circle cx="400" cy="62" r="4" fill="white" />
					<circle cx="400" cy="91" r="4" fill="white" />
					<circle cx="400" cy="120" r="4" fill="white" />
					<circle cx="400" cy="149" r="4" fill="white" />
					<circle cx="433" cy="4" r="4" fill="white" />
					<circle cx="433" cy="33" r="4" fill="white" />
					<circle cx="433" cy="62" r="4" fill="white" />
					<circle cx="433" cy="91" r="4" fill="white" />
					<circle cx="433" cy="120" r="4" fill="white" />
					<circle cx="433" cy="149" r="4" fill="white" />
					<circle cx="466" cy="4" r="4" fill="white" />
					<circle cx="466" cy="33" r="4" fill="white" />
					<circle cx="466" cy="62" r="4" fill="white" />
					<circle cx="466" cy="91" r="4" fill="white" />
					<circle cx="466" cy="120" r="4" fill="white" />
					<circle cx="466" cy="149" r="4" fill="white" />
					<circle cx="499" cy="4" r="4" fill="white" />
					<circle cx="499" cy="33" r="4" fill="white" />
					<circle cx="499" cy="62" r="4" fill="white" />
					<circle cx="499" cy="91" r="4" fill="white" />
					<circle cx="499" cy="120" r="4" fill="white" />
					<circle cx="499" cy="149" r="4" fill="white" />
				</svg>

				<svg width="173" height="46" className="shortLine" viewBox="0 0 173 46" fill="none" xmlns="http://www.w3.org/2000/svg">
					<line x1="44.1942" y1="1.76777" x2="1.76775" y2="44.1942" stroke="white" stroke-width="5" />
					<line x1="86.6206" y1="1.76777" x2="44.1941" y2="44.1942" stroke="white" stroke-width="5" />
					<line x1="128.621" y1="1.76777" x2="86.1941" y2="44.1942" stroke="white" stroke-width="5" />
					<line x1="170.621" y1="1.76777" x2="128.194" y2="44.1942" stroke="white" stroke-width="5" />
				</svg>
				<svg width="342" height="46" className="longLine" viewBox="0 0 342 46" fill="none" xmlns="http://www.w3.org/2000/svg">
					<line x1="44.1942" y1="1.76777" x2="1.76775" y2="44.1942" stroke="white" stroke-width="5" />
					<line x1="86.6206" y1="1.76777" x2="44.1941" y2="44.1942" stroke="white" stroke-width="5" />
					<line x1="128.621" y1="1.76777" x2="86.1941" y2="44.1942" stroke="white" stroke-width="5" />
					<line x1="170.621" y1="1.76777" x2="128.194" y2="44.1942" stroke="white" stroke-width="5" />
					<line x1="213.194" y1="1.76777" x2="170.768" y2="44.1942" stroke="white" stroke-width="5" />
					<line x1="255.621" y1="1.76777" x2="213.194" y2="44.1942" stroke="white" stroke-width="5" />
					<line x1="297.621" y1="1.76777" x2="255.194" y2="44.1942" stroke="white" stroke-width="5" />
					<line x1="339.621" y1="1.76777" x2="297.194" y2="44.1942" stroke="white" stroke-width="5" />
				</svg>

			</div>
		</div>
	);
};

export default intro;
