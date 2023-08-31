import { Router } from 'express'

const testRouter: Router = Router()

testRouter.get('/', (_req, res) => {
  try {
    res.json({ message: 'Server is Ok!' }).status(200)
  } catch (error) {
    res.json({ error: String(error) }).status(400)
  }
})

export default testRouter
