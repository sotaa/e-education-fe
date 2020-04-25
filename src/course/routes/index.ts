import { Router } from 'express';
import { CourseController } from '../controllers';

const router = Router();
const controller = new CourseController();

router.get('/', async (req, res) => {
  try {
    const courses = await controller.getCourses(req.params || {});
    res.json(courses);
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
});


export {router as courseRouter};