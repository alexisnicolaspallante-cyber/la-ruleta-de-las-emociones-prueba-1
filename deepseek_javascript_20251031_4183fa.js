export default function handler(req, res) {
  const { emotions } = require('../../data/emotions')
  
  if (req.method === 'GET') {
    res.status(200).json(emotions)
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}