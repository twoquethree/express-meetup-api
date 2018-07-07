import { Router } from 'express'
import { create } from './controller'

const router = new Router()

/**
 * @api {post} /meetups Create meetup
 * @apiName CreateMeetup
 * @apiGroup Meetup
 * @apiSuccess {Object} meetup Meetup's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Meetup not found.
 */
router.post('/',
  create)

export default router
