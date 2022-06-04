import axios from "axios";

const KEY ='AIzaSyDU6HFA0qXnDNBIALABLkzrP1XPtVIjM48';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part : 'snippet',
        type : 'video',
        maxResults : 5,
        key:KEY
    }
})