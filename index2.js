//동물소리 api 서버 만들기//
const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/sound/:name', (req, res) => {
  const { name } = req.params // 변수를 {파라미터 이름}으로 설정하면 (파라미터이름)이 문자열로 바로 저장됨. 그냥 변수로 받으면 json데이터로 사용됨.
  console.log(name) 
    if (name == "dog") {
        res.send({'sound':'멍멍'})
    } else if (name == "cat") {
        res.send({'sound':'야옹'})
    } else if (name == "pig") {
        res.send({'sound':'꿀꿀'})
    } else {
        res.send({'sound':'알수없음'})
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})