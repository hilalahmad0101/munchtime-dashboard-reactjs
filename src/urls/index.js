const
    BASE_URL = 'http://127.0.0.1:8000'
const LOGIN_URL = '/api/admin/login'
const POST_URL = '/api/admin/posts'
const CATEGORY_URL = '/api/admin/categories'
const FAQ_URL = '/api/admin/faqs'
const FeedBack_URL = '/api/admin/feedbacks'
const SETTING_URL = '/api/admin/settings'
const CHANGE_PASSWORD_URl = '/api/admin/change/password'
const POST_CATEGORIES = '/api/admin/post/category'


const HEADER = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('token'),
}


const HEADER_IMAGE = {
    'Authorization': 'Bearer ' + localStorage.getItem('token'),
}


export default HEADER
export {
    BASE_URL,
    LOGIN_URL,
    POST_URL,
    CATEGORY_URL,
    FAQ_URL,
    FeedBack_URL,
    SETTING_URL,
    CHANGE_PASSWORD_URl,
    HEADER_IMAGE, 
    POST_CATEGORIES
}
