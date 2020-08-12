const express = require("express");
const router = express.Router();
const parser = require("body-parser");
const connection = require("../config");

router.use(parser.json());

//  GET

router.get("/", (req, res) => {
  const sql = "SELECT * FROM services";
  connection.query(sql, (error, results, fields) => {
    if (error) {
      res.status(501).send("impossible de charger la page");
    } else {
      res.json(results);
    }
  });
});

router.get("/:id", (req, res) => {
  const sql = "SELECT s.id, s.title, s.text FROM services s WHERE s.id=?";
  connection.query(sql, (error, results, fields) => {
    if (error) {
      res.status(501).send("impossiblle de charger la page");
    } else {
      res.json(results);
    }
  });
});

//  POST

router.post("/", (req, res) => {
  const services = req.body;
  const sql = "INSET INTO services (title,text) VALUES (?,?)";
  connection.query(
    sql,
    [services.title, services.text],
    (error, results, fields) => {
      if (error) {
        res.status(501).send("couldn't post" + error);
      } else {
        req.body.id = results.insertId;
        res.json(req.body);
      }
    },
  );
});

//  PUT

router.put("/:id", (req, res) => {
  const idServices = req.params.id;
  const services = req.body;
  connection.query(
    `UPDATE services SET title=?, text=? WHERE id=${idServices}`,
    [services, idServices],
    (error, results, fields) => {
      if (error) {
        res.status(501).send("couldn't put service" + error);
      } else {
        res.json(req.body);
      }
    },
  );
});

//  DELETE

router.delete("/:id", (req, res) => {
  const idServices = req.params.id;
  connection.query(
    "DELETE FROM services WHERE id=?",
    [idServices],
    (error, results, fields) => {
      if (error) {
        res.status(501).send("couldn't delete services" + error);
      } else {
        res.json(req.body);
      }
    },
  );
});

module.exports = router;
