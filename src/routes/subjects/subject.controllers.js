let Subject = require("./subject.model");
let User = require("../users/user.model");

const formatter = require("../../services/json-formatter-service");

function getSubjects(req, res) {
  let aggregateQuery = Subject.aggregate();
  Subject.aggregatePaginate(
    aggregateQuery,
    {
      page: parseInt(req.query.page) || 1,
      limit: parseInt(req.query.limit) || 10,
    },
    (err, data) => {
      if (err) {
        res.status(500).json(formatter.formatJsonRespoonse(false, err, 500, {}));
      }
      res.status(200).json(formatter.formatJsonRespoonse(true, "Subjects fetched successfully", 200, data));
    }
  );
}

// Récupérer un subject par son id (GE)
function getSubject(req, res) {
  let subjectId = req.params.id;

  Subject.findById(subjectId, (err, assinment) => {
    if (err) {
      res.status(500).json(formatter.formatJsonRespoonse(false, err, 500, {}));
    }
    res.status(200).json(formatter.formatJsonRespoonse(true, "Subject fetched successfully", 200, assinment));
  });

}

// Ajout d'un subject (POST)
async function postSubject(req, res) {
  let subject = new Subject();
  subject.name = req.body.name;
  subject.picture = req.body.picture;
  subject.professor_id = req.user.userId;

  console.log("POST subject reçu :");
  console.log(subject);

  subject.save((err) => {
    if (err) {
      res.status(500).json(formatter.formatJsonRespoonse(false,"Cannot POST Subject : "+err, 500, {}));
    }
    res.status(201).json(formatter.formatJsonRespoonse(true, "Subject saved successfully", 201, subject));
  });
}

// Update d'un subject (PUT)
function updateSubject(req, res) {
  console.log("UPDATE reçu subject : ");
  console.log(req.body);
  Subject.findByIdAndUpdate(
    req.body._id,
    req.body,
    { new: true },
    (err, subject) => {
      if (err) {
        console.log(err);
        res.status(500).json(formatter.formatJsonRespoonse(false, err, 500, {}));
      } else {
        res.status(200).json(formatter.formatJsonRespoonse(true, "Subject updated successfully", 200, subject));
      }
    }
  );
}

// suppression d'un subject (DELETE)
function deleteSubject(req, res) {
  Subject.findByIdAndRemove(req.params.id, (err, subject) => {
    if (err) {
      res.status(500).json(formatter.formatJsonRespoonse(false, err, 500, {}));
    }
    res.status(200).json(formatter.formatJsonRespoonse(true, "Subject deleted successfully", 200, {}));
  });
}

module.exports = {
  getSubjects,
  postSubject,
  getSubject,
  updateSubject,
  deleteSubject,
};
