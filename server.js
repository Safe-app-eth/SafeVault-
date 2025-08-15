import express from 'express'
import bodyParser from 'body-parser'
import sendTransaction from './sendTransaction.js'

const app = express()
app.use(bodyParser.json())

app.post('/transaction', async (req, res) => {
  try {
    const { to, value, data } = req.body

    if (!to || !value) {
      return res.status(400).json({ error: "Missing required fields: 'to' and 'value'" })
    }

    const result = await sendTransaction({ to, value, data })
    res.json({ success: true, result })

  } catch (error) {
    console.error(error)
    res.status(500).json({ success: false, error: error.message })
  }
})

app.listen(3000, () => console.log("🚀 SafeVault API running on port 3000"))
