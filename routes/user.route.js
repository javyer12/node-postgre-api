const express = require("express");
const router = express.Router();
const db = require("../services/user.services");
const APIVERSION = "v1";

/**
 * @swagger
 * components:
 *  schemas:
 *      User:
 *          type: object
 *          properties:
 *              name:
 *                  type: string
 *                  description: the user name
 *              email:
 *                  type: string
 *                  description: the user email
 *          required:
 *              - name
 *              - email
 *          example:
 *              name: Alan Turing
 *              email: alan23@miemail.com
 */

/**
 * @swagger
 * /api/create-user:
 *  post:
 *      summary: create a new user
 *      tags: [User]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/User'
 *      responses:
 *          200:
 *              description: new user was successfully created
 *
 */
// [User] hacer referencia al schema user
//$ref hacer referencia a las propiedades del schema user
router.post(`/create-user`, db.createUser);

/**
 * @swagger
 * /api/users:
 *  get:
 *      summary: return the whole list of  users
 *      tags: [User]
 *      responses:
 *          200:
 *              description: All User
 *              content:
 *                   application/json:
 *                        schema:
 *                            type: array
 *                            items:
 *                               $ref: '#/components/schemas/User'
 */
router.get(`/users`, db.getUsers);

// item solo se le agrega cuando es array
/**
 * @swagger
 * /api/user/{id}:
 *  get:
 *      summary: return a user
 *      tags: [User]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *                type: string
 *            required: true
 *            description: return a user by id
 *      responses:
 *          200:
 *               description: just one User
 *               content:
 *                    application/json:
 *                        schema:
 *                            type: object
 *                            $ref: '#/components/schemas/User'
 *          404:
 *                description: user not found
 */
router.get("/user/:id", db.getUserById);

/**
 * @swagger
 * /api/delete-user/{id}:
 *  delete:
 *      summary: delete a user
 *      tags: [User]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *                type: string
 *            required: true
 *            description: delete a user by id
 *      responses:
 *          200:
 *               description: user was deleted
 *          404:
 *                description: user not found or it's probably it does not exit.
 */
router.delete(`/delete-user/:id`, db.deleteUser);

/**
 * @swagger
 * /api/update-user/{id}:
 *  put:
 *      summary: update a user
 *      tags: [User]
 *      requestBody:
 *           required: true
 *           content:
 *               application/json:
 *                    schema:
 *                        type: object
 *                        $ref: '#/components/schemas/User'
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *                type: string
 *            required: true
 *            description: update a user by id
 *      responses:
 *          200:
 *               description: user was update
 *          404:
 *                description: user not updated
 */
router.put(`/update-user/:id`, db.updateUser);

module.exports = router;
