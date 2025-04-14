import * as dao from "./dao.js";
//import * as courseDao from "../Courses/dao.js";

export default function EnrollmentsRoutes(app) {

     // from lecture: findAllEnrollments
     const retrieveEnrollments = async (req, res) => {
        const enrollments = await dao.retrieveEnrollments();
        res.json(enrollments);
    };
    app.get("/api/enrollments", retrieveEnrollments);

    const unenrollUserFromCourse = async (req, res) => {
        let { uid, cid } = req.params;
        if (uid === "current") {
          const currentUser = req.session["currentUser"];
          uid = currentUser._id;
        }
        const status = await dao.unenrollUserFromCourse(uid, cid);
        res.send(status);
      };
      app.delete("/api/users/:uid/courses/:cid", unenrollUserFromCourse);
}