
// import {
//     CardContent,
//     Typography,
//     Modal,
//     Box,
//     DialogActions,
//     Button,
// } from "@mui/material";
// export default function Home() {

//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         <div>
//             {workData.map((work, idx) => (
//                 <div
//                     key={idx}
//                     onClick={() => setSelectedWork(work)}
//                     className="group cursor-pointer bg-white/30 backdrop-blur-md rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-1.5 hover:scale-[1.03] hover:bg-white transition-transform duration-300 ease-in-out"
//                 >

//                     <div className="flex flex-col items-center p-6 text-black w-full h-full rounded-xl">
//                         {/* Circle Image */}
//                         <img
//                             src={work.picture}
//                             alt={work.company}
//                             className="w-24 h-24 object-cover rounded-full mb-4 border-4 border-white transition-colors duration-300 group-hover:border-black"
//                         />


//                         {/* Text Content */}
//                         <CardContent className="text-center space-y-1">
//                             <Typography variant="h6" className="text-xl font-bold text-white group-hover:text-black">
//                                 {work.company}
//                             </Typography>
//                             <Typography variant="subtitle1" className="italic text-white group-hover:text-black">
//                                 {work.position}
//                             </Typography>
//                             <Typography variant="body2" className="text-sm text-gray-300 group-hover:text-gray-700">
//                                 {work.startTime} – {work.endTime ?? "Present"}
//                             </Typography>
//                         </CardContent>
//                     </div>
//                 </div>
//             ))}

//             <Modal open={!!selectedWork} onClose={handleClose}>
//                 <Box className="relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-4/5 lg:w-2/3 bg-white/70 backdrop-blur-md shadow-lg p-6 rounded-xl flex flex-col md:flex-row max-h-[90vh] overflow-auto text-black items-center">

//                     {/* Media Section */}
//                     {selectedWork?.video && (
//                         <div className="flex flex-col items-center justify-center mb-6 gap-4 text-center">
//                             <h2 className="text-2xl font-bold text-black">
//                                 {selectedWork?.company}
//                             </h2>
//                             <video
//                                 src={selectedWork.video}
//                                 preload="none"
//                                 role="presentation"
//                                 playsInline
//                                 autoPlay
//                                 loop
//                                 muted
//                                 className="w-full max-w-md max-h-[400px] rounded-lg object-contain border-[5px] border-blue-500"
//                             />
//                         </div>
//                     )}


//                     {/* Text Info Section */}
//                     <div className="flex-1 space-y-4">
//                         {/* Header with optional logo */}
//                         {!selectedWork?.video && (
//                             <div className="flex items-center justify-center gap-4 mb-2">
//                                 <img
//                                     src={selectedWork?.picture}
//                                     alt={selectedWork?.company}
//                                     className="w-14 h-14 rounded-full border-2 border-black"
//                                 />
//                                 <h2 className="text-2xl font-bold text-center text-black">
//                                     {selectedWork?.company}
//                                 </h2>
//                             </div>
//                         )}

//                         <div className="space-y-3">
//                             <dl className="grid grid-cols-3 gap-x-4 gap-y-3 text-sm">
//                                 {/* Position */}
//                                 <dt className="font-bold text-right text-[#2c3e50]">Position:</dt>
//                                 <dd className="col-span-2">{selectedWork?.position}</dd>

//                                 {/* Duration */}
//                                 <dt className="font-bold text-right text-[#2c3e50]">Duration:</dt>
//                                 <dd className="col-span-2">
//                                     {selectedWork?.startTime} – {selectedWork?.endTime ?? 'Present'}
//                                 </dd>

//                                 {/* Tools Used */}
//                                 {selectedWork?.tools && selectedWork.tools.length > 0 && (
//                                     <>
//                                         <dt className="font-bold text-right text-[#2c3e50]">Tools Used:</dt>
//                                         <dd className="col-span-2 flex flex-wrap gap-2">
//                                             {selectedWork.tools.map((tool, idx) => (
//                                                 <span
//                                                     key={idx}
//                                                     className="bg-purple-600 text-white text-sm px-3 py-1 rounded-full"
//                                                 >
//                                                     {tool}
//                                                 </span>
//                                             ))}
//                                         </dd>
//                                     </>
//                                 )}


//                                 {/* Description */}
//                                 <dt className="font-bold text-right text-[#2c3e50]">Description:</dt>
//                                 <dd className="col-span-2">{selectedWork?.description}</dd>
//                             </dl>


//                         </div>
//                         <DialogActions className="justify-center">
//                             <Button onClick={handleClose} color="primary" variant="outlined" >
//                                 Close
//                             </Button>
//                         </DialogActions>
//                     </div>


//                 </Box>

//             </Modal>
//         </div>
//     </div>
// }
