import mongoose from "mongoose";
const onlineEntryOptionSchema = new mongoose.Schema(
    {
      id: String,
      label: String
    },
    { _id: false }
  );
  
const assignmentSchema = new mongoose.Schema(
  {
    _id: String,
    title: String,
    course: { type: String, ref: "CourseModel" },
    description: String,
    points: Number,
    assignmentGroup: { type: String, default: "ASSIGNMENTS" },
    gradeAs: { type: String, default: "PERCENTAGE" },
    submissionType: { type: String, default: "ONLINE" },
    onlineEntryOptions: {
      type: [onlineEntryOptionSchema],
      default: [
        { id: "wd-text-entry", label: "Text Entry" },
        { id: "wd-website-url", label: "Website URL" },
        { id: "wd-media-recordings", label: "Media Recordings" },
        { id: "wd-student-annotation", label: "Student Annotation" },
        { id: "wd-file-upload", label: "File Uploads" }
      ]
    },
    dueDate: String,
    availableFrom: String,
    availableUntil: String,
  },
  { collection: "assignments" }
);
export default assignmentSchema;


// const assignmentSchema = new mongoose.Schema(
//   {
//     _id: String,
//     title: String,
//     course: { type: String, ref: "CourseModel" },
//     description: String,
//     points: Number,
//   },
//   { collection: "assignments" }
// );
// export default assignmentSchema;