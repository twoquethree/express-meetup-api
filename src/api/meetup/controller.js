
export const create = ({ body }, res, next) =>
  res.status(201).json(body)
