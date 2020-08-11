const express = require("express");
const router = express.Router();
const parser = require("body-parser");
const connection = require("../config");

router.use(parser.json());

//GET about page
router.get("/", (req, res) => {
  const sql = "SELECT * FROM about";
  connection.query(sql, (error, results, fields) => {
    if (error) {
      res.status(501).send("impossible de charger la page");
    } else {
      res.json(result);
    }
  });
});

router.get("/:id", (req, res) => {
  const sql = "SELECT a.id, a.title, a.text FROM about a";
  connection.query(sql, [req.params.id], (error, results, fields) => {
    if (error) {
      res.status(501).send("impossible de charger la page");
    } else {
      res.json(results);
    }
  });
});

// POST

router.post("/", (req, res) => {
  const about = req.body;
  const sql = "INSERT INTO about (title,text) VALUES(?,?)";
  connection.query(sql, [about.title, about.text], (error, results, fields) => {
    if (error) {
      res.status(501).send("couldn't post" + error);
    } else {
      req.body.id = results.insertId;
      res.json(req.body);
    }
  });
});

//  PUT
router.put("/:id", (req, res) => {
  const idAbout = req.params.id;
  const about = req.body;
  connection.query(
    `UPDATE about SET title=?, text=? WHERE id=${idAbout}`,
    [about.title, about.text, idAbout],
    (error, results, fields) => {
      if (error) {
        res.status(501).send("couldn't put in about" + error);
      } else {
        res.json(req.body);
      }
    },
  );
});

// DELETE

router.delete("/:id", (req, res) => {
  const idabout = req.params.id;
  connection.query(
    "DELETE FROM about WHERE id =?",
    [idAbout],
    (error, results, fields) => {
      if (error) {
        res.status(501).send("couldn't delete about" + error);
      } else {
        res.json(req.body);
      }
    },
  );
});

module.exports = router;
