import React, { useState } from "react";
import {
    CardContent,
    Modal,
    Box,
    DialogActions,
    Button,
} from "@mui/material";

const About: React.FC = () => {
    const [selected, setSelected] = useState<boolean>(false);
    const courses = ["Deep Learning", "Data Management", "Web Programming", "Machine Learning", "Artificial Intelligence", "Concurrent Programming", "Systems Programming", "Algorithms", "Data Structures", "Computer Architecture"]
    const ecs = ["Stevens Robotics Club", "Stevens IEEE Club", "Stevens Computer Science Club"]
    const awards = ["Edwin A. Stevens Scholarship", "Honors Graduate"]
    const interests = [
        {
            icon: "/media/interests/artificial-intelligence-ai-chip-icon.svg",
            label: "Artificial Intelligence"
        },
        {
            icon: "/media/interests/code-icon.svg",
            label: "Software Engineering"
        },
        {
            icon: "/media/interests/full-stack-developer-icon.svg",
            label: "Full Stack Development"
        },
        {
            icon: "/media/interests/market-research-analysis-icon.svg",
            label: "Data Management"
        }
    ];
    const skills = ["/media/skills/aws-icon.svg", "/media/skills/c-plus-plus-programming-language-icon.svg", "/media/skills/c-program-icon.svg", "/media/skills/css-icon.svg", "/media/skills/git-icon.svg", "/media/skills/html-icon.svg", "/media/skills/java-programming-language-icon.svg", "/media/skills/javascript-programming-language-icon.svg", "/media/skills/node-js-icon.svg", "/media/skills/postgresql-icon.svg", "/media/skills/python-programming-language-icon.svg", "/media/skills/ubuntu-color-icon.svg"]

    const handleClose = () => setSelected(false);


    return (
        <>



            <section className="p-6">
                <h2 className="text-3xl font-bold text-white text-center mb-10 drop-shadow-[0_1px_0_black] ">
                    About Me
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div>
                        <h3 className="text-2xl font-bold text-purple-400 text-center mb-5 drop-shadow-[0_1px_0_black] ">
                            Education
                        </h3>
                        <div
                            onClick={() => setSelected(true)}
                            className="group cursor-pointer bg-white/30 backdrop-blur-md rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-1.5 hover:scale-[1.03] hover:bg-white transition-transform duration-300 ease-in-out"
                        >

                            <div className="flex flex-col items-center p-6 text-black w-full h-full rounded-xl">
                                <img
                                    src="/media/stevens_institute_of_technology_logo.jpg"
                                    alt="stevens institute of technology"
                                    className="w-24 h-24 object-cover rounded-full mb-4 border-4 border-white transition-colors duration-300 group-hover:border-black"
                                />


                                {/* Text Content */}
                                <CardContent className="text-center space-y-1">
                                    <h6 className="text-xl font-bold text-white group-hover:text-black">
                                        Stevens Institute of Technology
                                    </h6>
                                    <p className="italic text-white group-hover:text-black">
                                        Computer Science
                                    </p>
                                    <p className="text-sm text-gray-300 group-hover:text-gray-700">
                                        September 2022 – May 2025
                                    </p>
                                </CardContent>
                            </div>
                        </div>

                        <Modal open={selected} onClose={handleClose}>
                            <Box className="relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-4/5 lg:w-2/3 bg-white/70 backdrop-blur-md shadow-lg p-6 rounded-xl flex flex-col md:flex-row max-h-[90vh] overflow-auto text-black items-center">



                                {/* Text Info Section */}
                                <div className="flex-1 space-y-4">
                                    <div className="flex items-center justify-center gap-4 mb-2">
                                        <img
                                            src="/media/stevens_institute_of_technology_logo.jpg"
                                            alt="Stevens Institute of Technology"
                                            className="w-14 h-14 rounded-full border-2 border-black"
                                        />
                                        <h2 className="text-2xl font-bold text-center text-black">
                                            Stevens Institute of Technology
                                        </h2>
                                    </div>
                                    <div className="space-y-3 text-center">
                                        <dl className="grid grid-cols-3 gap-x-4 gap-y-3 text-sm">
                                            <dt className="text-center font-semibold text-[#2c3e50]">Degree:</dt>
                                            <dd className="font-bold  col-span-2">Bachelors of Science</dd>

                                            <dt className="text-center font-semibold text-[#2c3e50]">Major:</dt>
                                            <dd className="font-bold col-span-2">Computer Science</dd>

                                            {/* Duration */}
                                            <dt className="text-center font-semibold text-[#2c3e50]">Time:</dt>
                                            <dd className="font-bold col-span-2">
                                                September 2022 – May 2025
                                            </dd>

                                            <>
                                                <dt className="text-center font-semibold text-[#2c3e50]">Courses:</dt>
                                                <dd className="col-span-2 flex flex-wrap gap-2 justify-center">
                                                    {courses.map((course, idx) => (
                                                        <span
                                                            key={idx}
                                                            className="bg-gray-600 text-white text-sm px-3 py-1 rounded-full"
                                                        >
                                                            {course}
                                                        </span>
                                                    ))}
                                                </dd>
                                            </>


                                            {/* Description */}
                                            <dt className="text-center font-semibold text-[#2c3e50]">Extracurriculars:</dt>
                                            <dd className="col-span-2 flex flex-wrap gap-2 justify-center">
                                                {ecs.map((ec, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="bg-red-800 text-white text-sm px-3 py-1 rounded-full"
                                                    >
                                                        {ec}
                                                    </span>
                                                ))}
                                            </dd>

                                            <dt className="font-semibold text-center text-[#2c3e50]">Awards:</dt>
                                            <dd className="col-span-2 flex flex-wrap gap-2 justify-center">
                                                {awards.map((award, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="bg-blue-400 text-white text-sm px-3 py-1 rounded-full"
                                                    >
                                                        {award}
                                                    </span>
                                                ))}
                                            </dd>
                                        </dl>


                                    </div>
                                    <DialogActions className="justify-center">
                                        <Button onClick={handleClose} color="primary" variant="outlined" >
                                            Close
                                        </Button>
                                    </DialogActions>
                                </div>


                            </Box>

                        </Modal>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-purple-400 text-center mb-5 drop-shadow-[0_1px_0_black] ">
                            Interests
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-md">
                            {interests.map((interest, idx) => (
                                <div
                                    key={idx}
                                    className="flex flex-col items-center text-center bg-white rounded-lg shadow-md p-5"
                                >
                                    <img
                                        src={interest.icon}
                                        alt={`${interest.label} icon`}
                                        className="w-20 h-20 mb-3 object-contain"
                                    />
                                    <span className="text-lg font-semibold text-[#2c3e50] mt-2">
                                        {interest.label}
                                    </span>
                                </div>
                            ))}
                        </div>

                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-purple-400 text-center mb-5 drop-shadow-[0_1px_0_black] ">
                            Skills
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 w-full max-w-4xl">
                            {skills.map((src, idx) => (
                                <div
                                    key={idx}
                                    className="flex justify-center items-center bg-white rounded-lg shadow-md p-5"
                                >
                                    <img src={src} alt={`Skill ${idx + 1}`} className="w-14 h-14 object-contain" />
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default About;