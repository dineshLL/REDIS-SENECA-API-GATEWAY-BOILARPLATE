import SenecaManager from '../transport/seneca.manager';


class TestController {
  constructor() {
    this.seneca = SenecaManager.seneca;
  }

  test = (req, res, next) => {
    this.seneca.act({ role: 'search', cmd: 'get_reply', payload: 'CLIENT MESSAGE' }, function (err, response) {
        if (err) {
            return res.json(err)
        }
        res.json(response)
    });
  }

}

/** export the class */
let testCtrl = new TestController();
export default testCtrl;
