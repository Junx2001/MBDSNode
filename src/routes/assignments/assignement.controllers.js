let Assignment = require("./assignment.model");
const formatter = require("../../services/json-formatter-service");

function getAssignments(req, res) {
  let aggregateQuery = Assignment.aggregate();
  Assignment.aggregatePaginate(
    aggregateQuery,
    {
      page: parseInt(req.query.page) || 1,
      limit: parseInt(req.query.limit) || 10,
    },
    (err, data) => {
      if (err) {
        res.status(500).json(formatter.formatJsonRespoonse(false, err, 500, {}));
      }
      res.status(200).json(formatter.formatJsonRespoonse(true, "Assignments fetched successfully", 200, data));
    }
  );
}

// Récupérer un assignment par son id (GE)
function getAssignment(req, res) {
  let assignmentId = req.params.id;

  Assignment.findById(assignmentId, (err, assinment) => {
    if (err) {
      res.status(500).json(formatter.formatJsonRespoonse(false, err, 500, {}));
    }
    res.status(200).json(formatter.formatJsonRespoonse(true, "Assignment fetched successfully", 200, assinment));
  });

}

// Ajout d'un assignment (POST)
function postAssignment(req, res) {
  let assignment = new Assignment();
  assignment.id = req.body.id;
  assignment.nom = req.body.nom;
  assignment.dateDeRendu = req.body.dateDeRendu;
  assignment.rendu = req.body.rendu;

  console.log("POST assignment reçu :");
  console.log(assignment);

  assignment.save((err) => {
    if (err) {
      res.status(500).json(formatter.formatJsonRespoonse(false,"Cannot POST Assignment : "+err, 500, {}));
    }
    res.status(201).json(formatter.formatJsonRespoonse(true, "Assignment saved successfully", 201, {}));
  });
}

// Update d'un assignment (PUT)
function updateAssignment(req, res) {
  console.log("UPDATE recu assignment : ");
  console.log(req.body);
  Assignment.findByIdAndUpdate(
    req.body._id,
    req.body,
    { new: true },
    (err, assignment) => {
      if (err) {
        console.log(err);
        res.status(500).json(formatter.formatJsonRespoonse(false, err, 500, {}));
      } else {
        res.status(200).json(formatter.formatJsonRespoonse(true, "Assignment updated successfully", 200, {}));
      }
    }
  );
}

// suppression d'un assignment (DELETE)
function deleteAssignment(req, res) {
  Assignment.findByIdAndRemove(req.params.id, (err, assignment) => {
    if (err) {
      res.status(500).json(formatter.formatJsonRespoonse(false, err, 500, {}));
    }
    res.status(200).json(formatter.formatJsonRespoonse(true, "Assignment deleted successfully", 200, {}));
  });
}

module.exports = {
  getAssignments,
  postAssignment,
  getAssignment,
  updateAssignment,
  deleteAssignment,
};
