var axios = require('axios');

test('test REST API response', () => {
  axios.post('/getdata').then(res=>{
    let fetchedDataLen = (res.data).length

    expect(fetchedDataLen).toBeGreaterThan(0);
    done();
  })
})
