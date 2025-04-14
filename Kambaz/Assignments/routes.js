import * as dao from "./dao.js";

export default function AssignmentRoutes(app) {

    // update
    app.put("/api/assignments/:assignmentId", async (req, res) => {
        const { assignmentId } = req.params;
        const assignmentUpdates = req.body;
        const status = await dao.updateAssignment(assignmentId, assignmentUpdates);
        res.send(status);
      });
    
    // delete
    app.delete("/api/assignments/:assignmentId", async (req, res) => {
    const { assignmentId } = req.params;
    const status = await dao.deleteAssignment(assignmentId);
    res.send(status);
    });

    //findAllAssignments
    app.get("/api/assignments", async (req, res) => {
      const assignments = await dao.findAllAssignments();
      res.json(assignments);
  });




}
