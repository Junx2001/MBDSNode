let Assignment = require("./assignment.model");
let User = require("../users/user.model");
let Subject = require("../subjects/subject.model");

const formatter = require("../../services/json-formatter-service");
const { ObjectId } = require("bson");

function getAssignments(req, res) {

  let aggregateQuery = Assignment.aggregate([
    {
      $lookup: {
        from: "users", // replace with your actual User collection name
        localField: "student_id",
        foreignField: "_id",
        as: "student"
      }
    },
    {
      $lookup: {
        from: "subjects", // replace with your actual Subject collection name
        localField: "subject_id",
        foreignField: "_id",
        as: "subject"
      }
    },
    {
      $unwind: "$student"
    },
    {
      $unwind: "$subject"
    },
    {
      $lookup: {
        from: "users", // replace with your actual Professor collection name
        localField: "subject.professor_id",
        foreignField: "_id",
        as: "subject.professor"
      }
    },
    {
      $unwind: "$subject.professor"
    }
  ]);

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

// Récupérer un assignment par son id (GET)
function getAssignment(req, res) {
  let assignmentId = req.params.id;

  Assignment.aggregate([
    { $match: { "_id": ObjectId(assignmentId) } },
    {
      $lookup: {
        from: "users", // replace with your actual User collection name
        localField: "student_id",
        foreignField: "_id",
        as: "student"
      }
    },
    {
      $lookup: {
        from: "subjects", // replace with your actual Subject collection name
        localField: "subject_id",
        foreignField: "_id",
        as: "subject"
      }
    },
    { $unwind: "$student" },
    { $unwind: "$subject" },
    {
      $lookup: {
        from: "users", // replace with your actual Professor collection name
        localField: "subject.professor_id",
        foreignField: "_id",
        as: "subject.professor"
      }
    },
    { $unwind: "$subject.professor" }
  ])
  .exec((err, assignment) => {
    if (err) {
      console.log(err);
      res.status(500).json(formatter.formatJsonRespoonse(false, err, 500, {}));
    }
    res.status(200).json(formatter.formatJsonRespoonse(true, "Assignment fetched successfully", 200, assignment));
  });
}



// Ajout d'un assignment (POST)
async function postAssignment(req, res) {
  let assignment = new Assignment();
  assignment.nom = req.body.nom;

  assignment.student_id = req.user.userId;

  assignment.subject_id = req.body.subject_id;
  assignment.note = req.body.note;
  assignment.remarque = req.body.remarque;
  assignment.dateDeRendu = req.body.dateDeRendu;
  assignment.rendu = req.body.rendu;

  let student = await User.findOne({ _id: req.user.userId, role: "ROLE_USER_STUDENT" });
  let subject = await Subject.findOne({ _id: req.body.subject_id });

  if (!student || !subject) {
    return res.status(400).json(formatter.formatJsonRespoonse(false,"Student or Subject not found", 400, {}));
  }

  console.log("POST assignment reçu :");
  console.log(assignment);

  assignment.save((err) => {
    if (err) {
      res.status(500).json(formatter.formatJsonRespoonse(false,"Cannot POST Assignment : "+err, 500, {}));
    }
    res.status(201).json(formatter.formatJsonRespoonse(true, "Assignment saved successfully", 201, assignment));
  });
}

// Update d'un assignment (PUT)
function updateAssignment(req, res) {
  console.log("UPDATE reçu assignment : ");
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
        res.status(200).json(formatter.formatJsonRespoonse(true, "Assignment updated successfully", 200, assignment));
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
