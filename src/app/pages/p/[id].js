
import {useRouter} from 'next/router'

const Post = (props) => {


    return (
        <div>
            Page: {props.id}
        </div>
    )

}

Post.getInitialProps = async function({query}) {
    return {id: query.id}
}

export default Post;