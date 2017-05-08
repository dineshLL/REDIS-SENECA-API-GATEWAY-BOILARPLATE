import express from 'express';
import testRoutes from './test.routes';
import SenecaManager from '../transport/seneca.manager';

const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) => {
    SenecaManager.seneca.act({ foo: 'one', bar: 'RESHANI' }, function (err, response) {
        if (err) {
            return res.json(err)
        }
        res.json(response)
    })
  }
);

// mount user routes at /users
router.use('/test', testRoutes);

// mount auth routes at /auth
//router.use('/auth', authRoutes);

//mount cr routes at /cr
//router.use('/cr', )

export default router;
