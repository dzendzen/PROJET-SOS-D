const express = require("express");
const router = express.Router();
const parser = require("body-parser");
const connection = require("../config");

router.use(parser.json());

//  GET
router.get("/all", (req, res) => {
  const sql = "SELECT * FROM contact";
  connection.query(sql, (error, results, fields) => {
    if (error) {
      res.status(501).send("impossible de charger la page" + error);
    } else {
      res.json(results);
    }
  });
});

router.get("/", (req, res) => {
  const sql = "SELECT c.id,c.name,c.address, c.tel, c.email FROM contact c";
  connection.query(sql, (error, results, fields) => {
    if (error) {
      res.status(501).send("impossible de charger la page" + error);
    } else {
      res.status(200).json(results);
    }
  });
});
router.get("/:id", (req, res) => {
  const sql =
    "SELECT c.id, c.name, c.address, c.tel, c.email FROM contact c WHERE c.id=?";
  connection.query(sql, [req.params], (error, results, fields) => {
    if (error) {
      res.status(501).send("couldn't load page");
    } else {
      res.json(results);
    }
  });
});

//   POST

router.post("/", (req, res) => {
  const contact = req.body;
  const sql = `INSERT INTO contact(name,tel,address,email) VALUES(${contact.name},${contact.tel},${contact.address},${contact.email})`;
  connection.query(
    sql,
    [contact.name, contact.email, contact.address, contact.tel],
    (error, results, fields) => {
      if (error) {
        res.status(501).send("couldn't post contact" + error);
      } else {
        req.body.id = results.insertid;
        res.json(req.body);
      }
    },
  );
});

//  PUT

router.put("/:id", (req, res) => {
  const idContact = req.params.id;
  const contact = req.body;
  connection.query(
    `UPDATE contact SET name=?, address=?,tel=?, email=? WHERE id=${idContact}`,
    contact[
      (contact.name, contact.address, contact.email, contact.tel, idContact)
    ],
    (error, reults, fields) => {
      if (error) {
        res.status(501).send("couldn't put contact" + error);
      } else {
        res.json(req.body);
      }
    },
  );
});

// DELETE

router.delete("/:id", (req, res) => {
  const idContact = req.params.idContact;
  connection.query(
    "DELETE FROM contact WHERE id =?",
    [idContact],
    (error, results, fields) => {
      if (error) {
        res.status(501).send("coudn't delete contact" + error);
      } else {
        res.json(req.body);
      }
    },
  );
});

module.exports = router;
