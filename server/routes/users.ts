import { Router } from 'express'
import checkJwt, { JwtRequest } from '../auth0.ts'
import multer from 'multer'
import path from 'path'

const router = Router()

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.resolve('public/images'))
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`)
  },
})

const upload = multer({ storage: storage })

router.get('/', checkJwt, async (req: JwtRequest, res) => {
  try {
    const result = await db.getAllUsers()
    res.json(result)
  } catch (err) {
    console.log(err)
    res.status(500).json('Internal Server Error')
  }
})

router.get('/me', checkJwt, async (req: JwtRequest, res) => {
  try {
    const auth0Id = req.auth?.sub
    const result = await db.getUserById(auth0Id as string)
    res.json({ user: result })
  } catch (err) {
    console.log(err)
    res.sendStatus(500)
  }
})

router.get('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const result = await db.getUserByUserId(id)
    res.json({ user: result })
  } catch (err) {
    console.log(err)
    res.status(500).json('Internal Server Error')
  }
})

router.post(
  '/',
  checkJwt,
  upload.single('profile_picture'),
  async (req: JwtRequest, res) => {
    try {
      const auth0Id = req.auth?.sub
      const { userName } = req.body
      let profilePicture = ''
      if (req.file) {
        profilePicture = `/images/${req.file.filename}`
      }
      const convert = {
        user_name: userName as string,
        profile_picture: profilePicture,
        auth0id: auth0Id as string,
      }

      const result = await db.createUser(convert)
      res.status(201).json(result)
    } catch (err) {
      console.log(err)
      res.status(400).json('Bad request')
    }
  },
)

export default router
