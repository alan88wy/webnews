// can also make database call here
// With this, I can access this from
// localhost:3000/api/articles

import { articles } from '../../../data'

export default function handler(req, res) {

        res.status(200).json(articles)
}

// Can also use axios to fetch data from another website

// const axios = require('axios');

// export default function handler(req, res) {

//     axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
//     .then(response => {
//         res.status(200).json(response.data)
//     })
//     .catch(error => {
//         res.status(404).json({
//             message: 'No records found'
//         })
//     })
// }

