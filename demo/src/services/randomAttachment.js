import sample from "lodash/sample";
import randomJpg from './randomJpg'
import randomVideo from './randomVideo'
import randomGif from './randomGif'
import randomPdf from './randomPdf'

export default ({id}) => sample([randomJpg, randomVideo, randomGif, randomPdf])({id})