const mongoose = require('mongoose')
const userProfileShema = new mongoose.Schema(
    {
        username  : { type : String},
        followers : [{ type : String}],
        following : [{ type : String}],
        posts : [{ 
            postId : { type : Number},
            imageUrl : { type : String},
            caption : { type : String},
            upvotes : { type : Number, default : 0},
        }]
    },
    {
        versionKey : false
    }
)
module.exports = mongoose.model('userProfile', userProfileShema)
// {
//     "username": "",                 ?------------ string
//     "followers": ["A", "B, "C],     ?------------ string array of usernames that follow the user (empty by default)
//     "following": ["B", "A"],        ?------------ string array of usernames that user follows (empty by default)
//     "posts": [
//         {
//             "postId": ,             ?--------- Integer
//             "imageUrl": "",         ?--------- String
//             "caption": "",          ?--------- String
//             "upvotes": 0            ?--------- Integer (must be zero by default)
//         }
//     ]                               ?------------ array of objects that contains details regarding a post (empty list by default)
// }
                        