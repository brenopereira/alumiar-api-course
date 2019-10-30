"use strict";

const Category = use("App/Models/Category");

class CategoryController {
  async index({ response }) {
    const categories = await Category.all();

    return response.status(200).send({ categories });
  }

  async store({ request, response }) {
    const { name } = request.all();

    const category = await Category.create({
      name
    });

    return response.status(201).send(category);
  }
}

module.exports = CategoryController;
