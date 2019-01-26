import sample from "lodash/sample";
import randomJpg from './randomJpg'
import randomVideo from './randomVideo'
import randomGif from './randomGif'

export default ({id}) => sample([randomJpg, randomVideo, randomGif])({id})